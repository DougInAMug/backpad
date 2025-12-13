<script lang="ts">
  import { enhance } from "$app/forms";
  import ButtonEntry from "$lib/components/ButtonEntry.svelte";
  import TitleHome from "$lib/components/TitleHome.svelte";
  import type { PageProps } from "./$types";

  let { form }: PageProps = $props();
</script>

<TitleHome />

<h2>Log in</h2>

<form method="POST" action="?/logIn" use:enhance>
  <div>
    <label for="email">Email:</label>
    <input type="email" name="email" value={form?.rawEmail ?? ""} />
    {#if form?.logInError_email}
      <p class="formerror">
        {form.logInError_email}
      </p>
    {/if}
  </div>
  <div>
    <label for="password">Password:</label>
    <input type="text" name="password" />
    {#if form?.logInError_password}
      <p class="formerror">
        {form.logInError_password}
      </p>
    {/if}
  </div>
  <ButtonEntry text="Log in" --color="lightblue" />
  {#if form?.logInError_auth}
    <p class="formerror">
      {form.logInError_auth}
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
