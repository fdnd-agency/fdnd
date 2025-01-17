<script>
  import Heading from "$lib/molecules/Heading.svelte";
  let { title, content } = $props();
</script>

<section>
  <div>
    <Heading {title} />
    {@html content.html}
  </div>
</section>

<style>
  section {
    position: relative;
    background-color: var(--grey);
    color: var(--blueberry);
    border-radius: var(--rounded) 0 0 0;
    padding: 3rem 1.25rem 2rem 1.25rem;

    div {
      padding: 1.25em;
      background-color: var(--white);
      border: 2px solid var(--turquoise);
      border-radius: var(--rounded);
      box-shadow: -4px 4px var(--lavender);
    }
  }
  :global(section h2::selection, section p::selection) { background-color: var(--lavender); color: var(--lavender); }
  :global(section p) { padding: 0 0.75em; font-size: 1rem; margin: 0; max-width: 65ch; letter-spacing: -0.04em; }
  @media (min-width: 750px) { section{ padding: 3rem .25rem 2rem 1%; div { width: max-content; } }}
</style>
