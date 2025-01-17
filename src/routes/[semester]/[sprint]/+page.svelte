<script>
  import Content from "$lib/organisms/ContentSprint.svelte";
  import Tasks from "$lib/organisms/Tasks.svelte";
  import Studentwork from "$lib/molecules/StudentWork.svelte";
  import Schedule from "$lib/organisms/Schedule.svelte";
  let { data } = $props();

  const { title, sprintNumber, startdate, content, weekPlans, topics, tasks, stargazer } = data;
</script>

<div>
  <Content {title} {sprintNumber} {content} {startdate} {topics} />
  <Tasks {tasks} />
</div>

<Studentwork {tasks} />
<Schedule {weekPlans} />

<style>
  div {
    display: flex;
    flex-direction: column;
    align-items: baseline;
    justify-content: space-between;
    gap: 2rem;
    background-color: var(--grey);
    border-radius: var(--rounded) 0 0 0;
    padding: 3rem 0 2rem 0;
  }

  @media (min-width: 40em) {
    div { flex-direction: row; }
  }
</style>
