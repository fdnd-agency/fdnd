<script>
  import Heading from "$lib/molecules/Heading.svelte";
  import Content from "$lib/organisms/ContentSemester.svelte";
  import Sprints from "$lib/organisms/Sprints.svelte";
  import Goal from "$lib/organisms/Goal.svelte";

  let { data } = $props();

  const semester = data;
  const { content, goal, sprints, title } = semester;
</script>

<Heading title="Semester" subtitle={title} />

<section>
  <div class="content-container">
    <Content {semester} {content} />
    <Sprints {semester} {sprints} />
  </div>

  <Goal {semester} />
</section>

<style>
  section {
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: start;
    gap: 2rem;

    .content-container {
      width: 100%;
    }
  }

  @media (750px <=width) {
    section {
      display: flex;
      flex-direction: column;
      justify-content: start;

      .content-container {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: start;
        gap: 2rem;
      }
    }
  }

  @media (1024px <= width) {
    section {
      display: grid;
      grid-template-areas: "content sprints";
      grid-template-columns: 2fr 1fr;

      .content-container {
        grid-area: content;
      }
    }
  }
</style>
