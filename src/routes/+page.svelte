<script>
  import {useIntercom} from '$lib';

  let name = $state('');
  let email = $state('');

  let intercom = useIntercom();
</script>

<div>
  <input type="text" placeholder="Name" bind:value={name} />
  <input type="email" placeholder="Email" bind:value={email} />
</div>
<div style="margin-top:1rem;">
  <button
    type="button"
    onclick={() => {
      intercom.update({
        name,
        email,
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
      {JSON.stringify(intercom.__settings__, null, 2)}
    </pre>
  </code>
</div>
