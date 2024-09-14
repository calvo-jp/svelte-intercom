<script lang="ts">
  import {env} from '$env/dynamic/public';
  import {IntercomProvider} from '$lib';

  let {...props} = $props();
</script>

<IntercomProvider
  appId={env.PUBLIC_INTERCOM_APP_ID}
  autoboot
  bootOptions={{
    actionColor: '#0f172a',
    backgroundColor: '#475569',
  }}
  onShow={() => {
    console.log("'show' called");
  }}
  onHide={() => {
    console.log("'hide' called");
  }}
  onUserEmailSupplied={() => {
    console.log("'onUserEmailSupplied' called");
  }}
  onUnreadCountChange={(unreadCount) => {
    console.log({unreadCount});
    console.log("'onUnreadCountChange' called");
  }}
>
  {@render props.children()}
</IntercomProvider>

<style>
  :global(*, *::before, *::after) {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :global(html) {
    font-size: 16px;
    line-height: 1.2;
  }

  :global(body) {
    font-size: 100%;
    font-family:
      'Inter',
      system-ui,
      -apple-system,
      BlinkMacSystemFont,
      'Segoe UI',
      Roboto,
      Oxygen,
      Ubuntu,
      Cantarell,
      'Open Sans',
      'Helvetica Neue',
      sans-serif;
    color: '#1f2937';
    background-color: #ffffff;
  }

  :global(code, pre) {
    font-family: 'Fira Code', monospace;
    font-size: inherit;
  }

  :global(input, select, textarea, button) {
    font-family: inherit;
    font-size: inherit;
  }
</style>
