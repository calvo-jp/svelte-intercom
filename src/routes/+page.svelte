<script>
  import {useIntercom} from '$lib';

  let name = $state('');
  let intercom = useIntercom();
</script>

<div>
  <input type="text" bind:value={name} />
</div>
<div style="margin-top:1rem;">
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

<div>
  <code>
    <pre>
      {JSON.stringify(intercom.settings, null, 2)}
    </pre>
  </code>
</div>
