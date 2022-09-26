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
    font-size: 1.2rem;
    color: var(--color-white);
    max-width: 35em;
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
