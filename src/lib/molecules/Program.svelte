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
  }
  
  @media (min-width: 750px) { section{ margin:0; div { width: max-content; } }}
</style>
