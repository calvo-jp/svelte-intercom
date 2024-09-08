import {isObject} from '$lib/utils/is-object';
import * as sdk from '@intercom/messenger-js-sdk';
import {snakeCaseKeysDeep} from '../utils/snake-case';
import type {BootOptions, InitOptions, Space, User} from './types';

export function init(opts: InitOptions) {
  return sdk.Intercom(snakeCaseKeysDeep(opts));
}

export function boot(opts: BootOptions) {
  return sdk.boot(snakeCaseKeysDeep(opts));
}

export function update(opts: User) {
  return sdk.update(snakeCaseKeysDeep(opts));
}

export function getVisitorId() {
  return sdk.getVisitorId();
}

export function hide() {
  return sdk.hide();
}

export function show() {
  return sdk.show();
}

export function showArticle(id: string) {
  return sdk.showArticle(id);
}

export function showConversation(id: string) {
  return sdk.showConversation(id);
}

export function showMessages() {
  return sdk.showMessages();
}

export function showNewMessage(prePopulatedContent: string) {
  return sdk.showNewMessage(prePopulatedContent);
}

export function showNews(itemId: string) {
  return sdk.showNews(itemId);
}

export function showSpace(name: Space) {
  return sdk.showSpace(name);
}

export function showTicket(id: string) {
  return sdk.showTicket(id);
}

export function shutdown() {
  return sdk.shutdown();
}

export function startChecklist(id: string) {
  return sdk.startChecklist(id);
}

export function startSurvey(id: string) {
  return sdk.startSurvey(id);
}

export function startTour(id: string) {
  return sdk.startTour(id);
}

export function trackEvent(...args: unknown[]) {
  args = args.map((arg) => {
    if (Array.isArray(arg)) return arg.map(snakeCaseKeysDeep);
    if (isObject(arg)) return snakeCaseKeysDeep(arg);
    return arg;
  });

  return sdk.trackEvent(...args);
}

export function onHide(callback: () => void) {
  return sdk.onHide(callback);
}

export function onShow(callback: () => void) {
  return sdk.onShow(callback);
}

export function onUnreadCountChange(callback: (unreadCount: number) => void) {
  return sdk.onUnreadCountChange(callback);
}

export function onUserEmailSupplied(callback: () => void) {
  return sdk.onUserEmailSupplied(callback);
}
