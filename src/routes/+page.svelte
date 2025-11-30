<script lang="ts">
  import ButtonEntry from "$lib/components/ButtonEntry.svelte";
  import Subtitle from "$lib/components/Subtitle.svelte";
  import TitleHome from "$lib/components/TitleHome.svelte";
</script>

<TitleHome />

<Subtitle content={"your co-workers secret manual"} />

<ButtonEntry text="Log in" url="/logIn" --color="lightblue" />
<ButtonEntry text="Create account" url="/createAccount" --color="red" />

<a href="https://github.com/DougInAMug/backpad" style="margin-top: 1rem"
  >information & code</a
>
