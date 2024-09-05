/* eslint-disable @typescript-eslint/no-empty-object-type */
/* eslint-disable prefer-const */

import {tick} from 'svelte';
import {
  boot as boot_,
  create,
  getVisitorId,
  hide,
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
  shutdown,
  startChecklist,
  startSurvey,
  startTour,
  trackEvent,
  update as update_,
} from './intercom';
import type {InitArgs, IntercomSettings, UserArgs} from './types';

export interface CreateIntercomProps extends InitArgs {
  onHide?(): void;
  onShow?(): void;
  onUnreadCountChange?(): void;
  onUserEmailSupplied?(): void;
}

export interface CreateIntercomReturn
  extends ReturnType<typeof createIntercom> {}

export function createIntercom(props: CreateIntercomProps) {
  let {
    /**/
    onHide,
    onShow,
    onUnreadCountChange,
    onUserEmailSupplied,
    ...others
  } = $derived(props);

  let started = $state(false);
  let settings = $state(others);

  function attachListeners() {
    tick().then(() => {
      if (onHide) onHide_(onHide);
      if (onShow) onShow_(onShow);
      if (onUnreadCountChange) onUnreadCountChange_(onUnreadCountChange);
      if (onUserEmailSupplied) onUserEmailSupplied_(onUserEmailSupplied);
    });
  }

  function boot(args?: Partial<IntercomSettings>) {
    const config: InitArgs = {
      ...settings,
      ...args,
    };

    if (started) {
      boot_(config);
    } else {
      started = true;
      create(config);
    }

    attachListeners();
  }

  function update(args?: UserArgs) {
    update_({
      ...settings,
      ...args,
    });
  }

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
  };
}
