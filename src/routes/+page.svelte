<script lang="ts">
  import type {Space} from '$lib';
  import {useIntercom} from '$lib';

  const SPACENAMES: Space[] = [
    'help',
    'home',
    'messages',
    'news',
    'tasks',
    'tickets',
  ];

  let name = $state('');
  let email = $state('');
  let space = $state('');

  let intercom = useIntercom();

  $inspect(intercom.getLauncherProps());
</script>

<div class="container">
  <form
    class="form"
    onsubmit={(e) => {
      e.preventDefault();

      intercom.update({
        name,
        email,
      });

      name = '';
      email = '';
    }}
  >
    <input type="text" placeholder="Name" required bind:value={name} />
    <input type="email" placeholder="Email" required bind:value={email} />
    <button type="submit">update</button>
  </form>

  <span class="divider"></span>

  <div class="buttons">
    <button type="button" onclick={() => intercom.hide()}>hide</button>
    <button type="button" onclick={() => intercom.show()}>show</button>
    <button type="button" onclick={() => intercom.shutdown()}>
      shutdown
    </button>
    <button type="button" onclick={() => intercom.shutdown.soft()}>
      shutdown.soft
    </button>
    <button type="button" onclick={() => intercom.boot()}>boot</button>
    <button type="button" onclick={() => intercom.reboot()}>reboot</button>
    <button type="button" onclick={() => intercom.reboot.soft()}>
      reboot.soft
    </button>
  </div>

  <span class="divider"></span>

  <form
    class="form"
    onsubmit={(e) => {
      e.preventDefault();

      intercom.showSpace(space);

      space = '';
    }}
  >
    <select bind:value={space}>
      <option value=""></option>

      {#each SPACENAMES as name}
        <option value={name}>{name}</option>
      {/each}
    </select>
    <button type="submit">showSpace</button>
  </form>
</div>

<style>
  .container {
    max-width: 450px;
    margin: 0 auto;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  input,
  button,
  select {
    display: block;
    width: 100%;
    height: 2.75rem;
    padding: 0 0.75rem;
    border-radius: 0.375rem;
  }

  input,
  select {
    border: 1px solid #e5e7eb;
  }

  input:focus {
    outline: 2px solid #1f2937;
    outline-offset: -1px;
  }

  input::placeholder {
    color: #9ca3af;
  }

  button {
    font-family: 'Fira Code', 'Courier New', Courier, monospace;
    font-weight: 600;
    cursor: pointer;
    background-color: transparent;
    border: 1px solid #e5e7eb;
    color: #4b5563;
  }

  .divider {
    display: block;
    width: 100%;
    border-bottom: 1px solid #f3f4f6;
  }

  .form {
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
  }

  .buttons {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }

  @media (min-width: 768px) {
    .container {
      padding: 2rem;
    }
  }
</style>
