import type * as Util from '$lib/utils/types';
import type * as Intercom from '@intercom/messenger-js-sdk/types';

export type BootOptions = Util.CamelCaseKeys<Intercom.IntercomSettings>;
export type InitOptions = Util.CamelCaseKeys<Intercom.InitType>;
export type UpdateOptions = Util.CamelCaseKeys<Intercom.UserArgs>;
export type Region = Util.UnionAlias<Intercom.Regions>;
export type Space =
  | 'home'
  | 'messages'
  | 'help'
  | 'news'
  | 'tasks'
  | 'tickets'
  | (string & {});
