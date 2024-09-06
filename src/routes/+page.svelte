<script>
  import {useIntercom} from '$lib';

  let name = $state('');
  let email = $state('');

  let intercom = useIntercom();
</script>

<div class="container">
  <form
    method="post"
    onsubmit={(e) => {
      e.preventDefault();

      intercom.update({
        name,
        email,
      });

      setTimeout(() => {
        name = '';
        email = '';
      }, 1);
    }}
    class="form"
  >
    <input type="text" placeholder="Name" required bind:value={name} />
    <input type="email" placeholder="Email" required bind:value={email} />
    <button type="submit" class="solid">Update</button>
  </form>

  <div class="buttons">
    <button type="button" class="outline" onclick={() => intercom.hide()}>
      Hide
    </button>
    <button type="button" class="outline" onclick={() => intercom.show()}>
      Show
    </button>
    <button type="button" class="outline" onclick={() => intercom.shutdown()}>
      Shutdown
    </button>
    <button
      type="button"
      class="outline"
      onclick={() => {
        intercom.boot({
          customProps: 'Hello, Intercom! 🚀',
        });
      }}
    >
      Boot
    </button>
  </div>

  <div class="preview">
    <code>
      <pre>{JSON.stringify(intercom.settings, null, 2)}</pre>
    </code>
  </div>
</div>

<style>
  .container {
    max-width: 450px;
    margin: 0 auto;
    padding: 1rem;
  }

  input,
  button {
    display: block;
    width: 100%;
    height: 2.75rem;
    padding: 0 0.75rem;
    border-radius: 0.375rem;
  }

  input {
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
    font-weight: 600;
    cursor: pointer;
  }

  button.solid {
    border: 0px;
    background-color: #111827;
    color: #f9fafb;
  }

  button.outline {
    background-color: transparent;
    border: 1px solid #e5e7eb;
    color: #4b5563;
  }

  .form {
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
  }

  .buttons {
    margin-top: 2rem;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 0.5rem;
  }

  .preview {
    margin-top: 2rem;
    padding: 1rem;
    background-color: #f9fafb;
    color: #374151;
    border-radius: 0.375rem;
  }

  @media (min-width: 768px) {
    .container {
      padding: 2rem;
    }
  }
</style>
