<script lang="ts">
  import AutosizingTextarea from "./AutosizingTextarea.svelte";

  let { user } = $props();
  let LocalBackpad = $state(user.backpad);
  let EditInProgress = $state(false);
  let DisabledState = $state(true);
</script>

<form method="POST" action="?/EditBackpad">
  <details>
    <summary>{user.name}</summary>
    <div style="padding: 0.5rem">
      <AutosizingTextarea
        bind:value={LocalBackpad}
        state={DisabledState}
        name="localBackpad"
      />
      <div style="display: flex; flex-direction: row-reverse; gap: 0.5rem;">
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
          <button name="id" value={user.id} type="submit" id=""> Save</button>
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
    width: 100%;
    max-width: 60ch;
    border: 3px solid black;
    margin-top: 1rem;
    border-radius: 1rem 1rem 0 0 ;
    overflow: hidden;
    background: whitesmoke;
  }
  details:open {
    border-radius: 1rem;
  }
  summary {
    padding: 0.5rem;
    font-family: MoreSugar-Regular;
    cursor: zoom-in;
    background: rgb(224, 224, 224);
  }
  details:open summary {
    cursor: zoom-out;
  }
  button {
    margin-top: 0.5rem;
  }
</style>
