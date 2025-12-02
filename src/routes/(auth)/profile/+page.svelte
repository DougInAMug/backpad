<script lang="ts">
  import { authClient } from "$lib/auth-client";
  import { goto } from "$app/navigation";
  import { page } from "$app/state";
  import type { PageData, PageProps } from "./$types";
  import EntryBackpad from "$lib/components/EntryBackpad.svelte";
  import ButtonEntry from "$lib/components/ButtonEntry.svelte";

  const { user } = page.data as PageData;
  let { data, form }: PageProps = $props();
  let alphabeticUsers = $derived(
    data.allUsersMinusCurrent.sort(function (a, b) {
      return a.name.localeCompare(b.name);
    })
  );
</script>

<h1>Hello <span style="font-family: MoreSugar-Regular">{user.name}</span></h1>

<ButtonEntry
  text="Log out"
  --color="orange"
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
  {#each alphabeticUsers as u (u.id)}
    <EntryBackpad user={u} />
  {/each}
</div>

<style>
  .EntryBackpad_block {
    width: 100%;
    max-width: 60ch;
  }
</style>