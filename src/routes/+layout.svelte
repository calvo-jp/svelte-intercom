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
    verticalPadding: 80,
    horizontalPadding: 80,
    hideDefaultLauncher: true,
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
  {#snippet children(intercom)}
    {@render props.children()}

    <button class="intercom-launcher" {...intercom.getLauncherProps()}>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        stroke="currentColor"
        stroke-width="1.66667"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path
          d="M10 15L6.92474 18.1137C6.49579 18.548 6.28131 18.7652 6.09695 18.7805C5.93701 18.7938 5.78042 18.7295 5.67596 18.6076C5.55556 18.4672 5.55556 18.162 5.55556 17.5515V15.9916C5.55556 15.444 5.10707 15.0477 4.5652 14.9683V14.9683C3.25374 14.7762 2.22378 13.7463 2.03168 12.4348C2 12.2186 2 11.9605 2 11.4444V6.8C2 5.11984 2 4.27976 2.32698 3.63803C2.6146 3.07354 3.07354 2.6146 3.63803 2.32698C4.27976 2 5.11984 2 6.8 2H14.2C15.8802 2 16.7202 2 17.362 2.32698C17.9265 2.6146 18.3854 3.07354 18.673 3.63803C19 4.27976 19 5.11984 19 6.8V11M19 22L16.8236 20.4869C16.5177 20.2742 16.3647 20.1678 16.1982 20.0924C16.0504 20.0255 15.8951 19.9768 15.7356 19.9474C15.5558 19.9143 15.3695 19.9143 14.9969 19.9143H13.2C12.0799 19.9143 11.5198 19.9143 11.092 19.6963C10.7157 19.5046 10.4097 19.1986 10.218 18.8223C10 18.3944 10 17.8344 10 16.7143V14.2C10 13.0799 10 12.5198 10.218 12.092C10.4097 11.7157 10.7157 11.4097 11.092 11.218C11.5198 11 12.0799 11 13.2 11H18.8C19.9201 11 20.4802 11 20.908 11.218C21.2843 11.4097 21.5903 11.7157 21.782 12.092C22 12.5198 22 13.0799 22 14.2V16.9143C22 17.8462 22 18.3121 21.8478 18.6797C21.6448 19.1697 21.2554 19.5591 20.7654 19.762C20.3978 19.9143 19.9319 19.9143 19 19.9143V22Z"
        ></path>
      </svg>
    </button>
  {/snippet}
</IntercomProvider>

<style>
  .intercom-launcher {
    cursor: pointer;
    width: 3.5rem;
    height: 3.5rem;
    position: fixed;
    z-index: 1000;
    bottom: 2rem;
    right: 2rem;
    color: #e2e8f0;
    background: var(--action-color);
    box-shadow:
      0 10px 15px -3px rgb(0 0 0 / 0.1),
      0 4px 6px -4px rgb(0 0 0 / 0.1);
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 100%;
    border: none;
  }

  .intercom-launcher svg {
    width: 1.75rem;
    height: 1.75rem;
  }

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

  :global([hidden]) {
    display: none !important;
  }
</style>
