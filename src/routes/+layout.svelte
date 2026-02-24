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
  :global(label) {
    font-size: 1.2rem;
  }
  :global(button) {
    cursor: pointer;
  }
  :global(.formerror) {
    margin: 0;
    font-weight: bold;
    color: darkred;
  }
  :global(input) {
    display: block;
    padding: 0.25rem;
    width: 100%;
  }
  :root {
    --create-account-color: deepskyblue;
    --log-in-color: mediumspringgreen;
    --log-out-color: coral;
  }
  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: 45ch;
    min-height: 100vh;
    padding: 3rem 1rem;
  }
</style>
