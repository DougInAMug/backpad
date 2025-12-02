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
	:global(*) {
		box-sizing: border-box;
		margin: 0;
	}
	:global(a) {
		cursor: pointer;
	}
	main {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin: 3rem 1rem;
	}
</style>