<script lang="ts">
  import { enhance } from "$app/forms";
  import AutosizingTextarea from "./AutosizingTextarea.svelte";

  let { user } = $props();
  let LocalBackpad = $state(user.backpad);
  let EditInProgress = $state(false);
  let DisabledState = $state(true);
  let NetDeletion = $state(true);
</script>

<form
  method="POST"
  action="?/EditBackpad"
  use:enhance={({ cancel }) => {
    EditInProgress = true;

    if (NetDeletion == true) {
      return async ({ update }) => {
        await update({ reset: false, invalidateAll: true });
        EditInProgress = false;
        DisabledState = true;
      };
    } else {
      cancel();
      NetDeletion = true;
    }
  }}
>
  <details>
    <summary
      style="
        padding: 0.5rem;
        background: rgb(224, 224, 224);
      "
    >
      <label
        for="{user.name}-text"
        style="
          font-size: 1.2rem;
          font-family: MoreSugar-Regular, cursive;
          pointer-events: none;
        "
      >
        {user.name}
      </label>
    </summary>
    <div id="{user.name}-text" style="padding: 0.5rem">
      <AutosizingTextarea
        bind:value={LocalBackpad}
        state={DisabledState}
        name="localBackpad"
        id="{user.name}-text"
      />
      <div
        style="
          display: flex; 
          flex-direction: row-reverse; 
          gap: 0.5rem;
        "
      >
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
          <button
            name="id"
            value={user.id}
            type="submit"
            onclick={() => {
              if (LocalBackpad.length < user.backpad.length) {
                NetDeletion = false;
                if (
                  confirm(
                    "It looks like you are deleting content. Click 'OK' if you are sure.",
                  )
                ) {
                  NetDeletion = true;
                } else {
                  return false;
                }
              }
            }}>Save</button
          >
        {/if}
      </div>
    </div>
  </details>
</form>

<style>
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
    cursor: zoom-in;
  }
  details:open summary {
    cursor: zoom-out;
  }
  button {
    margin-top: 0.5rem;
  }
</style>
