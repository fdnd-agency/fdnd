<script>
  let { semester } = $props()
</script>

<article class="goal">
  <h3> Leerresultaat </h3>
  {@html semester.goal.html}
</article>

<style>
  article.goal {
      background-color: var(--white);
      color: var(--blueberry);
      border: 2px solid var(--turquoise);
      border-radius: var(--rounded);
      box-shadow: -4px 4px var(--lavender);
      padding:1rem;
      margin: .9rem 0;
    }

    article.goal h3 {
      margin-top: 0;
    }
</style>