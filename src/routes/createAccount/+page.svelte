<script lang="ts">
  import { goto } from "$app/navigation";
  import { authClient } from "$lib/auth-client";
  import ButtonEntry from "$lib/components/ButtonEntry.svelte";
  import Subtitle from "$lib/components/Subtitle.svelte";
  import HomeTitle from "$lib/components/TitleHome.svelte";

  let email = $state("");
  let name = $state("");
  let password = $state("");
</script>

<HomeTitle />
<Subtitle content={"Create account"} />

<form>
  <label for="email">Email:</label>
  <input type="email" name="email" bind:value={email} />
  <label for="name">Name:</label>
  <input type="text" name="name" bind:value={name} />
  <label for="password">Password:</label>
  <input type="text" name="password" bind:value={password} />
  <ButtonEntry
    text="Create account"
    --color="red"
    clickHandler={async () => {
      const { data, error } = await authClient.signUp.email(
        {
          email, // user email address
          password, // user password -> min 8 characters by default
          name, // user display name
          callbackURL: "/blue", // A URL to redirect to after the user verifies their email (optional)
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
    }}
  />
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
