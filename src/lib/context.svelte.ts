import {getContext, setContext} from 'svelte';
import type {IntercomSettings} from './types.js';

export function setIntercomSettingsContext(props: IntercomSettings) {
  setContext('IntercomSettings', props);
}

export function getIntercomSettingsContext() {
  return getContext<IntercomSettings>('IntercomSettings');
}
