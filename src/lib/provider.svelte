<script lang="ts" module>
  import {type Snippet} from 'svelte';
  import type {CreateIntercomProps} from './create-intercom.svelte';

  export type IntercomProviderProps = CreateIntercomProps & {
    children?: Snippet;
  };
</script>

<script lang="ts">
  import {setIntercomContext} from './context.svelte';
  import {createIntercom} from './create-intercom.svelte';

  let {children, ...props}: IntercomProviderProps = $props();

  const intercom = createIntercom(props);

  setIntercomContext(() => intercom);
</script>

{@render children?.()}
