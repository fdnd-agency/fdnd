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

  :global(main) {
    background-color: var(--grey);
    padding: 0 1rem 0 1rem;
    border-radius: var(--rounded);
  }

  :global(footer) { 
    margin: auto; 
    margin-top: 1rem; 
  }
  :global(footer nav) { 
    padding: 1rem; 
  }
  :global(footer nav h2) { 
    margin: calc(-1rem - 1px) calc(-1rem - 1px) 1rem 2rem; 
  }
  :global(footer nav p), :global(footer nav ul) { 
    margin-left: 0.5rem; 
  }
  
  @media (min-width: 750px) {
    :global(main) {
      background-color: var(--grey);
      padding: 0 2rem 0 2rem;
      border-radius: var(--rounded);
    }
  }
</style>
