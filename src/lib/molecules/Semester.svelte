<script>
  import Heading from "$lib/molecules/Heading.svelte"
  import SprintLink from "$lib/molecules/SprintLink.svelte"
  let { semester, i } = $props()
  let semesterNr = `Semester ${++i}` 
  
</script>

<article class="semester">
  <a href="/{semester.slug}">
    <Heading title={semesterNr} subtitle={semester.title} />
  </a>
  <ol>
    {#each semester.sprints as sprint, index}
      <SprintLink {semester} {sprint} nextSprint={index !== semester.sprints.length - 1 ? semester.sprints[index + 1] : false}/>
    {/each}
  </ol>
</article>

<style>
  .semester {
    padding: 0;
    border: none;
    scroll-snap-align: start;
  }

  .semester a {
    color: var(--blueberry);
    text-decoration: none;
    display: inline-block;
    font-size: 1.5em;
    margin: 0;
    position: sticky;
    left: 0;
  }

  .semester a:focus, .semester a:hover {
    color: var(--text-element-hover);
    text-decoration: underline;
    text-decoration-color: var(--text-element-hover);
  }

  .semester a:focus-visible {
    outline: none;
    color: var(--text-element-hover);
  }

  ol {
    list-style: none;
    padding:0;
    margin:0;
  }

  :global(.semester h2 ) {
    line-height: 1.1;
    font-size: 1rem;
    display:flex;
    flex-direction: column;
  }

  :global(.semester h2 > span) {
    font-size: 0.6em;
    letter-spacing: 0;
    text-transform: uppercase;
    font-weight: normal;
  }

  @media (750px <= width) {
    .semester > a {
      text-decoration: none;
      display: inline-block;
    }

    ol {
      list-style: none;
    }
  }

</style>