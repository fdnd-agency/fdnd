<script>
  import Nav from "$lib/organisms/Nav.svelte";
  import Footer from "$lib/organisms/Footer.svelte";
  /**
   * @typedef {Object} Props
   * @property {import('svelte').Snippet} [children]
   */

  /** @type {Props} */
  let { children } = $props();
</script>

<svelte:head>
  <title>Frontend Design & Development | Programma</title>
</svelte:head>

<Nav />

<main>
  {@render children?.()}
</main>

<Footer />

<style>
  :global(body) { 
    margin: 0 0.75em; 
    background-color: var(--lavender); 
  }
  :global(body), :global(body main) { 
    display: block; 
  }

  main {
    padding:.5rem;
    background-color: var(--grey);
    border-radius: var(--rounded);
    
    @media (min-width: 750px) {
        background-color: var(--grey);
        padding: 3rem;
        border-radius: 1rem 0 0 0;
    }
  }

</style>
