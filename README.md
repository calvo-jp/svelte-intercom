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

<IntercomProvider appId="yourAppId">
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

<button type="button" onclick={intercom.hide}>Hide</button>
```

## API

### IntercomProvider

**Props**

- `appId`

  _string_

  Your [Intercom](https://www.intercom.com/) app ID

- `apiBase`

  _string_

  Your [Intercom](https://www.intercom.com/) api base url

- `region`

  _Region_

  Your preferred region

- `autoboot`

  _boolean_

  Whether to automatically boot the messenger

- `autobootOptions`

  _UserArgs_

  The options to be passed during autoboot

- `onShow`

  _() => void_

  Callback whenever messenger is shown

- `onHide`

  _() => void_

  Callback whenever messenger is hidden

- `onUnreadCountChange`

  _() => void_

  Callback whenever the current number of unread messages changes

- `onUserEmailSupplied`

  _() => void_

  Callback whenever a visitor enters their email into the messenger

### useIntercom

The `useIntercom` store does not accept any arguments and returns the following methods:

- `boot`
- `update`
- `getVisitorId`
- `hide`
- `show`
- `showArticle`
- `showConversation`
- `showMessages`
- `showNewMessage`
- `showNews`
- `showSpace`
- `showTicket`
- `shutdown`
- `startChecklist`
- `startSurvey`
- `startTour`
- `trackEvent`

## Related

- [@intercom/messenger-js-sdk](https://www.npmjs.com/package/@intercom/messenger-js-sdk)
