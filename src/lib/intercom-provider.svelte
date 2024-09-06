<script lang="ts" module>
  import {type Snippet} from 'svelte';
  import type {CreateIntercomProps} from './create-intercom.svelte';

  export type IntercomProviderProps = CreateIntercomProps & {
    children?: Snippet;
  };
</script>

<script lang="ts">
  import {createIntercom} from './create-intercom.svelte';
  import {setIntercomContext} from './intercom-context.svelte';

  let {children, ...props}: IntercomProviderProps = $props();

  const intercom = createIntercom(props);

  setIntercomContext(() => intercom);
</script>

{@render children?.()}
