<script lang="ts">
  type T_EntryButton = {
    clickHandler?: Function;
    url?: string;
    text: string;
    disabled?: boolean;
  };
  let { clickHandler, text, url, disabled }: T_EntryButton = $props();
</script>

{#if clickHandler}
  <div class="buttonContainer">
    <button onclick={() => clickHandler()} disabled={disabled}>
      {text}
    </button>
  </div>
{:else if url}
  <div class="buttonContainer">
    <a href={url}>
      <button disabled={disabled}>
        {text}
      </button>
    </a>
  </div>
{:else}
  <div class="buttonContainer">
    <button disabled={disabled}>
      {text}
    </button>
  </div>
{/if}

<style>
  .buttonContainer {
    margin-top: 1.5rem;
  }
  button {
    width: 12rem;
    padding: 0.5rem;
    border: 3px black solid;
    border-radius: 0;
    font-size: 1.2rem;
    font-weight: bold;
    cursor: pointer;
    background-color: var(--color);
  }
  button:hover,
  button:disabled {
    background-color: color-mix(in srgb, var(--color) 50%, transparent);
  }
</style>
