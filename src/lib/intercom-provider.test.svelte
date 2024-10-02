<script lang="ts">
  import type {HTMLButtonAttributes} from 'svelte/elements';
  import type {Intercom} from './create-intercom.svelte';
  import IntercomProvider from './intercom-provider.svelte';

  const getButtons = (intercom: Intercom): HTMLButtonAttributes[] => {
    return [
      {
        type: 'button',
        onclick: () => intercom.update({}),
        'aria-label': 'update',
      },
      {
        type: 'button',
        onclick: () => intercom.getVisitorId(),
        'aria-label': 'getVisitorId',
      },
      {
        type: 'button',
        onclick: () => intercom.hide(),
        'aria-label': 'hide',
      },
      {
        type: 'button',
        onclick: () => intercom.show(),
        'aria-label': 'show',
      },
      {
        type: 'button',
        onclick: () => intercom.showArticle(''),
        'aria-label': 'showArticle',
      },
      {
        type: 'button',
        onclick: () => intercom.showConversation(''),
        'aria-label': 'showConversation',
      },
      {
        type: 'button',
        onclick: () => intercom.showMessages(),
        'aria-label': 'showMessages',
      },
      {
        type: 'button',
        onclick: () => intercom.showNewMessage(''),
        'aria-label': 'showNewMessage',
      },
      {
        type: 'button',
        onclick: () => intercom.showNews(''),
        'aria-label': 'showNews',
      },
      {
        type: 'button',
        onclick: () => intercom.showSpace(''),
        'aria-label': 'showSpace',
      },
      {
        type: 'button',
        onclick: () => intercom.showTicket(''),
        'aria-label': 'showTicket',
      },
      {
        type: 'button',
        onclick: () => intercom.shutdown(),
        'aria-label': 'shutdown',
      },
      {
        type: 'button',
        onclick: () => intercom.startChecklist(''),
        'aria-label': 'startChecklist',
      },
      {
        type: 'button',
        onclick: () => intercom.startSurvey(''),
        'aria-label': 'startSurvey',
      },
      {
        type: 'button',
        onclick: () => intercom.startTour(''),
        'aria-label': 'startTour',
      },
      {
        type: 'button',
        onclick: () => intercom.trackEvent(''),
        'aria-label': 'trackEvent',
      },
    ];
  };
</script>

<IntercomProvider appId="om6shas5" autoboot>
  {#snippet children(intercom)}
    {#each getButtons(intercom) as props}
      <button {...props}></button>
    {/each}
  {/snippet}
</IntercomProvider>
