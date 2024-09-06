import {getContext, hasContext, setContext} from 'svelte';
import type {CreateIntercomReturn} from './create-intercom.svelte';
import {reflect} from './utils';

export function setIntercomContext(value: () => CreateIntercomReturn) {
  setContext<CreateIntercomReturn>('intercom', reflect(value));
}

export function getIntercomContext() {
  if (!hasContext('intercom')) {
    const error = new Error();
    error.name = 'IntercomContextNotFound';
    error.message =
      "Intercom context not found. Did you forget to use the 'IntercomProvider'?";
    throw error;
  }

  return getContext<CreateIntercomReturn>('intercom');
}

export function useIntercom() {
  return getIntercomContext();
}
