import {
  boot as boot_,
  Intercom,
  update as update_,
} from '@intercom/messenger-js-sdk';
import type {InitArgs, IntercomSettings, UserArgs} from './types';
import {snakeCaseKeys} from './utils';

export function create(args: InitArgs) {
  return Intercom(snakeCaseKeys(args));
}

export function boot(args: IntercomSettings) {
  return boot_(snakeCaseKeys(args));
}

export function update(args: UserArgs) {
  return update_(snakeCaseKeys(args));
}

export {
  getVisitorId,
  hide,
  onHide,
  onShow,
  onUnreadCountChange,
  onUserEmailSupplied,
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
} from '@intercom/messenger-js-sdk';
