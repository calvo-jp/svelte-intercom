import * as intercom from '@intercom/messenger-js-sdk';
import type {
  GenericObject,
  InitType,
  IntercomSettings,
  SnakeCaseKeys,
  UserArgs,
} from './types.js';

export function snakeCase(value: string) {
  return value.replace(/[A-Z]/g, (letter) => `_${letter.toLowerCase()}`);
}

export function snakeCaseKeys<T extends GenericObject>(obj: T) {
  const o: GenericObject = {};

  for (const k in obj) {
    o[snakeCase(k)] = obj[k];
  }

  return o as SnakeCaseKeys<T>;
}

export function init(arg: InitType) {
  return intercom.Intercom(snakeCaseKeys(arg));
}

export function boot(arg: IntercomSettings) {
  return intercom.boot(snakeCaseKeys(arg));
}

export function update(arg: UserArgs) {
  return intercom.update(snakeCaseKeys(arg));
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
