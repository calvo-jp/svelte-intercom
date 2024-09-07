import {snakeCase} from './snake-case';
import type {GenericObject, SnakeCaseKeys} from './types';

export function snakeCaseKeys<T extends GenericObject>(obj: T) {
  const o: GenericObject = {};

  for (const k in obj) {
    o[snakeCase(k)] = obj[k];
  }

  return o as SnakeCaseKeys<T>;
}
