import {describe, expect, it} from 'vitest';
import {reflect} from './reflect';

describe('reflect', () => {
  it('should return a proxy object', () => {
    const original = {
      a: 1,
      b: 2,
      sum() {
        return this.a + this.b;
      },
    };

    const proxy = reflect(() => original);

    expect(proxy.a).toBe(1);
    expect(proxy.b).toBe(2);
  });

  it('should bind methods to the updated state', () => {
    let state = {
      a: 1,
      b: 2,
      sum() {
        return this.a + this.b;
      },
    };

    const proxy = reflect(() => state);

    expect(proxy.sum()).toBe(3);

    state = {
      a: 5,
      b: 5,
      sum() {
        return this.a + this.b;
      },
    };

    expect(proxy.sum()).toBe(10);
  });

  it('should handle non-function properties correctly', () => {
    const obj = {x: 42, y: 'hello'};
    const proxy = reflect(() => obj);

    expect(proxy.x).toBe(42);
    expect(proxy.y).toBe('hello');
  });

  it('should handle functions correctly', () => {
    const obj = {
      value: 10,
      multiply(factor: number) {
        return this.value * factor;
      },
    };

    const proxy = reflect(() => obj);

    expect(proxy.multiply(2)).toBe(20);
    expect(proxy.multiply(3)).toBe(30);
  });
});
