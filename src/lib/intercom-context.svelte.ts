import {getContext, hasContext, setContext} from 'svelte';
import type {Intercom} from './create-intercom.svelte';
import {reflect} from './utils/reflect';

export function setIntercomContext(value: () => Intercom) {
  setContext<Intercom>('intercom', reflect(value));
}

export function getIntercomContext() {
  if (!hasContext('intercom')) {
    const error = new Error();
    error.name = 'IntercomContextNotFound';
    error.message =
      "Intercom context not found. Did you forget to use the 'IntercomProvider'?";
    throw error;
  }

  return getContext<Intercom>('intercom');
}

export function useIntercom() {
  return getIntercomContext();
}
