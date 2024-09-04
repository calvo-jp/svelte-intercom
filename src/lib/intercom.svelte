<script lang="ts">
  import type {InitType} from './types.js';
  import {init, update} from './utils.js';

  let {appId, ...props}: InitType = $props();

  $effect.pre(() => {
    init({appId});
  });

  $effect(() => {
    update(props);
  });
</script>
