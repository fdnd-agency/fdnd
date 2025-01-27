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
    padding:1rem;
    background-color: var(--grey);
    border-radius: var(--rounded);
    
    @media (min-width: 750px) {
        background-color: var(--grey);
        padding: 3rem;
        border-radius: 1rem 0 0 0;
    }
  }

</style>
