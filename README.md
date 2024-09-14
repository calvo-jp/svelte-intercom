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
  autoboot
  bootOptions={{
    actionColor: '#0f172a',
    backgroundColor: '#475569',
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

## API Reference

### IntercomProvider

**Props**

- `appId`

  Your intercom app ID

- `region`

  Your intercom app region

- `apiBase`

  Your intercom app api base

- `autoboot`

  Whether to boot intercom automatically

- `bootOptions`

  Global boot options. will be used everytime `boot` is called including when `autoboot` is set to `true`

- `onHide`

  Callback when messenger is hidden

- `onShow`

  Callback when messenger is visible

- `onUserEmailSupplied`

  Callback when user supplied thier email in the messenger

- `onUnreadCountChange`

  Callback when unread messages count changes

### useIntercom

the `useIntercom` does not accept anything and returns the following methods:

- `boot`

  The boot function can be used if at somepoint the shutdown function was called or `autoboot` is set to `false`.

- `reboot`

  Calls `shutdown` then `boot`

- `reboot.soft`

  Similar to `reboot` except this will use the previously captured options from `update/boot`

- `shutdown`

  If you have the Inbox product (combined with another product like Messages) you should call the Intercom shutdown method to clear your users’ conversations anytime they logout of your application. Otherwise, the cookie we use to track who was most recently logged in on a given device or computer will keep these conversations in the Messenger for one week. This method will effectively clear out any user data that you have been passing through the JS API.

- `shutdown.soft`

  Similar to shutdown except this will not clear previously captured options from `update/boot` so that it can be used on subsequent calls to `boot`

- `show`

  This will show the Messenger. If there are no new conversations, it will open to the Messenger Home. If there are, it will open with the message list.

- `hide`

  This will hide the main Messenger panel if it is open

- `showNews`

  If you would like to trigger a news item in the Messenger, you can use the `showNews` method. The news item will be shown within the Messenger, and clicking the Messenger back button will return to the previous context. If the Messenger is closed when the method is called, it will be opened first and then the news item will be shown.

- `showSpace`

  This will open the Messenger as if a new conversation was just created.

- `startTour`

  If you would like to trigger a tour based on an action a user or visitor takes in your site or application, you can use this API method. You need to call this method with the id of the tour you wish to show. The id of the tour can be found in the _Use tour everywhere_ section of the tour editor.

- `trackEvent`

  You can submit an event using the `trackEvent` method. This will associate the event with the currently logged in user and send it to Intercom

- `showTicket`

  If you would like to trigger a ticket in the Messenger, you can use the `showTicket` method. The ticket will be shown within the Messenger, and clicking the Messenger back button will return to the previous context. If the Messenger is closed when the method is called, it will be opened first and then the ticket will be shown.

- `startSurvey`

  If you would like to trigger a survey in the Messenger, you can use the `startSurvey` method. The id of the survey can be found in the _Additional ways to share your survey_ section of the survey editor as well as in the URL of the editor.

- `showArticle`

  If you would like to trigger an article in the Messenger, you can use the `showArticle` method. The article will be shown within the Messenger, and clicking the Messenger back button will return to the previous context. If the Messenger is closed when the method is called, it will be opened first and then the article will be shown.

- `getVisitorId`

  A visitor is someone who goes to your site but does not use the messenger. You can track these visitors via the visitor user ID. This user ID can be used to retrieve the visitor or lead through the REST API.

- `showMessages`

  This will open the Messenger on the message list session

- `showNewMessage`

  This will open the Messenger as if a new conversation was just created

- `startChecklist`

  If you would like to trigger a checklist in the Messenger, you can use the `startChecklist` method. The id of the checklist can be found in the _Additional ways to share your checklist_ section of the checklist editor as well as in the URL of the editor.

- `showConversation`

  You can show a conversation programatically in the Messenger by calling `showConversation` method

- `hidden`

  Whether the messenger is hidden or not

- `getLauncherProps`

  Returns button props which can be used for custom launcher

  ```svelte
  <script>
    import {useIntercom} from 'svelte-intercom';

    let intercom = useIntercom()
  </script>

  <button {...intercom.getLauncherProps()}>
    <ChatIcon />
  <button>
  ```

## Related

- [@intercom/messenger-js-sdk](https://www.npmjs.com/package/@intercom/messenger-js-sdk)
