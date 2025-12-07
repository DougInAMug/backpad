<script lang="ts">
  import ButtonEntry from "$lib/components/ButtonEntry.svelte";
  import Subtitle from "$lib/components/Subtitle.svelte";
  import TitleHome from "$lib/components/TitleHome.svelte";
</script>

<TitleHome />

<Subtitle content={"your collaborator's secret manual"} />

<p style="margin-top: 1rem">Imagine you have a pad attached to your back. Your colleauges can read it and write on it — but you can't. Don't worry: they all have one too! 😅 </p>

<ButtonEntry text="Log in" url="/logIn" --color="lightblue" />
<ButtonEntry text="Create account" url="/createAccount" --color="red" />

<p style="margin-top: 1rem">
  <a href="https://enfascination.com/weblog/post/2506">inspiration</a> 🟆
  <a href="https://github.com/DougInAMug/backpad">code</a>
</p>