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
    color: var(--color-white);
    max-width: 35rem;
  }

  h2 {
    font-size: 2rem;
    margin: 0;
    padding: 0;
  }

  p {
    margin: 0;
    font-size: 1rem;
  }
</style>
