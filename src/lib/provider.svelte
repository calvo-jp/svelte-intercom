<script lang="ts" module>
  import type {CreateIntercomProps} from './create-intercom.svelte';

  export interface IntercomProviderProps extends CreateIntercomProps {
    autoBoot?: boolean;
    onHide?(): void;
    onShow?(): void;
    onUnreadCountChange?(): void;
    onUserEmailSupplied?(): void;
  }
</script>

<script lang="ts">
  import {setIntercomContext} from './context.svelte';
  import {createIntercom} from './create-intercom.svelte';
  import {
    onHide as onHide_,
    onShow as onShow_,
    onUnreadCountChange as onUnreadCountChange_,
    onUserEmailSupplied as onUserEmailSupplied_,
  } from './intercom';

  let {
    autoBoot = true,
    onHide,
    onShow,
    onUnreadCountChange,
    onUserEmailSupplied,
    children,
    ...props
  }: IntercomProviderProps = $props();

  const intercom = createIntercom(props);

  $effect.pre(() => {
    if (autoBoot) {
      intercom.init();
    }
  });

  $effect(() => {
    if (onHide) onHide_(onHide);
    if (onShow) onShow_(onShow);
    if (onUnreadCountChange) onUnreadCountChange_(onUnreadCountChange);
    if (onUserEmailSupplied) onUserEmailSupplied_(onUserEmailSupplied);
  });

  setIntercomContext(() => intercom);
</script>

{@render children()}
