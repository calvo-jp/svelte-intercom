import {
  boot as boot_,
  getVisitorId,
  hide,
  init as init_,
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
  update,
} from './intercom.js';
import type {InitArgs, IntercomSettings} from './types.js';

export interface CreateIntercomProps extends InitArgs {}

export interface CreateIntercomReturn
  extends ReturnType<typeof createIntercom> {}

export function createIntercom(props: CreateIntercomProps) {
  function init() {
    return init_(props);
  }

  function boot(args?: Partial<IntercomSettings>) {
    return boot_({
      ...props,
      ...args,
    });
  }

  return {
    init,
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
