<script lang="ts" module>
  import type {InitType} from './types.js';

  export interface IntercomProps extends InitType {
    onHide?(): void;
    onShow?(): void;
    onUnreadCountChange?(): void;
    onUserEmailSupplied?(): void;
  }
</script>

<script lang="ts">
  import {setIntercomSettingsContext} from './context.svelte.js';
  import * as intercom from './intercom.js';

  let {
    onHide,
    onShow,
    onUnreadCountChange,
    onUserEmailSupplied,
    ...props
  }: IntercomProps = $props();

  let {appId, ...rest} = $derived(props);

  $effect.pre(() => {
    intercom.init({appId});
  });

  $effect(() => {
    intercom.update(rest);
  });

  $effect(() => {
    onHide && intercom.onHide(onHide);
    onShow && intercom.onShow(onShow);
    onUnreadCountChange && intercom.onUnreadCountChange(onUnreadCountChange);
    onUserEmailSupplied && intercom.onUserEmailSupplied(onUserEmailSupplied);
  });

  setIntercomSettingsContext(() => props);
</script>
