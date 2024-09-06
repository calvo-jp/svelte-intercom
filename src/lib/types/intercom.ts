import type {CamelCaseKeys, Pretty, UnionAlias} from '$lib/types';
import type * as Intercom from '@intercom/messenger-js-sdk/types';

export type IntercomSettings = Pretty<CamelCaseKeys<Intercom.IntercomSettings>>;
export type InitArgs = Pretty<CamelCaseKeys<Intercom.InitType>>;
export type UserArgs = Pretty<CamelCaseKeys<Intercom.UserArgs>>;
export type Region = UnionAlias<Intercom.Regions>;
