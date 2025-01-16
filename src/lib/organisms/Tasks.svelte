<script>
  import Heading from "$lib/molecules/Heading.svelte";
  let { tasks } = $props();
</script>

{#if tasks && tasks.length > 0}
  <section>
    <Heading title="Leertaken" />
    {#each tasks as task}
      {#if task.topic == "task"}
        <strong>
          <a href={task.url} data-sveltekit-prefetch>{task.name}</a>
          <small>{task.forkCount} forks</small>
        </strong>
        <p>{task.description}</p>
      {/if}
    {/each}

    <Heading title="Deeltaken"/>
    {#each tasks as task}
      {#if task.topic == "subtask"}
        <strong>
          <a href={task.url} data-sveltekit-prefetch>{task.name}</a>
          <small>{task.forkCount} forks</small>
        </strong>
        <p>{task.description}</p>
      {/if}
    {/each}
  </section>
{/if}

<style>
  section {
    position: relative;
    background-color: var(--white);
    color: black;
    border: 2px solid var(--turquoise);
    border-radius: var(--rounded);
    box-shadow: -4px 4px var(--lavender);
    min-height: 18rem;
    max-width: 35em;
    padding: 1rem 1.25rem 2rem 1.25rem;

    strong {
      display: flex;
      align-items: flex-end;
      justify-content: space-between;
      margin-top: .5em;
      margin-bottom: 0.5em;
      padding-left: .75em;

      a {
        color: #7f2fff;
        font-weight: 700;
        text-transform: capitalize;
        overflow: hidden;
        text-decoration: none;
        padding: 0;
      }

      a:hover{
        text-decoration:underline;
        text-decoration-color: var(--turquoise);
        text-decoration-thickness: 2px;
        text-decoration-skip: ink;
      }

      small {
        font-size: 0.7em;
        font-weight: 400;
        color: #444;
        margin-left: 0.25rem;
        padding: 0 0.1rem;
        transform: translateY(-5px);
        white-space: nowrap;
      }
    }
    p {
        margin-top: -.5em;
        margin-bottom: 1.25em;
        padding-left: .75em;
      }
  }
</style>