<script lang="ts">
  let { user } = $props();
  let LocalBackpad = $state(user.backpad);
  let EditInProgress = $state(false);
  let DisabledState = $state(true);
</script>

<form method="POST" action="?/EditBackpad">
  <details>
    <summary>{user.name}</summary>
    <p>{user.id}</p>
    <textarea name="localBackpad" bind:value={LocalBackpad} disabled={DisabledState}></textarea>
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
  </details>
</form>
