import type {GenericObject, SnakeCaseKeys} from '$lib/types/utils';
import {snakeCase} from '$lib/utils';

export function snakeCaseKeys<T extends GenericObject>(obj: T) {
  const o: GenericObject = {};

  for (const k in obj) {
    o[snakeCase(k)] = obj[k];
  }

  return o as SnakeCaseKeys<T>;
}
