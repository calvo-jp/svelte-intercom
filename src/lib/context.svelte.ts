import {getContext, setContext} from 'svelte';
import type {CreateIntercomReturn} from './create-intercom.svelte.js';
import {reflect} from './reflect.js';

export function setIntercomContext(value: () => CreateIntercomReturn) {
  setContext<CreateIntercomReturn>('intercom', reflect(value));
}

export function getIntercomContext() {
  return getContext<CreateIntercomReturn>('intercom');
}

export function useIntercom() {
  return getIntercomContext();
}
