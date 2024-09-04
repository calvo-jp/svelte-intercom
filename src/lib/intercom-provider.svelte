<script lang="ts" module>
  import type {Snippet} from 'svelte';
  import type {CreateIntercomProps} from './create-intercom.svelte.js';

  export interface IntercomProviderProps extends CreateIntercomProps {
    autoBoot?: boolean;
    onHide?(): void;
    onShow?(): void;
    onUnreadCountChange?(): void;
    onUserEmailSupplied?(): void;
    children: Snippet;
  }
</script>

<script lang="ts">
  import {createIntercom} from './create-intercom.svelte.js';
  import {setIntercomContext} from './intercom-context.svelte.js';
  import {
    onHide as onHide_,
    onShow as onShow_,
    onUnreadCountChange as onUnreadCountChange_,
    onUserEmailSupplied as onUserEmailSupplied_,
  } from './intercom.js';

  let {
    autoBoot,
    onHide,
    onShow,
    onUnreadCountChange,
    onUserEmailSupplied,
    children,
    ...props
  }: IntercomProviderProps = $props();

  const intercom = $derived(createIntercom(props));

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
