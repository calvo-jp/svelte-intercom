import {Intercom as f} from '@intercom/messenger-js-sdk';
import type {InitArgs} from '../types/intercom';
import {snakeCaseKeys} from '../utils/snake-case-keys';

export function init(args: InitArgs) {
  return f(snakeCaseKeys(args));
}
