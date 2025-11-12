<script lang="ts">
  import { authClient } from "$lib/auth-client";
  import { goto } from "$app/navigation";
  import { page } from "$app/state";
  import type { PageData, PageProps } from "./$types";

  const { user } = page.data as PageData;
  let { data }: PageProps = $props();
</script>

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

{#each data.allUsersMinusCurrent as u}
  <details>
    <summary>{u.name}</summary>
    {u.backpad}
  </details>
{/each}
