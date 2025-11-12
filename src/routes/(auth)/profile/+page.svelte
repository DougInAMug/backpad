<script lang="ts">
  import { authClient } from "$lib/auth-client";
  import { goto } from "$app/navigation";
  import { page } from "$app/state";
  import type { PageData } from "./$types";

  const { user } = page.data as PageData;
</script>

{#if user}
  <h1>Hello {user.name}</h1>

  <button
    onclick={async () => {
      await authClient.signOut({
        fetchOptions: {
          onSuccess: () => {
            goto("/");
          },
        },
      });
    }}
  >
    Log out
  </button>
{/if}
