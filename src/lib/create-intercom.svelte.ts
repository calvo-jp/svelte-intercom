import {tick} from 'svelte';
import type {HTMLButtonAttributes} from 'svelte/elements';
import * as _ from './core';
import type {ApiBase, BootOptions, Region, UpdateOptions} from './types';
import {stylex} from './utils/stylex';

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

const launcherDefaultId = 'intercom-messenger-launcher';

const defaultBootOptions = {
  alignment: 'right',
  verticalPadding: 20,
  horizontalPadding: 20,
  customLauncherSelector: '#' + launcherDefaultId,
} satisfies BootOptions;

export function createIntercom(props: CreateIntercomProps) {
  const {
    appId,
    apiBase,
    region,
    autoboot,
    onHide,
    onShow,
    onUnreadCountChange,
    onUserEmailSupplied,
    ...others
  } = $derived(props);

  const bootOptions = $derived({
    ...defaultBootOptions,
    ...others.bootOptions,
  });

  /** Whether messenger is open or closed */
  let hidden = $state(true);
  /** Whether `init` has already been called */
  let created = $state(false);
  /** Whether `boot` or `init` has already been called */
  let started = $state(false);
  /** Whether auto boot was done */
  let autobooted = $state(false);

  let latestBootOptions = $state(bootOptions);

  function boot(options?: BootOptions) {
    if (started) return;
    if (created) {
      _.boot({
        appId,
        apiBase,
        ...latestBootOptions,
        ...options,
      });
    } else {
      _.init({
        appId,
        apiBase,
        region,
        ...latestBootOptions,
        ...options,
      });
    }

    created = true;
    started = true;

    _.onHide(() => {
      if (hidden) return;
      onHide?.();
      hidden = true;
    });

    _.onShow(() => {
      if (!hidden) return;
      onShow?.();
      hidden = false;
    });

    if (onUnreadCountChange) _.onUnreadCountChange(onUnreadCountChange);
    if (onUserEmailSupplied) _.onUserEmailSupplied(onUserEmailSupplied);

    tick().then(() => {
      latestBootOptions = {
        ...latestBootOptions,
        ...options,
      };
    });
  }

  function shutdown() {
    if (!started) return;

    _.shutdown();

    hidden = true;
    started = false;
    latestBootOptions = bootOptions;
  }

  shutdown.soft = function () {
    if (!started) return;

    _.shutdown();

    hidden = true;
    started = false;
  };

  function reboot(options?: BootOptions) {
    latestBootOptions = bootOptions;

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
    _.update(options);

    tick().then(() => {
      latestBootOptions = {
        ...latestBootOptions,
        ...options,
      };
    });
  }

  function toggle() {
    if (hidden) {
      _.show();
    } else {
      _.hide();
    }
  }

  $effect(() => {
    if (started) return;
    if (autobooted) return;
    if (!autoboot) return;

    boot();
    autobooted = true;
  });

  function getLauncherProps(): HTMLButtonAttributes {
    const style = stylex({
      '--left':
        latestBootOptions.alignment === 'left'
          ? latestBootOptions.verticalPadding + 'px'
          : undefined,
      '--right':
        latestBootOptions.alignment === 'right'
          ? latestBootOptions.verticalPadding + 'px'
          : undefined,
      '--bottom': latestBootOptions.horizontalPadding + 'px',
      '--action-color': latestBootOptions?.actionColor,
      '--background-color': latestBootOptions?.backgroundColor,
    });

    return {
      id: latestBootOptions?.customLauncherSelector
        ? undefined
        : launcherDefaultId,
      type: 'button',
      style,
      hidden: !started,
      onclick: toggle,
      'aria-label': 'Intercom Launcher',
      'data-state': hidden ? 'closed' : 'open',
    };
  }

  return {
    boot,
    hide: _.hide,
    show: _.show,
    toggle,
    update,
    reboot,
    shutdown,
    showNews: _.showNews,
    showSpace: _.showSpace,
    startTour: _.startTour,
    trackEvent: _.trackEvent,
    showTicket: _.showTicket,
    startSurvey: _.startSurvey,
    showArticle: _.showArticle,
    getVisitorId: _.getVisitorId,
    showMessages: _.showMessages,
    showNewMessage: _.showNewMessage,
    startChecklist: _.startChecklist,
    showConversation: _.showConversation,
    getLauncherProps,
    get hidden() {
      return hidden;
    },
  };
}
