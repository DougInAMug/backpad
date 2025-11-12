<script lang="ts">
  import { goto } from "$app/navigation";
  import { authClient } from "$lib/auth-client";

  let email = $state("");
  let password = $state("");
</script>

<h1>Backpad</h1>
<h2>Log in</h2>

<form>
  <label for="email">Email:</label>
  <input type="email" name="email" bind:value={email} />
  <label for="password">Password:</label>
  <input type="text" name="password" bind:value={password} />
  <button
    onclick={async () => {
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
    }}>Log in</button
  >
</form>
