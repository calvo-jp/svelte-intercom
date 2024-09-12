import {isObject} from './is-object';

function snakeCase(value: string) {
  return value.replace(/[A-Z]/g, (letter) => `_${letter.toLowerCase()}`);
}

export function snakeCaseKeysDeep(value: any): any {
  if (Array.isArray(value)) return value.map(snakeCaseKeysDeep);

  if (isObject(value)) {
    const obj: Record<string, any> = {};

    for (const key in value) {
      obj[snakeCase(key)] = snakeCaseKeysDeep(value[key]);
    }

    return obj;
  }

  return value;
}
