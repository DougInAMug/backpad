<script lang="ts">
  import { authClient } from "$lib/auth-client";
  import { goto } from "$app/navigation";
  import { page } from "$app/state";
  import type { PageData, PageProps } from "./$types";
  import EntryBackpad from "$lib/components/EntryBackpad.svelte";
  import ButtonEntry from "$lib/components/ButtonEntry.svelte";

  const { user } = page.data as PageData;
  let { data, form }: PageProps = $props();
</script>

<h1>Hello {user.name}</h1>

<ButtonEntry text="Log out" --color=orange
  clickHandler={async () => {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          goto("/");
        },
      },
    });
  }}
/>

<div class="EntryBackpad_block">
  {#each data.allUsersMinusCurrent as u (u.id)}
    <EntryBackpad user={u} />
  {/each}
</div>

<style>
  .EntryBackpad_block {
    margin-top: 2rem;
  }
</style>
