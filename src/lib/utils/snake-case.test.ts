import {expect, test} from 'vitest';
import {snakeCase} from './snake-case';

test('snakeCase', () => {
  expect(snakeCase('foo')).toBe('foo');
  expect(snakeCase('fooBar')).toBe('foo_bar');
  expect(snakeCase('fooBarBaz')).toBe('foo_bar_baz');
  expect(snakeCase('FooBar')).toBe('_foo_bar');
  expect(snakeCase('FooBarBaz')).toBe('_foo_bar_baz');
});
