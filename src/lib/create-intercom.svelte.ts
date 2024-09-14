import * as core from './core';
import type {BootOptions} from './types';

export interface CreateIntercomProps extends core.InitOptions {
  autoboot?: boolean;
  onHide?(): void;
  onShow?(): void;
  onUnreadCountChange?(unreadCount: number): void;
  onUserEmailSupplied?(): void;
}

export interface CreateIntercomReturn
  extends ReturnType<typeof createIntercom> {}

export function createIntercom(props: CreateIntercomProps) {
  const {
    autoboot = true,
    onHide,
    onShow,
    onUnreadCountChange,
    onUserEmailSupplied,
    ...bootProps
  } = $derived(props);

  let created = $state(false);
  let started = $state(false);
  let autobooted = $state(false);

  function addCallbacks() {
    if (onHide) core.onHide(onHide);
    if (onShow) core.onShow(onShow);
    if (onUnreadCountChange) core.onUnreadCountChange(onUnreadCountChange);
    if (onUserEmailSupplied) core.onUserEmailSupplied(onUserEmailSupplied);
  }

  function boot(opts?: BootOptions) {
    if (started) return;
    if (created) {
      core.boot({
        ...bootProps,
        ...opts,
      });
    } else {
      core.init({
        ...bootProps,
        ...opts,
      });
    }

    created = true;
    started = true;

    addCallbacks();
  }

  function shutdown() {
    started = false;
    core.shutdown();
  }

  function reboot(opts?: BootOptions) {
    shutdown();
    setTimeout(() => boot(opts), 1);
  }

  $effect(() => {
    if (started) return;
    if (!autoboot) return;
    if (autobooted) return;

    boot();
    autobooted = true;
  });

  return {
    boot,
    hide: core.hide,
    show: core.show,
    update: core.update,
    reboot,
    shutdown,
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
  };
}
