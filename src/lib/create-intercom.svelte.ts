/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-empty-object-type */
/* eslint-disable prefer-const */

import * as core from './core';
import type {IntercomSettings, Region, UserArgs} from './types';

export interface CreateIntercomProps {
  appId: string;
  region?: Region;
  autoBoot?: boolean;
  autoBootOptions?: UserArgs;
  onHide?(): void;
  onShow?(): void;
  onUnreadCountChange?(): void;
  onUserEmailSupplied?(): void;
}

export interface Intercom extends ReturnType<typeof createIntercom> {}

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
    if (onHide) core.onHide(onHide);
    if (onShow) core.onShow(onShow);
    if (onUnreadCountChange) core.onUnreadCountChange(onUnreadCountChange);
    if (onUserEmailSupplied) core.onUserEmailSupplied(onUserEmailSupplied);
  }

  function initOrBoot(args?: UserArgs) {
    if (started) return;

    if (created) {
      core.boot({
        appId,
        ...args,
      });

      started = true;
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

    core.update(args);
  }

  function shutdown() {
    started = false;
    core.shutdown();
  }

  function hide() {
    core.hide();
  }

  function show() {
    core.show();
  }

  function getVisitorId() {
    core.getVisitorId();
  }

  function showArticle(id: string) {
    core.showArticle(id);
  }

  function showConversation(id: string) {
    core.showConversation(id);
  }

  function showMessages() {
    core.showMessages();
  }

  function showNewMessage(prePopulatedContent: string) {
    core.showNewMessage(prePopulatedContent);
  }

  function showNews(id: string) {
    core.showNews(id);
  }

  function showSpace(name: string) {
    core.showSpace(name);
  }

  function showTicket(id: string) {
    core.showTicket(id);
  }

  function startChecklist(id: string) {
    core.startChecklist(id);
  }

  function startSurvey(id: string) {
    core.startSurvey(id);
  }

  function startTour(id: string) {
    core.startTour(id);
  }

  function trackEvent(...args: any[]) {
    core.trackEvent(...args);
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
    hide,
    show,
    update,
    shutdown,
    trackEvent,
    getVisitorId,
    startTour,
    startSurvey,
    startChecklist,
    showNews,
    showSpace,
    showTicket,
    showArticle,
    showMessages,
    showConversation,
    showNewMessage,

    get __settings__(): IntercomSettings {
      return {
        appId,
        region,
        ...settings,
      };
    },
  };
}
