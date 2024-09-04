import {getIntercomSettingsContext} from './context.svelte.js';
import * as intercom from './intercom.js';
import type {IntercomSettings, UserArgs} from './types.js';

export function useIntercom() {
  const settings = getIntercomSettingsContext();

  function boot(args?: Partial<IntercomSettings>) {
    intercom.boot({
      ...settings,
      ...args,
    });
  }

  function update(args?: Partial<UserArgs>) {
    intercom.update({
      ...settings,
      ...args,
    });
  }

  return {...intercom, boot, update};
}
