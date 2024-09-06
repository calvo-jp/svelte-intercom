/* eslint-disable @typescript-eslint/no-empty-object-type */
/* eslint-disable prefer-const */

import * as core from './core';
import type {IntercomSettings, Region, UserArgs} from './types';

export interface CreateIntercomProps {
  appId: string;
  region?: Region;
  autoboot?: boolean;
  autobootOptions?: UserArgs;
  onHide?(): void;
  onShow?(): void;
  onUnreadCountChange?(unreadCount: number): void;
  onUserEmailSupplied?(): void;
}

export interface Intercom extends ReturnType<typeof createIntercom> {}

export function createIntercom(props: CreateIntercomProps) {
  let {
    /**/
    appId,
    region,
    autoboot,
    autobootOptions,
    onHide,
    onShow,
    onUnreadCountChange,
    onUserEmailSupplied,
  } = $derived(props);

  let created = $state(false);
  let started = $state(false);
  let settings = $state<UserArgs>({});
  let autobooted = $state(false);

  function addCallbacks() {
    if (onHide) core.onHide(onHide);
    if (onShow) core.onShow(onShow);
    if (onUnreadCountChange) core.onUnreadCountChange(onUnreadCountChange);
    if (onUserEmailSupplied) core.onUserEmailSupplied(onUserEmailSupplied);
  }

  function initOrBoot(args: UserArgs) {
    if (started) return;

    if (created) {
      core.boot({
        appId,
        ...args,
      });

      started = true;
      settings = args;
      addCallbacks();
      return;
    }

    core.init({
      appId,
      region,
      ...args,
    });

    created = true;
    started = true;
    settings = args;

    addCallbacks();
  }

  function boot(args?: UserArgs): void;
  function boot(usePreviousSettings?: boolean): void;
  function boot(args: UserArgs, includePreviousSettings?: boolean): void;
  function boot(i: UserArgs | boolean = {}, j?: boolean) {
    if (i === true) {
      initOrBoot(settings);
      return;
    }

    if (i === false) {
      initOrBoot({});
      return;
    }

    if (j === true) {
      initOrBoot({...settings, ...i});
      return;
    }

    initOrBoot(i);
  }

  function update(args: UserArgs) {
    settings = {
      ...settings,
      ...args,
    };

    core.update(args);
  }

  function shutdown() {
    started = false;
    core.shutdown();
  }

  $effect(() => {
    if (started) return;
    if (!autoboot) return;
    if (autobooted) return;

    autobooted = true;
    initOrBoot(autobootOptions ?? {});
  });

  return {
    boot,
    update,
    shutdown,

    hide: core.hide,
    show: core.show,
    showNews: core.showNews,
    showSpace: core.showSpace,
    startTour: core.startTour,
    trackEvent: core.trackEvent,
    showTicket: core.showTicket,
    startSurvey: core.startSurvey,
    showArticle: core.showArticle,
    getVisitorId: core.getVisitorId,
    showMessages: core.showMessages,
    showNewMessage: core.showNewMessage,
    startChecklist: core.startChecklist,
    showConversation: core.showConversation,

    get __settings__(): IntercomSettings {
      console.warn(
        "'__settings__' is used internally and we don't recommend using it in your app.",
      );

      return {
        appId,
        region,
        ...settings,
      };
    },
  };
}
