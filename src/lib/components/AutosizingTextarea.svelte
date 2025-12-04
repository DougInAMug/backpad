<!-- https://css-tricks.com/the-cleanest-trick-for-autogrowing-textareas/ -->

<script lang="ts">
    let { value = $bindable(), state, name } = $props();
</script>

<div class="grow-wrap" data-replicated-value={value}>
  <textarea
    name={name}
    id="text"
    bind:value={value}
    oninput={(this.parentNode.dataset.replicatedValue = this.value)}
    disabled={state}
  ></textarea>
</div>

<style>
  .grow-wrap {
    /* easy way to plop the elements on top of each other and have them both sized based on the tallest one's height */
    display: grid;
  }
  .grow-wrap::after {
    /* Note the weird space! Needed to preventy jumpy behavior */
    content: attr(data-replicated-value) " ";

    /* This is how textarea text behaves */
    white-space: pre-wrap;

    /* Hidden from view, clicks, and screen readers */
    visibility: hidden;
  }
  .grow-wrap > textarea {
    /* You could leave this, but after a user resizes, then it ruins the auto sizing */
    resize: none;

    /* Firefox shows scrollbar on growth, you can hide like this. */
    overflow: hidden;
  }
  .grow-wrap > textarea,
  .grow-wrap::after {
    /* Identical styling required!! */
    border: 2px solid pink;
    padding: 0.5rem;
    font: inherit;

    /* Place on top of each other */
    grid-area: 1 / 1 / 2 / 2;
  }
  textarea {
    background: white;
    color: black
  }
  textarea:disabled {
    border: 2px solid black
  }
</style>
