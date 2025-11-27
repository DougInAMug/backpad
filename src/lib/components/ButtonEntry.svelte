<script lang="ts">
  type T_EntryButton = {
    clickHandler?: Function;
    url?: string;
    text: string;
  };
  let { clickHandler, text, url }: T_EntryButton = $props();
</script>

{#if clickHandler}
  <div class="buttonContainer">
    <button onclick={() => clickHandler()}>{text}</button>
  </div>
{:else if url}
  <div class="buttonContainer"><a href={url}><button>{text}</button></a></div>
{:else}
  <div class="buttonContainer"><button>{text}</button></div>
{/if}

<style>
  .buttonContainer {
    margin-top: 1.5rem;
  }
  button {
    width: 12rem;
    padding: 0.5rem;
    font-weight: bold;
    font-size: 1rem;
    border-radius: 0;
    background-color: var(--color);
    cursor: pointer
  }
  button:hover {
    background-color: color-mix(in srgb, currentColor 30%, transparent);
  }
</style>
