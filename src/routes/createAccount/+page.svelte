<script lang="ts">
  import { goto } from "$app/navigation";
  import { authClient } from "$lib/auth-client";

  const session = authClient.useSession();

  let email = $state("");
  let name = $state("");
  let password = $state("");
</script>

<h1>Create account</h1>

<form>
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
    }}>Create account</button
  >
</form>

<div>
  {#if $session.data}
    <div>
      <p>You are logged in as: 
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
