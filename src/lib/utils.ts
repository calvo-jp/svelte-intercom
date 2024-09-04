import type {GenericObject, SnakeCaseKeys} from './types';

export function snakeCase(value: string) {
  return value.replace(/[A-Z]/g, (letter) => `_${letter.toLowerCase()}`);
}

export function snakeCaseKeys<T extends GenericObject>(obj: T) {
  const o: GenericObject = {};

  for (const k in obj) {
    o[snakeCase(k)] = obj[k];
  }

  return o as SnakeCaseKeys<T>;
}
