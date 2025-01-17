<script>
  import { prettyDate } from "$lib/utils/date";
  let { semester, sprint, nextSprint } = $props();
  const today = new Date();
  const sprintDate = new Date(sprint.startdate);
  let nextSprintDate = nextSprint ? new Date(nextSprint.startdate) : false;

  let active = $derived(
    today >= sprintDate && (!nextSprintDate || today < nextSprintDate),
  );
  let past = $derived(nextSprintDate && today > nextSprintDate);
</script>

{#if sprint.sprintNumber}
  <li class:active class:past>
    <a data-sveltekit-prefetch href="{semester.slug}/{sprint.slug}">
      <span class:past> {sprint.sprintNumber} </span>
      <div>
        <strong> {sprint.title} </strong>
        <time>
          {#if sprint.startdate}
            {prettyDate(sprint.startdate)}
          {/if}
        </time>
      </div>
    </a>
  </li>
{:else}
  <li class="extra" class:active class:past>
    <span> {sprint.title} </span>
    <time>
      {#if sprint.startdate}
        {prettyDate(sprint.startdate)}
      {/if}
    </time>
  </li>
{/if}

<style>
  a:focus, a:hover { background-position: left bottom; }

  li {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    font-size: 1.75rem;
    margin-top: 0;
    margin-left: .5em;
    border: 2px solid var(--turquoise);
    border-radius: var(--rounded);
    box-shadow: -4px 4px var(--lavender);
    margin-top: 0.6em;
    background: var(--white);
    width: 275px;
    height: 3.75rem;
    overflow: hidden;
  }

  li a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: black;
    font-size: 1rem;
    position: relative;
    height: 100%;
    width: 100%;
    background: linear-gradient( to right, var(--turquoise) 50%, var(--white) 50% );
    background-size: 200% 100%;
    background-position: right bottom;
  }

  li a span {
    display: flex;
    align-items: center;
    justify-content: center;
    text-transform: uppercase;
    font-weight: 800;
    font-size: 1.2em;
    width: 60px;
    height: 100%;
    margin-left: -0.25em;
    border-radius: var(--rounded);
    border: 2px solid var(--turquoise);
    background: var(--white);
    color: var(--lavender);
  }

  li a div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: calc(100% - 70px);
    height: 100%;
    padding-left: 0.5em;
  }

  :global(li.past) {
    opacity: 0.5;
  }

  :global(li.past strong) {
    font-weight: 500;
    text-decoration: line-through;
  }

  :global(li.past time),
  :global(li.extra.past span) {
    text-decoration: line-through;
  }

  span.past {
    color: var(--attention);
  }
  li a, li > span {
    display: flex;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    text-decoration: none;
  }

  li.extra {
    display: none;
    padding: 0.25em 0.1em;
    border-radius: var(--rounded);
    height: 2em;
    border: 2px solid var(--lavender);
    box-shadow: -4px 4px var(--turquoise);
  }

  li.extra span {
    font-size: 0.5em;
    font-weight: 600;
    line-height: 1.2;
    margin-left: 1.75em;
    text-transform: uppercase;
  }

  li.extra time {
    color: inherit;
  }

  :global(body.expand) li.extra {
    display: flex;
    justify-content: space-between;
  }

  time {
    border: 0 solid;
    font-size: 0.7em;
    font-weight: 600;
    background-color: transparent;
    color: inherit;
    margin-right: 1em;
  }

  @media (min-width: 1100px) {
    li {
      width: 350px;
    }
  }

  @media (min-width: 1800px) {
    li {
      width: 400px;
    }
  }
</style>
