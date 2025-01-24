<script>
  import Heading from "$lib/molecules/Heading.svelte";
  let { title, content } = $props();
</script>

<section>
  <div>
    <Heading {title} />
    <!-- {@html content.html} -->
  </div>
</section>

<style>
  section {
    position: relative;
    color: var(--blueberry);
    padding: 1em 1rem 0;

    div {
      padding: 1.25em;
    }
  }
  :global(section h2::selection, section p::selection) { background-color: var(--lavender); color: var(--lavender); }
  :global(section p) { padding: 0 0.75em; font-size: 1rem; margin: 0; max-width: 65ch; letter-spacing: -0.04em; }
  @media (min-width: 750px) { section{ margin:0 -2rem; div { width: max-content; } }}
</style>
