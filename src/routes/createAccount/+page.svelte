<script lang="ts">
  import { enhance } from "$app/forms";
  import { authClient } from "$lib/auth-client";
  const session = authClient.useSession();

  let email = $state("");
  let name = $state("");
  let password = $state("");
</script>

<h1>dsaf</h1>

<form use:enhance>
  <label for="email">Email:</label>
  <input type="email" name="email" bind:value={email} />
  <label for="name">Name:</label>
  <input type="text" name="name" bind:value={name} />
  <label for="password">Password:</label>
  <input type="text" name="password" bind:value={password} />
  <button
    onclick={async () => {
      const { data, error } = await authClient.signUp.email(
        {
          email, // user email address
          password, // user password -> min 8 characters by default
          name, // user display name
          // image, // User image URL (optional)
          callbackURL: "", // A URL to redirect to after the user verifies their email (optional)
        },
        {
          onRequest: (ctx) => {
            //show loading
          },
          onSuccess: (ctx) => {
            //redirect to the dashboard or sign in page
          },
          onError: (ctx) => {
            // display the error message
            alert(ctx.error.message);
          },
        }
      );
    }}>Sign up</button
  >
</form>

<div>
  {#if $session.data}
    <div>
      <p>
        {$session?.data?.user.name}
      </p>
      <button
        onclick={async () => {
          await authClient.signOut();
        }}
      >
        Sign Out
      </button>
    </div>
  {/if}
</div>
