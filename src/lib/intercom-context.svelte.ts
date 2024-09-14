import {getContext, hasContext, setContext} from 'svelte';
import type {Intercom} from './create-intercom.svelte';

export function setIntercomContext(value: Intercom) {
  setContext<Intercom>('intercom', value);
}

export function getIntercomContext() {
  if (!hasContext('intercom')) {
    const error = new Error();
    error.name = 'IntercomContextNotFound';
    error.message =
      "Intercom context not found. Did you forget to use the 'IntercomProvider'?";
    Error.captureStackTrace?.(error, getIntercomContext);
    throw error;
  }

  return getContext<Intercom>('intercom');
}

export function useIntercom() {
  return getIntercomContext();
}
