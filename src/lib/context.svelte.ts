import {getContext, setContext} from 'svelte';
import {reflect} from './reflect.js';
import type {IntercomSettings} from './types.js';

export function setIntercomSettingsContext(value: () => IntercomSettings) {
  setContext<IntercomSettings>('IntercomSettings', reflect(value));
}

export function getIntercomSettingsContext() {
  return getContext<IntercomSettings>('IntercomSettings');
}
