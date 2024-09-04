# Svelte Intercom

[Intercom](https://www.intercom.com/) for [svelte](https://svelte.dev/)

## Installation

```bash
npm install svelte-intercom
# pnpm add svelte-intercom
# yarn add svelte-intercom
```

## Usage

- Initializing intercom

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

- Using intercom methods

```svelte
<script>
  import {useIntercom} from 'svelte-intercom';

  const intercom = useIntercom();
</script>

<button type="button" onclick={intercom.hide}>Hide</button>
```

## Related

- [@intercom/messenger-js-sdk](https://www.npmjs.com/package/@intercom/messenger-js-sdk)
