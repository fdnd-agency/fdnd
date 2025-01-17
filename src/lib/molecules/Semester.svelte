<script>
  import Heading from "$lib/molecules/Heading.svelte";
  import SprintLink from "$lib/molecules/SprintLink.svelte";
  let { semester } = $props();
</script>

<section class="semester">
  <a href="/{semester.slug}">
    <Heading title={`Semester`} subtitle={semester.title} />
  </a>
  <ol>
    {#each semester.sprints as sprint, index}
      <SprintLink {semester} {sprint} nextSprint={index !== semester.sprints.length - 1 ? semester.sprints[index + 1] : false}/>
    {/each}
  </ol>
</section>

<style>
  .semester {
    padding: 0;
    border: none;
    scroll-snap-align: start;
    margin-left: -.15em;
  }

  .semester a {
    color: var(--blueberry);
    text-decoration: none;
    display: inline-block;
    font-size: 1.5em;
    margin: 0 -0.5rem 0.5 0.5em;
  }

  .semester a:focus {
    color: var(--blueberry);
  }

  ol {
    list-style: none;
    padding: 0.5rem;
    margin-top: -1.5em;
    margin-left: -.25em;
    max-width: 320px;
  }

  :global(.semester h2 ) {
    line-height: 1.1;
    font-size: 1.25rem !important;
    margin-bottom: .5em
  }

  :global(.semester h2 > span) {
    font-size: 0.6em;
    letter-spacing: 0;
    text-transform: uppercase;
  }

  @media (min-width: 960px) {
    .semester > a {
      color: var(--blueberry);
      text-decoration: none;
      display: inline-block;
    }

    .semester > a:focus {
      color: var(--blueberry);
    }

    ol {
      list-style: none;
      max-width: 360px;
    }
  }

</style>
