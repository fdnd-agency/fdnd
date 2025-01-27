<script>
  let { semester } = $props();
</script>

<article>
  <h3> Inhoud </h3>
  {@html semester.content.html}
</article>
<article>
  <h3> Leerresultaat </h3>
  {@html semester.goal.html}
</article>

<style>
  article {
    margin-block: 2rem;
    margin-inline: 0.5rem;
    padding: 1rem;
    background-color: var(--white);
    border: 2px solid var(--turquoise);
    border-radius: var(--rounded);
    box-shadow: -4px 4px var(--lavender);
    max-width: 100%;

    h3 { 
      margin: 0 0 0.5rem; 
    }
  }
  @media (750px <=width){ 
    article { 
      max-width: 43%; 
    } 
  }
</style>