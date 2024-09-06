import {boot as f} from '@intercom/messenger-js-sdk';
import type {IntercomSettings} from '../types/intercom';
import {snakeCaseKeys} from '../utils/snake-case-keys';

export function boot(args: IntercomSettings) {
  return f(snakeCaseKeys(args));
}
