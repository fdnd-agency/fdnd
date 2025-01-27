<script>
  let { semester } = $props();
</script>

<article>
  <h3> Inhoud </h3>
  {@html semester.content.html}
</article>

<style>
  article {
    margin-block: 2rem;
    max-width: 100%;

    h3 { 
      margin: 0 0 0.5rem; 
    }
  }

</style>