<script lang="ts">
  import {IntercomProvider} from '$lib/index.js';

  let {children} = $props();
</script>

<IntercomProvider appId="om6shas5">
  {@render children()}
</IntercomProvider>
