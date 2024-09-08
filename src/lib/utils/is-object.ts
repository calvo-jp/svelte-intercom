export function isObject<T = Record<string, any>>(value: unknown): value is T {
  return (
    Object.prototype.toString.call(value) === '[object Object]' &&
    Object(value) === value
  );
}
