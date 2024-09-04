import type * as Intercom from '@intercom/messenger-js-sdk/types.js';

export type GenericObject = Record<string, unknown>;

export type CamelCase<Value extends string> =
  Value extends `${infer T}_${infer U}`
    ? `${T}${Capitalize<CamelCase<U>>}`
    : Value;

export type CamelCaseKeys<T extends GenericObject> = {
  [K in keyof T as CamelCase<string & K>]: T[K];
};

export type SnakeCase<Value extends string> =
  Value extends `${infer T}${infer U}`
    ? `${T extends Capitalize<T> ? '_' : ''}${Lowercase<T>}${SnakeCase<U>}`
    : Value;

export type SnakeCaseKeys<T extends GenericObject> = {
  [K in keyof T as SnakeCase<string & K>]: T[K];
};

export type IntercomSettings = CamelCaseKeys<Intercom.IntercomSettings>;
export type InitType = CamelCaseKeys<Intercom.InitType>;
export type UserArgs = CamelCaseKeys<Intercom.UserArgs>;
