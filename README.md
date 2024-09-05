# Svelte Intercom

[Intercom](https://www.intercom.com/) for [svelte](https://svelte.dev/)

## Installation

```bash
npm install svelte-intercom
# pnpm add svelte-intercom
# yarn add svelte-intercom
```

## Usage

- Add the intercom provider

```svelte
<!-- +layout.svelte -->
<script>
  import {IntercomProvider} from 'svelte-intercom';

  let {children} = $props();
</script>

<IntercomProvider appId="yourAppId">
  {@render children()}
</IntercomProvider>
```

- use the `useIntercom` store

```svelte
<script>
  import {useIntercom} from 'svelte-intercom';

  const intercom = useIntercom();
</script>

<button type="button" onclick={intercom.hide}>Hide</button>
```

## Related

- [@intercom/messenger-js-sdk](https://www.npmjs.com/package/@intercom/messenger-js-sdk)
