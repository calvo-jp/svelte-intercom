type Function = (...args: unknown[]) => unknown;

function isFunction(value: unknown): value is Function {
  return typeof value === 'function';
}

export function reflect<T extends Record<string, unknown>>(fn: () => T): T {
  return new Proxy(fn(), {
    get(_, k) {
      const t = fn();
      const v = Reflect.get(t, k);

      return isFunction(v) ? v.bind(t) : v;
    },
  });
}
