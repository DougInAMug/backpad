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
    box-sizing: border-box;
    margin: 0;
    font-family: Atkinson;
  }
  :global(body) {
    display: flex;
    flex-direction: column;
    align-items: center;
    background: linear-gradient(lightblue, pink);
  }
  :global(h1) {
    text-align: center;
    font-size: 2.7rem;
  }
  :global(h2) {
    text-align: center;
    margin-top: 1.5rem;
    font-size: 1.7rem;
  }
  :global(p) {
    margin-top: 1rem;
    font-size: 1.2rem;
  }
  :global(a) {
    cursor: pointer;
  }
  :global(.formerror) {
    margin: 0;
    font-weight: bold;
    color: darkred;
  }
  :global(input) {
    display: block;
    width: 50ch;
    max-width: 90vw;
    padding: 0.25rem;
  }
  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: 50ch;
    min-height: 100vh;
    padding: 3rem 1rem;
  }
</style>
