<script>
  import { Heading, Topics } from '$lib';

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
    color: var(--blueberry);
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
    border-left: 1px solid currentColor;
    padding-left: 1rem;
    margin: 0;
    font-style: italic;
  }
</style>
