import {getIntercomSettingsContext} from './context.svelte.js';
import {
  boot as b,
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
  update as u,
} from './intercom.js';
import type {IntercomSettings, UserArgs} from './types.js';

export interface UseIntercom extends ReturnType<typeof useIntercom> {}

export function useIntercom() {
  const settings = getIntercomSettingsContext();

  const boot = (args?: Partial<IntercomSettings>) => b({...settings, ...args});
  const update = (args?: Partial<UserArgs>) => u({...settings, ...args});

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
