<script>
  import SprintLink from "$lib/molecules/SprintLink.svelte";

  let { semester, sprints } = $props();
</script>

<article>
  <h3>Sprints</h3>
  <ol>
    {#each sprints as sprint}
      <SprintLink {semester} {sprint} />
    {/each}
  </ol>
</article>

<style>
  article {
    padding-bottom: 1em;

    ol {
      padding: 0;
    }

    h3 {
      margin-top: 2rem;
    }
  }
</style>
