<script lang="ts">
  import {IntercomProvider} from '$lib/index.js';

  let {children} = $props();

  let name = $state('');

  $effect(() => {
    setTimeout(() => {
      name = 'Spiderman';
    }, 2500);
  });
</script>

<IntercomProvider appId="om6shas5">
  {@render children()}
</IntercomProvider>
