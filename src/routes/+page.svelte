<script>
  import Intercom from '$lib/intercom.svelte';

  let name = '';
</script>

<div>
  <input type="text" bind:value={name} />
</div>

<Intercom appId="om6shas5" {name} />
