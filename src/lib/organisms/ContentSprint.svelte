<script>
  import Heading from "$lib/molecules/Heading.svelte";
  import Topics from "$lib/molecules/Topics.svelte";
  let { title, sprintNumber, content, startdate, topics } = $props();
</script>

  <article>
    <Heading title="Sprint {sprintNumber}: {title}" />
    <div>
      {#if content}
        {@html content.html}
      {/if}
    </div>
    <Topics {startdate} {topics} />
  </article>

<style>
  article {
    position: relative;
    color: black;
    width: fit-content;
    min-height: 18rem;
    max-width: 35em;

    div { 
      margin-top: 1.5rem; 
    }
  }

  :global(article p) { 
    font-size: 1rem; 
  }
  
  :global(blockquote) { 
    font-size: 1rem;
    color: #444444; 
    border-left: 3px solid #444444; 
    padding-left: 1em;
  }
</style>
