<script lang="ts" module>
  import type {Snippet} from 'svelte';
  import type {CreateIntercomProps, Intercom} from './create-intercom.svelte';

  export interface IntercomProviderProps extends CreateIntercomProps {
    children: Snippet<[Intercom]>;
  }
</script>

<script lang="ts">
  import {createIntercom} from './create-intercom.svelte';
  import {setIntercomContext} from './intercom-context.svelte';

  let {children, ...props}: IntercomProviderProps = $props();

  const intercom = createIntercom(props);

  setIntercomContext(intercom);
</script>

{@render children?.(intercom)}
