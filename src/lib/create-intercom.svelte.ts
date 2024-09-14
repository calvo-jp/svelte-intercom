import {tick} from 'svelte';
import type {HTMLButtonAttributes} from 'svelte/elements';
import * as core from './core';
import type {ApiBase, BootOptions, Region, UpdateOptions} from './types';

export interface CreateIntercomProps {
  appId: string;
  region?: Region;
  apiBase?: ApiBase;
  autoboot?: boolean;
  bootOptions?: BootOptions;
  onHide?(): void;
  onShow?(): void;
  onUserEmailSupplied?(): void;
  onUnreadCountChange?(unreadCount: number): void;
}

export interface Intercom extends ReturnType<typeof createIntercom> {}

export function createIntercom(props: CreateIntercomProps) {
  const {
    appId,
    apiBase,
    region,
    autoboot,
    bootOptions,
    onHide,
    onShow,
    onUnreadCountChange,
    onUserEmailSupplied,
  } = $derived(props);

  let hidden = $state(true);
  let created = $state(false);
  let started = $state(false);
  let autobooted = $state(false);

  let currentBootOptions = $state(bootOptions);

  function boot(options?: BootOptions) {
    if (started) return;
    if (created) {
      core.boot({
        appId,
        apiBase,
        ...currentBootOptions,
        ...options,
      });
    } else {
      core.init({
        appId,
        apiBase,
        region,
        ...currentBootOptions,
        ...options,
      });
    }

    created = true;
    started = true;

    if (onHide) core.onHide(onHide);
    if (onShow) core.onShow(onShow);
    if (onUnreadCountChange) core.onUnreadCountChange(onUnreadCountChange);
    if (onUserEmailSupplied) core.onUserEmailSupplied(onUserEmailSupplied);

    currentBootOptions = {
      ...currentBootOptions,
      ...options,
    };
  }

  function shutdown() {
    if (!started) return;

    core.shutdown();
    started = false;
    currentBootOptions = bootOptions;
  }

  shutdown.soft = function () {
    if (!started) return;

    core.shutdown();
    started = false;
  };

  function reboot(options?: BootOptions) {
    currentBootOptions = bootOptions;

    tick().then(() => {
      shutdown();
      setTimeout(() => boot(options), 1);
    });
  }

  reboot.soft = (options?: BootOptions) => {
    shutdown();
    setTimeout(() => boot(options), 1);
  };

  function update(options: UpdateOptions) {
    currentBootOptions = {
      ...currentBootOptions,
      ...options,
    };

    return core.update(options);
  }

  function hide() {
    if (!hidden) {
      core.hide();
      hidden = true;
    }
  }

  function show() {
    if (hidden) {
      core.show();
      hidden = false;
    }
  }

  function toggle() {
    if (hidden) {
      show();
    } else {
      hide();
    }
  }

  $effect(() => {
    if (started) return;
    if (!autoboot) return;
    if (autobooted) return;

    boot();
    autobooted = true;
  });

  function getLauncherProps(): HTMLButtonAttributes {
    let style = '';

    if (currentBootOptions?.actionColor) {
      style += `--action-color: ${currentBootOptions.actionColor};`;
    }

    if (currentBootOptions?.backgroundColor) {
      style += `--background-color: ${currentBootOptions.backgroundColor};`;
    }

    return {
      type: 'button',
      onclick: toggle,
      'aria-label': 'Intercom Launcher',
      'data-state': hidden ? 'closed' : 'open',
      style,
    };
  }

  return {
    boot,
    hide,
    show,
    toggle,
    update,
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
    getLauncherProps,
    get hidden() {
      return hidden;
    },
  };
}
