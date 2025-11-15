<script>
  import { goto } from "$app/navigation";
</script>

<h1>Backpad</h1>

<h2>your co-workers secret manual</h2>

<button onclick={() => goto("/createAccount")}>Create account</button>
<button onclick={() => goto("/logIn")}>Log in</button>
