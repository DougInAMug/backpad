<script lang="ts">
  let { user } = $props();
  let LocalBackpad = $state(user.backpad);
  let EditInProgress = $state(false);
  let DisabledState = $state(true);
</script>

<form method="POST" action="?/EditBackpad" >
  <details style="border-radius: 1rem; overflow:hidden">
    <summary>{user.name}</summary>
    <div style="padding: 0.5rem">
      <textarea
        name="localBackpad"
        bind:value={LocalBackpad}
        disabled={DisabledState}
      ></textarea>
      <div style="display: flex; flex-direction: row-reverse; gap: 0.5rem">
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
    src:
      local("MoreSugar-Regular"),
      url(/src/lib/assets/fonts/MoreSugar-Regular.otf);
  }
  details {
    width: 60ch;
    border: 3px solid black;
    margin-top: 1rem;
  }
  summary {
    padding: 0.5rem;
    font-family: MoreSugar-Regular;
    cursor: zoom-in;
    background: rgb(233, 233, 233);
  }
  details:open summary {
    cursor: zoom-out;
  }
  textarea {
    width: 100%;
  }
  button {
    margin-top: 0.5rem;
  }
</style>
