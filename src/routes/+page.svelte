<script lang="ts">
  import ButtonEntry from "$lib/components/ButtonEntry.svelte";
  import TitleHome from "$lib/components/TitleHome.svelte";
</script>

<TitleHome />

<h2>your co-workers secret manual</h2>

<ButtonEntry text="Log in" url="/logIn" --color="lightblue" />
<ButtonEntry text="Create account" url="/createAccount" --color="red" />

<a href="https://github.com/DougInAMug/backpad">information & code</a>