export type GenericObject = Record<string, unknown>;

export type Pretty<T extends GenericObject> = {} & {[K in keyof T]: T[K]};

export type UnionAlias<T extends string, K extends T = T> = Extract<T, K>;

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
