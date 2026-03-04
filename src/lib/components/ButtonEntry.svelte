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
  <button onclick={() => clickHandler()} class="button-like" {disabled}>
    {text}
  </button>
{:else if url}
  <a href={url} class="button-like">
    {text}
  </a>
{:else}
  <button class="button-like" {disabled}>
    {text}
  </button>
{/if}

<style>
  .button-like {
    width: 12rem;
    padding: 0.5rem;
    margin-top: var(--margin-top, 1.5rem);
    border: 3px black solid;
    border-radius: 0;
    font-size: 1.2rem;
    font-weight: bold;
    background-color: var(--color);
    text-align: center;
    color: black;
  }
  button:hover,
  button:disabled {
    background-color: color-mix(in srgb, var(--color) 50%, transparent);
  }
</style>
