<script>
  import { Heading } from '$lib';

  let { tasks } = $props();
</script>

{#if tasks && tasks.length > 0}
  <section>
    <h3 class="titles">Leertaken</h3>
    {#each tasks as task}
      {#if task.topic == "task"}
        <strong>
          <a href={task.url} data-sveltekit-prefetch>{task.name}</a>
          <small aria-label="Number of forks: {task.forkCount}"
            >{task.forkCount} forks</small
          >
        </strong>
        <p>{task.description}</p>
      {/if}
    {/each}

    <h3 class="titles">Deeltaken</h3>
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
    color: var(--blueberry);
    border: 2px solid var(--blueberry);
    border-radius: var(--rounded);
    box-shadow: -4px 4px var(--blueberry);
    min-height: 18rem;
    width: fit-content;
    word-wrap: break-word;
    padding: 1rem 1.25rem 2rem 1.25rem;
    width: calc(100% - 2.5rem);

    strong {
      display: flex;
      align-items: flex-end;
      justify-content: space-between;
      margin-top: 0.5em;
      margin-bottom: 0.5em;
      font-weight: normal;

      a {
        color: var(--blueberry);
        font-weight: 700;
        text-transform: capitalize;
        overflow: hidden;
        text-decoration: none;
        padding: 0;
      }

      a:hover,
      a:focus,
      a:focus-visible {
        color: var(--text-element-hover);
        text-decoration: underline;
        outline: none;
        outline-offset: none;
        text-decoration-color: var(--text-element-hover);
      }

      small {
        font-size: 0.6em;
        font-weight: 400;
        color: var(--blueberry);
        margin-left: 0.25rem;
        padding: 0 0.1rem;
        transform: translateY(-5px);
        white-space: nowrap;
      }
    }

    p {
      margin-top: -0.5em;
      margin-bottom: 1.25em;
    }
  }

  .titles {
    font-size: 1.5em;
    margin: 0;
    font-weight: 200;
  }
  @media (768px <= width) {
    section {
      max-width: 35em;
    }
  }
</style>
