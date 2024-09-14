import type {BaseOptions} from './core';

export interface BootOptions extends BaseOptions {
  [x: string]: any;
}

export type {
  Alignment,
  ApiBase,
  Avatar,
  Company,
  Region,
  Space,
  UpdateOptions,
} from './core';
