import {isObject} from './is-object';

export function snakeCase(value: string) {
  return value.replace(/[A-Z]/g, (letter) => `_${letter.toLowerCase()}`);
}

export function snakeCaseKeysDeep<T = Record<string, any>>(
  obj: Record<string, any>,
) {
  const o: Record<string, any> = {};

  for (const k in obj) {
    const v = obj[k];

    if (Array.isArray(v)) {
      o[snakeCase(k)] = v.map(snakeCaseKeysDeep);
    } else if (isObject(v)) {
      o[snakeCase(k)] = snakeCaseKeysDeep(v);
    } else {
      o[snakeCase(k)] = v;
    }
  }

  return o as T;
}
