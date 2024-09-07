/* eslint-disable @typescript-eslint/no-explicit-any */
import type * as Core from './core/types';
import type * as Util from './utils/types';

type BootOmittedOptions = 'appId' | 'apiBase' | 'region';
type BootKnownOptions = Util.KnownProps<Core.BootOptions>;
type BootBaseOptions = Util.Pretty<Omit<BootKnownOptions, BootOmittedOptions>>;

export type BootOptions = BootBaseOptions & {[x: string]: any};
export type UpdateOptions = Core.UpdateOptions;
export type Region = Util.UnionAlias<Core.Region>;
export type Space = Util.UnionAlias<Core.Space>;
