<script lang="ts">
  import favicon from "$lib/assets/favicon.svg";

  let { children } = $props();
</script>

<svelte:head>
  <link rel="icon" href={favicon} />
</svelte:head>

<main>
  {@render children?.()}
</main>

<style>
  @font-face {
    font-family: Atkinson;
    src: url(/src/lib/assets/fonts/AtkinsonHyperlegibleNext-VariableFont_wght.ttf);
  }
  :global(*) {
    font-family: Atkinson;
    box-sizing: border-box;
    margin: 0;
  }
  :global(body) {
    background: linear-gradient(lightblue, pink);
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  :global(h1) {
    font-size: 3rem;
    text-align: center;
  }
  :global(h2) {
    font-size: 1.7rem;
    text-align: center;
    margin-top: 1.5rem
  }
  :global(a) {
    cursor: pointer;
  }
  :global(.formerror) {
    font-weight: bold;
    color: darkred;
  }
  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 3rem 1rem;
    min-height: 100vh;
    width: 100%;
    max-width: 60ch;
  }
</style>
