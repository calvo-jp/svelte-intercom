type SnakeCase<Value extends string> = Value extends `${infer T}${infer U}`
  ? `${T extends Capitalize<T> ? '_' : ''}${Lowercase<T>}${SnakeCase<U>}`
  : Value;

type SnakeCaseKeys<T> = {
  [K in keyof T as SnakeCase<string & K>]: T[K];
};

export function snakeCase(value: string) {
  return value.replace(/[A-Z]/g, (letter) => `_${letter.toLowerCase()}`);
}

export function snakeCaseKeys<T>(obj: T) {
  const o: Record<string, any> = {};

  for (const k in obj) {
    o[snakeCase(k)] = obj[k];
  }

  return o as SnakeCaseKeys<T>;
}
