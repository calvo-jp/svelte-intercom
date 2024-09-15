import * as _ from '@intercom/messenger-js-sdk';
import {snakeCaseKeysDeep} from '../utils/snake-case-keys';
import type {BootOptions, InitOptions, Space, UpdateOptions} from './types';

export function init(opts: InitOptions) {
  return _.Intercom(snakeCaseKeysDeep(opts));
}

export function boot(opts: BootOptions) {
  return _.boot(snakeCaseKeysDeep(opts));
}

export function update(opts: UpdateOptions) {
  return _.update(snakeCaseKeysDeep(opts));
}

export function getVisitorId() {
  return _.getVisitorId();
}

export function hide() {
  return _.hide();
}

export function show() {
  return _.show();
}

export function showArticle(id: string) {
  return _.showArticle(id);
}

export function showConversation(id: string) {
  return _.showConversation(id);
}

export function showMessages() {
  return _.showMessages();
}

export function showNewMessage(prePopulatedContent: string) {
  return _.showNewMessage(prePopulatedContent);
}

export function showNews(itemId: string) {
  return _.showNews(itemId);
}

export function showSpace(name: Space) {
  return _.showSpace(name);
}

export function showTicket(id: string) {
  return _.showTicket(id);
}

export function shutdown() {
  return _.shutdown();
}

export function startChecklist(id: string) {
  return _.startChecklist(id);
}

export function startSurvey(id: string) {
  return _.startSurvey(id);
}

export function startTour(id: string) {
  return _.startTour(id);
}

export function trackEvent(event: string): void;
export function trackEvent(event: Record<string, any>): void;
export function trackEvent(event: string, metadata: Record<string, any>): void;
export function trackEvent(...args: any) {
  return _.trackEvent(...snakeCaseKeysDeep(args));
}

export function onHide(callback: () => void) {
  return _.onHide(callback);
}

export function onShow(callback: () => void) {
  return _.onShow(callback);
}

export function onUnreadCountChange(callback: (unreadCount: number) => void) {
  return _.onUnreadCountChange(callback);
}

export function onUserEmailSupplied(callback: () => void) {
  return _.onUserEmailSupplied(callback);
}
