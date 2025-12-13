<script lang="ts">
  import { enhance } from "$app/forms";
  import AutosizingTextarea from "./AutosizingTextarea.svelte";

  let { user } = $props();
  let LocalBackpad = $state(user.backpad);
  let EditInProgress = $state(false);
  let DisabledState = $state(true);
  let DeleteConfirmation = $state(false);
</script>

<form
  method="POST"
  action="?/EditBackpad"
  use:enhance={() => {
    EditInProgress = true;

    return async ({ update }) => {
      await update({ reset: false, invalidateAll: true });
      EditInProgress = false;
      DisabledState = true;
    };
  }}
>
  <details>
    <summary>{user.name}</summary>
    <div class="details_content">
      <AutosizingTextarea
        bind:value={LocalBackpad}
        state={DisabledState}
        name="localBackpad"
      />
      <div class="button_bar">
        {#if EditInProgress === false}
          <button
            onclick={() => ((EditInProgress = true), (DisabledState = false))}
          >
            Edit</button
          >
        {:else}
          <button
            onclick={() => (
              (EditInProgress = false),
              (LocalBackpad = user.backpad),
              (DisabledState = true)
            )}
          >
            Cancel</button
          >
          {#if LocalBackpad.length < user.backpad.length && !DeleteConfirmation}
            <button
              onclick={() => {
                if (
                  confirm(
                    "It looks like you're deleting content. Click 'save' again if you are sure."
                  )
                ) {
                  DeleteConfirmation = true;
                }
              }}>Save</button
            >
          {:else}
            <button name="id" value={user.id} type="submit"> Save </button>
          {/if}
        {/if}
      </div>
    </div>
  </details>
</form>

<style>
  @font-face {
    font-family: "MoreSugar-Regular";
    src: local("MoreSugar-Regular"),
      url(/src/lib/assets/fonts/MoreSugar-Regular.otf);
  }
  details {
    overflow: hidden;
    border: 3px solid black;
    border-radius: 1rem 1rem 0 0;
    margin-top: 1rem;
    background: whitesmoke;
  }
  details:open {
    border-radius: 1rem;
  }
  summary {
    padding: 0.5rem;
    font-size: 1.2rem;
    cursor: zoom-in;
    font-family: MoreSugar-Regular;
    background: rgb(224, 224, 224);
  }
  details:open summary {
    cursor: zoom-out;
  }
  button {
    margin-top: 0.5rem;
  }
  .button_bar {
    display: flex;
    flex-direction: row-reverse;
    gap: 0.5rem;
  }
  .details_content {
    padding: 0.5rem;
  }
</style>
