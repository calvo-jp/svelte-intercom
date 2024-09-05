/* eslint-disable @typescript-eslint/no-empty-object-type */
/* eslint-disable prefer-const */

import {
  boot as boot_,
  getVisitorId,
  hide,
  init as init_,
  onHide as onHide_,
  onShow as onShow_,
  onUnreadCountChange as onUnreadCountChange_,
  onUserEmailSupplied as onUserEmailSupplied_,
  show,
  showArticle,
  showConversation,
  showMessages,
  showNewMessage,
  showNews,
  showSpace,
  showTicket,
  shutdown as shutdown_,
  startChecklist,
  startSurvey,
  startTour,
  trackEvent,
  update as update_,
} from './intercom';
import type {Region, UserArgs} from './types';

export type CreateIntercomProps = {
  appId: string;
  region?: Region;
  autoBoot?: boolean;
  autoBootOptions?: UserArgs;
  onHide?(): void;
  onShow?(): void;
  onUnreadCountChange?(): void;
  onUserEmailSupplied?(): void;
};

export interface CreateIntercomReturn
  extends ReturnType<typeof createIntercom> {}

export function createIntercom(props: CreateIntercomProps) {
  let {
    /**/
    appId,
    region,
    autoBoot = true,
    autoBootOptions,
    onHide,
    onShow,
    onUnreadCountChange,
    onUserEmailSupplied,
  } = $derived(props);

  let created = $state(false);
  let started = $state(false);
  let settings = $state(autoBootOptions);
  let autoBooted = $state(false);

  function addCallbacks() {
    if (onHide) onHide_(onHide);
    if (onShow) onShow_(onShow);
    if (onUnreadCountChange) onUnreadCountChange_(onUnreadCountChange);
    if (onUserEmailSupplied) onUserEmailSupplied_(onUserEmailSupplied);
  }

  function initOrBoot(args?: UserArgs) {
    if (started) return;

    if (created) {
      boot_({
        appId,
        ...args,
      });

      started = true;
      addCallbacks();
      return;
    }

    init_({
      appId,
      region,
      ...args,
    });

    created = true;
    started = true;

    addCallbacks();
  }

  function boot(args?: UserArgs): void;
  function boot(usePreviousSettings?: boolean): void;
  function boot(args: UserArgs, includePreviousSettings?: boolean): void;
  function boot(args: UserArgs | boolean = {}, j?: boolean) {
    if (args === true) {
      initOrBoot(settings);
      return;
    }

    if (args === false) {
      initOrBoot();
      return;
    }

    if (j === true) {
      initOrBoot({...settings, ...args});
      return;
    }

    initOrBoot(args);
  }

  function update(args: UserArgs) {
    settings = {
      ...settings,
      ...args,
    };

    update_(args);
  }

  function shutdown() {
    started = false;
    shutdown_();
  }

  $effect(() => {
    if (started) return;
    if (!autoBoot) return;
    if (autoBooted) return;

    autoBooted = true;
    initOrBoot();
  });

  return {
    boot,
    update,
    getVisitorId,
    hide,
    show,
    showArticle,
    showConversation,
    showMessages,
    showNewMessage,
    showNews,
    showSpace,
    showTicket,
    shutdown,
    startChecklist,
    startSurvey,
    startTour,
    trackEvent,
    get __settings() {
      return {
        appId,
        region,
        ...settings,
      };
    },
  };
}
