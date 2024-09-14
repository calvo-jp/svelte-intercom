import {expect, test} from 'vitest';
import {stylex} from './stylex';

test('stylex', () => {
  expect(
    stylex({
      color: 'red',
      background: 'yellow',
      position: 'absolute',
      '--font': "'Fira Code'",
    }),
  ).toBe("color:red;background:yellow;position:absolute;--font:'Fira Code';");
});
