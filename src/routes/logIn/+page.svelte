<script lang="ts">
  import { goto } from "$app/navigation";
  import { authClient } from "$lib/auth-client";
  import ButtonEntry from "$lib/components/ButtonEntry.svelte";
  import TitleHome from "$lib/components/TitleHome.svelte";

  let email = $state("");
  let password = $state("");
</script>

<TitleHome />
<h2>Log in</h2>

<form>
  <label for="email">Email:</label>
  <input type="email" name="email" bind:value={email} />
  <label for="password">Password:</label>
  <input type="text" name="password" bind:value={password} />
  <ButtonEntry text="Log in" --color=lightblue clickHandler={async () => {
      const { data, error } = await authClient.signIn.email(
        {
          email, // user email address
          password, // user password -> min 8 characters by default
        },
        {
          onRequest: (ctx) => {
            //show loading
          },
          onSuccess: (ctx) => {
            //redirect to the dashboard or sign in page
            goto("/profile");
          },
          onError: (ctx) => {
            // display the error message
            alert(ctx.error.message);
          },
        }
      );
    }} />
</form>

<style>
  form {
    display: flex;
    flex-direction: column;
  }
</style>