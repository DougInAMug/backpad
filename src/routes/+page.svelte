<script>
  import { goto } from "$app/navigation";
</script>

<h1>Backpad</h1>

<h2>your co-workers secret manual</h2>

<button onclick={() => goto("/createAccount")}>Create account</button>
<button onclick={() => goto("/logIn")}>Log in</button>

<hr />

<form method="POST" action="?/addInit">
  <label>
    Init content
    <input name="initContent" type="text" />
    <button>Submit init</button>
  </label>
</form>

<details>
  <summary>Details</summary>
  Something small enough to escape casual notice.
</details>
