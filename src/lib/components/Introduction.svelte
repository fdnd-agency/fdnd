<script lang="ts">
  export let introductionTitle: string
  export let introduction: string
</script>

<section>
  <h2>{introductionTitle}</h2>
  <p>{introduction}</p>
</section>

<style>
  section {
    padding: 2rem;
    font-size: 1.2rem;
    max-width: 35em;
    background-color: var(--turquoise);
    color: var(--blueberry);
    border-radius: var(--rounded);
  }

  h2 {
    font-size: 2rem;
    margin: 0;
    padding: 0;
  }

  p {
    margin: 0;
  }

  @media (max-width: 35rem) {
    p {
      margin-bottom: 1rem;
    }
  }
</style>
