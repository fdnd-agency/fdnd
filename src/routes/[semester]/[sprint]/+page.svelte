<script>
  import Content from "$lib/organisms/ContentSprint.svelte";
  import Tasks from "$lib/organisms/Tasks.svelte";
  import Studentwork from "$lib/molecules/StudentWork.svelte";
  import Schedule from "$lib/organisms/Schedule.svelte";
  import Pagination from "$lib/molecules/Pagination.svelte";

  let { data } = $props();

  const {
    title,
    sprintNumber,
    startdate,
    content,
    weekPlans,
    topics,
    tasks,
    prevSprint,
    nextSprint,
  } = data;
</script>

<div>
  <Content {title} {sprintNumber} {content} {startdate} {topics} />
  <Tasks {tasks} />
</div>

<Studentwork {tasks} />
<Schedule {weekPlans} />

<Pagination {prevSprint} {nextSprint} />

<style>
  div {
    display: flex;
    flex-direction: column;
    align-items: baseline;
    gap: 2rem;
    background-color: var(--grey);
    border-radius: var(--rounded) 0 0 0;
    padding: 0 0 2em;

    @media (min-width: 40em) {
      flex-direction: row;
    }
  }
</style>
