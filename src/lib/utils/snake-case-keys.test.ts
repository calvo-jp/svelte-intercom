import {expect, test} from 'vitest';
import {snakeCaseKeys} from './snake-case-keys';

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
