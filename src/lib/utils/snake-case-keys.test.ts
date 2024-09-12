import {expect, test} from 'vitest';
import {snakeCaseKeysDeep} from './snake-case-keys';

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
