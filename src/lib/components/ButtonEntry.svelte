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
    border-radius: 0;
    font-size: 1.2rem;
    font-weight: bold;
    cursor: pointer;
    background-color: var(--color);
  }
  button:hover {
    background-color: color-mix(in srgb, var(--color) 50%, transparent);
  }
</style>
