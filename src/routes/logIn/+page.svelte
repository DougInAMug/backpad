<script lang="ts">
  import { enhance } from "$app/forms";
  import ButtonEntry from "$lib/components/ButtonEntry.svelte";
  import Subtitle from "$lib/components/Subtitle.svelte";
  import TitleHome from "$lib/components/TitleHome.svelte";
  import type { PageProps } from "./$types";

  let { form }: PageProps = $props();
</script>

<TitleHome />
<Subtitle content={"Log in"} />

<form method="POST" action="?/logIn" use:enhance>
  <label for="email">Email:</label>
  <input type="email" name="email" value={form?.rawEmail ?? ""} />
  {#if form?.logInError_email}{form.logInError_email}{/if}
  <label for="password">Password:</label>
  <input type="text" name="password" required />
  {#if form?.logInError_password}{form.logInError_password}{/if}
  <ButtonEntry text="Log in" --color="lightblue" />
  {#if form?.logInError_auth}{form.logInError_auth}{/if}
</form>

<style>
  form {
    display: flex;
    flex-direction: column;
    margin-top: 1rem;
  }
  label {
    margin-top: 0.75rem;
  }
</style>
