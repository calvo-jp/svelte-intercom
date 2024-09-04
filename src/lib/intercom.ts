import * as intercom from '@intercom/messenger-js-sdk';
import type {InitArgs, IntercomSettings, UserArgs} from './types.js';
import {snakeCaseKeys} from './utils.js';

export function init(args: InitArgs) {
  return intercom.Intercom(snakeCaseKeys(args));
}

export function boot(args: IntercomSettings) {
  return intercom.boot(snakeCaseKeys(args));
}

export function update(args: UserArgs) {
  return intercom.update(snakeCaseKeys(args));
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
