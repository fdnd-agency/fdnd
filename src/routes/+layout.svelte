<script>
  import Nav from "$lib/organisms/Nav.svelte"
  import Footer from "$lib/organisms/Footer.svelte"
 
  let { children } = $props()
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
  main {
    padding:1rem .5rem;
    background-color: var(--grey);
    position: relative;
    z-index:20;
    border-radius: 1rem 0 1rem 1rem;
    
    @media (min-width: 750px) {
        padding: 3rem;
        max-width:75.5rem;
    }
  }

</style>
