<script lang="ts">
  import {setIntercomSettingsContext} from './context.svelte.js';
  import {init, update} from './intercom.js';
  import {reflect} from './reflect.js';
  import type {InitType} from './types.js';

  let {...props}: InitType = $props();

  let {appId, ...rest} = $derived(props);

  $effect.pre(() => {
    init({appId});
  });

  $effect(() => {
    update(rest);
  });

  setIntercomSettingsContext(reflect(() => props));
</script>
