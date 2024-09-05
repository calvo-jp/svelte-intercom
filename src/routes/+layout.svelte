<script lang="ts">
  import {env} from '$env/dynamic/public';
  import {IntercomProvider} from '$lib';

  let {children} = $props();
</script>

<IntercomProvider
  appId={env.PUBLIC_INTERCOM_APP_ID}
  onShow={() => {
    console.log("'show' called");
  }}
  onHide={() => {
    console.log("'hide' called");
  }}
  onUserEmailSupplied={() => {
    console.log("'onUserEmailSupplied' called");
  }}
  onUnreadCountChange={() => {
    console.log("'onUnreadCountChange' called");
  }}
>
  {@render children()}
</IntercomProvider>
