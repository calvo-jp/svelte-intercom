<script>
  import {useIntercom} from '$lib/use-intercom.svelte.js';

  let name = '';

  let intercom = useIntercom();
</script>

<div>
  <input type="text" bind:value={name} />
</div>
<div>
  <button
    onclick={() => {
      intercom.update({
        name,
      });
    }}
  >
    Update
  </button>
  <button onclick={intercom.hide}>Hide</button>
  <button onclick={intercom.show}>Show</button>
  <button onclick={intercom.shutdown}>Shutdown</button>
  <button onclick={intercom.boot}>Boot</button>
</div>
