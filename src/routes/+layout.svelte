<script lang="ts">
  import {env} from '$env/dynamic/public';
  import {IntercomProvider} from '$lib';

  let {children} = $props();

  let name = $state('');

  $effect(() => {
    setTimeout(() => {
      name = 'Spiderman';
    }, 2500);
  });
</script>

<IntercomProvider
  appId={env.PUBLIC_INTERCOM_APP_ID}
  {name}
  onShow={() => {
    console.log("'show' called");
  }}
  onHide={() => {
    console.log("'hide' called");
  }}
>
  {@render children()}
</IntercomProvider>
