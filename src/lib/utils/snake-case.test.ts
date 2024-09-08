import {describe, expect, test} from 'vitest';
import {snakeCase, snakeCaseKeysDeep} from './snake-case';

describe('snakeCase', () => {
  test('snakeCase', () => {
    expect(snakeCase('foo')).toBe('foo');
    expect(snakeCase('fooBar')).toBe('foo_bar');
    expect(snakeCase('fooBarBaz')).toBe('foo_bar_baz');
    expect(snakeCase('FooBar')).toBe('_foo_bar');
    expect(snakeCase('FooBarBaz')).toBe('_foo_bar_baz');
  });

  test('snakeCaseKeysDeep', () => {
    const r = snakeCaseKeysDeep({
      fooBar: '',
      barBaz: '',
      fooBaz: {
        fooBar: '',
        barBaz: [
          {
            fooBar: '',
            barBaz: '',
          },
          {
            fooBar: '',
            barBaz: '',
          },
        ],
        fooBaz: {
          fooBar: '',
          barBaz: '',
        },
      },
    });

    expect(r).toEqual({
      foo_bar: '',
      bar_baz: '',
      foo_baz: {
        foo_bar: '',
        bar_baz: [
          {
            foo_bar: '',
            bar_baz: '',
          },
          {
            foo_bar: '',
            bar_baz: '',
          },
        ],
        foo_baz: {
          foo_bar: '',
          bar_baz: '',
        },
      },
    });
  });
});
