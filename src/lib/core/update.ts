import {update as f} from '@intercom/messenger-js-sdk';
import type {UserArgs} from '../types/intercom';
import {snakeCaseKeys} from '../utils/snake-case-keys';

export function update(args: UserArgs) {
  return f(snakeCaseKeys(args));
}
