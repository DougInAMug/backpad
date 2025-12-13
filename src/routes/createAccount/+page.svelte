<script lang="ts">
  import { enhance } from "$app/forms";
  import ButtonEntry from "$lib/components/ButtonEntry.svelte";
  import HomeTitle from "$lib/components/TitleHome.svelte";
  import type { PageProps } from "./$types";

  let { form }: PageProps = $props();

  let creatingAccount = $state(false);
</script>

<HomeTitle />

<h2>Create account</h2>

<form
  method="POST"
  action="?/createAccount"
  use:enhance={() => {
    creatingAccount = true;

    return async ({ update }) => {
      await update({ reset: false, invalidateAll: true });
      creatingAccount = false;
    };
  }}
>
  <div>
    <label for="email">Email:</label>
    <input type="email" name="email" value={form?.rawEmail ?? ""} />
    {#if form?.createAccountError_email}
      <p class="formerror">
        {form.createAccountError_email}
      </p>
    {/if}
  </div>
  <div>
    <label for="name">Name:</label>
    <input type="text" name="name" value={form?.rawName ?? ""} />
    {#if form?.createAccountError_name}
      <p class="formerror">
        {form.createAccountError_name}
      </p>
    {/if}
  </div>
  <div>
    <label for="password">Password:</label>
    <input type="text" name="password" />
    {#if form?.createAccountError_password}
      <p class="formerror">
        {form.createAccountError_password}
      </p>
    {/if}
  </div>
  <ButtonEntry text="Create account" --color="red" disabled={creatingAccount}/>
  {#if form?.createAccountError_auth}
    <p class="formerror">
      {form.createAccountError_auth}
    </p>
  {/if}
</form>

<style>
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 1rem;
    width: 100%;
    gap: 0.75rem;
  }
</style>
