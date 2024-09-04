<script>
  import {useIntercom} from '$lib/index.js';

  let name = $state('');
  let intercom = useIntercom();
</script>

<div>
  <input type="text" bind:value={name} />
</div>
<div>
  <button
    type="button"
    onclick={() => {
      intercom.update({
        name,
      });
    }}
  >
    Update
  </button>
  <button type="button" onclick={() => intercom.hide()}>Hide</button>
  <button type="button" onclick={() => intercom.show()}>Show</button>
  <button type="button" onclick={() => intercom.shutdown()}>Shutdown</button>
  <button type="button" onclick={() => intercom.boot()}>Boot</button>
</div>
