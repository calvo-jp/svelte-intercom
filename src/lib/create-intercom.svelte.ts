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
  update as update_,
} from './intercom.js';
import type {InitArgs, IntercomSettings, UserArgs} from './types.js';

export interface CreateIntercomProps extends InitArgs {}

export interface CreateIntercomReturn
  extends ReturnType<typeof createIntercom> {}

export function createIntercom(props: CreateIntercomProps) {
  let settings = $state(props);

  function init() {
    return init_(settings);
  }

  function update(args: UserArgs = {}) {
    settings = {
      ...settings,
      ...args,
    };

    update_(args);
  }

  function boot(args?: Partial<IntercomSettings>) {
    return boot_({
      ...settings,
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
