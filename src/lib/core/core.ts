import * as o from '@intercom/messenger-js-sdk';
import type {InitArgs, IntercomSettings, UserArgs} from '../types';
import {snakeCaseKeys} from '../utils/snake-case-keys';

export function init(args: InitArgs) {
  return o.Intercom(snakeCaseKeys(args));
}

export function boot(args: IntercomSettings) {
  return o.boot(snakeCaseKeys(args));
}

export function update(args: UserArgs) {
  return o.update(snakeCaseKeys(args));
}

export function getVisitorId() {
  return o.getVisitorId();
}

export function hide() {
  return o.hide();
}

export function show() {
  return o.show();
}

export function showArticle(id: string) {
  return o.showArticle(id);
}

export function showConversation(id: string) {
  return o.showConversation(id);
}

export function showMessages() {
  return o.showMessages();
}

export function showNewMessage(prePopulatedContent: string) {
  return o.showNewMessage(prePopulatedContent);
}

export function showNews(itemId: string) {
  return o.showNews(itemId);
}

export function showSpace(name: string) {
  return o.showSpace(name);
}

export function showTicket(id: string) {
  return o.showTicket(id);
}

export function shutdown() {
  return o.shutdown();
}

export function startChecklist(id: string) {
  return o.startChecklist(id);
}

export function startSurvey(id: string) {
  return o.startSurvey(id);
}

export function startTour(id: string) {
  return o.startTour(id);
}

export function trackEvent(...args: unknown[]) {
  return o.trackEvent(...args);
}

export function onHide(callback: () => void) {
  return o.onHide(callback);
}

export function onShow(callback: () => void) {
  return o.onShow(callback);
}

export function onUnreadCountChange(callback: (unreadCount: number) => void) {
  return o.onUnreadCountChange(callback);
}

export function onUserEmailSupplied(callback: () => void) {
  return o.onUserEmailSupplied(callback);
}
