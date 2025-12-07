<script lang="ts">
  import { enhance } from "$app/forms";
  import ButtonEntry from "$lib/components/ButtonEntry.svelte";
  import Subtitle from "$lib/components/Subtitle.svelte";
  import HomeTitle from "$lib/components/TitleHome.svelte";
  import type { PageProps } from "./$types";

  let { form }: PageProps = $props();
</script>

<HomeTitle />
<Subtitle content={"Create account"} />

<form method="POST" action="?/createAccount" use:enhance>
  <label for="email">Email:</label>
  <input type="email" name="email" value={form?.rawEmail ?? ""} required />
  {#if form?.createAccountError_email}{form.createAccountError_email}{/if}
  <label for="name">Name:</label>
  <input type="text" name="name" value={form?.rawName} required />
  {#if form?.createAccountError_name}{form.createAccountError_name}{/if}
  <label for="password">Password:</label>
  <input type="text" name="password" required />
  {#if form?.createAccountError_password}{form.createAccountError_password}{/if}
  <ButtonEntry text="Create account" --color="red" />
  {#if form?.createAccountError_auth}{form.createAccountError_auth}{/if}
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
