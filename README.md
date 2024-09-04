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
  import {Intercom} from 'svelte-intercom';
</script>

<Intercom appId="yourAppId" />
```

- Using intercom methods

```svelte
<script>
  import {hide} from 'svelte-intercom';
</script>

<button type="button" onclick={hide}>Hide</button>
```

## Related

- [@intercom/messenger-js-sdk](https://www.npmjs.com/package/@intercom/messenger-js-sdk)
