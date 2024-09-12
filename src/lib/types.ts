import type {BootOptions as CoreBootOptions} from './core';

export interface BootOptions
  extends Omit<CoreBootOptions, 'appId' | 'apiBase'> {}

export type {
  /**/
  Alignment,
  ApiBase,
  Region,
  Space,
  User,
} from './core';
