<script lang="ts">
  import ButtonEntry from "$lib/components/ButtonEntry.svelte";
  import TitleHome from "$lib/components/TitleHome.svelte";
</script>

<TitleHome />

<h2>Your collaborator's secret manual</h2>

<p style="text-align: center;">
  Imagine you have a pad attached to your back that your colleagues can write on
  and read — but you can't!
</p>
<p>Don't worry: they all have one too.</p>

<p style="margin-top: 2rem">
  <strong>
    <a href="https://enfascination.com/weblog/post/2506"> 💡 inspiration </a>
    🟆
    <a href="https://github.com/DougInAMug/backpad"> code ⚙️ </a>
  </strong>
</p>

<ButtonEntry
  text="Log in"
  url="/logIn"
  --color="var(--log-in-color)"
  --margin-top="2rem"
/>
<ButtonEntry
  text="Create account"
  url="/createAccount"
  --color="var(--create-account-color)"
/>
