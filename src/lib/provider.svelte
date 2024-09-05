<script lang="ts" module>
  import {type Snippet} from 'svelte';
  import type {CreateIntercomProps} from './create-intercom.svelte';

  export interface IntercomProviderProps extends CreateIntercomProps {
    autoBoot?: boolean;
    children?: Snippet;
  }
</script>

<script lang="ts">
  import {browser} from '$app/environment';
  import {setIntercomContext} from './context.svelte';
  import {createIntercom} from './create-intercom.svelte';

  let {
    /**/
    autoBoot = true,
    children,
    ...props
  }: IntercomProviderProps = $props();

  const intercom = createIntercom(props);

  if (browser && autoBoot) {
    intercom.boot();
  }

  setIntercomContext(() => intercom);
</script>

{@render children?.()}
