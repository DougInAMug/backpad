<script lang="ts">
  import { goto } from "$app/navigation";
  import { authClient } from "$lib/auth-client";

  const session = authClient.useSession();

  let email = $state("");
  let password = $state("");
</script>

<h1>Create account</h1>

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
          callbackURL: "/blue", // A URL to redirect to after the user verifies their email (optional)
        },
        {
          onRequest: (ctx) => {
            //show loading
          },
          onSuccess: (ctx) => {
            //redirect to the dashboard or sign in page
            // goto("/logged-in-user-view")
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

<div>
  {#if $session.data}
    <div>
      <p>You are logged in as user: 
        <strong>{$session?.data?.user.name}</strong>
      </p>
      <button
        onclick={async () => {
          await authClient.signOut();
        }}
      >
        Log out
      </button>
    </div>
  {/if}
</div>
