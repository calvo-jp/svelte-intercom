# Svelte Intercom

[Intercom](https://www.intercom.com/) for [svelte](https://svelte.dev/)

## Installation

```bash
npm install svelte-intercom
# pnpm add svelte-intercom
# yarn add svelte-intercom
```

## Usage

- Add the `IntercomProvider` component to your root layout

```svelte
<!-- +layout.svelte -->
<script>
  import {IntercomProvider} from 'svelte-intercom';

  let {children} = $props();
</script>

<IntercomProvider
  appId="yourAppId"
  region="us"
  apiBase="https://api-iam.intercom.io"
  actionColor="#0f172a"
  backgroundColor="#475569"
  verticalPadding={32}
  onShow={function () {
    // logic
  }}
  onHide={function () {
    // logic
  }}
  onUserEmailSupplied={function () {
    // logic
  }}
  onUnreadCountChange={function (unreadCount) {
    // logic
  }}
>
  {@render children()}
</IntercomProvider>
```

- use the `useIntercom` store

```svelte
<!-- +page.svelte -->
<script>
  import {useIntercom} from 'svelte-intercom';

  const intercom = useIntercom();
</script>

<button
  onclick={function () {
    intercom.hide();
  }}
>
  Hide
</button>
<button
  onclick={function () {
    intercom.show();
  }}
>
  Show
</button>
<button
  onclick={function () {
    intercom.boot();
  }}
>
  Boot
</button>
<button
  onclick={function () {
    intercom.shutdown();
  }}
>
  Shutdown
</button>
```

## Related

- [@intercom/messenger-js-sdk](https://www.npmjs.com/package/@intercom/messenger-js-sdk)
