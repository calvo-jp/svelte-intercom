import {expect, test} from 'vitest';
import {snakeCase, snakeCaseKeys} from './snake-case';

test('snakeCase', () => {
  expect(snakeCase('foo')).toBe('foo');
  expect(snakeCase('fooBar')).toBe('foo_bar');
  expect(snakeCase('fooBarBaz')).toBe('foo_bar_baz');
  expect(snakeCase('FooBar')).toBe('_foo_bar');
  expect(snakeCase('FooBarBaz')).toBe('_foo_bar_baz');
});

test('snakeCaseKeys', () => {
  const r = snakeCaseKeys({
    foobar: 'baz',
    barbaz: 'qux',
    fooBar: 'baz',
    barBaz: 'qux',
  });

  expect(r).toEqual({
    foobar: 'baz',
    barbaz: 'qux',
    foo_bar: 'baz',
    bar_baz: 'qux',
  });
});
