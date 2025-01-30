<script>
  import { prettyDate } from "$lib/utils/date"
  import { derived } from "svelte/store"

  let { semester, sprint, nextSprint } = $props()

  const today = new Date()
  const sprintDate = new Date(sprint.startdate)

  let nextSprintDate = nextSprint ? new Date(nextSprint.startdate) : false
  
  let active = $derived(today >= sprintDate && (!nextSprintDate || today < nextSprintDate))
  let past = $derived(nextSprintDate && today > nextSprintDate)
</script>

{#if sprint.sprintNumber}
  <li class:active class:past class={sprint.type}>
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
  li a:focus, li a:hover { 
    background: var(--turquoise); 
  }

  li {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    font-size: 1.75rem;
    margin: 0;
    border: 2px solid var(--turquoise);
    border-radius: var(--rounded);
    box-shadow: -4px 4px var(--lavender);
    margin-top: 0.6em;
    min-width: 275px;
    height: 3.75rem;
    overflow: hidden;
    position: relative;
  }

  

  li a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: var(--blueberry);
    font-size: 1rem;
    position: relative;
    height: 100%;
    width: 100%;
    background: var(--white);
    background-size: 200% 100%;
    background-position: right bottom;

    &:focus, 
    &:hover { 
      background: var(--turquoise); 
    }
  }

  li.past a {
    background-color: var(--grey);

    &:focus, 
    &:hover { 
      background: var(--dark-grey); 
    }
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
    color: var(--blueberry);
  }

  li a div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: calc(100% - 70px);
    height: 100%;
    padding-left: 0.5em;
  }

  li a strong {
    font-weight: normal;
  }

  li.past span {
    font-weight: normal;
    font-size: 1em;
    background: var(--grey)
  }

  :global(li.past strong) {
    font-weight: 200;
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
    font-size: 1.75rem;
    border: 2px solid var(--lavender);
    border-radius: var(--rounded);
    box-shadow: -4px 4px var(--turquoise);
    margin-top: 0.6em;
    background: var(--white);
    height: 3.75rem;
    overflow: hidden;
  }

  li.extra span {
    font-size: 0.5em;
    font-weight: 200;
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
    font-weight: 200;
    background-color: transparent;
    color: inherit;
    margin-right: 1em;
    display:flex;
    gap:.25rem;
    align-items:center;
  }

  li:not(.extra) time::after {
    --_bgcolor:var(--grey);
    --_type: 'sprint';
    background:var(--_bgcolor);
    content:var(--_type);
    padding:0.1rem 0.25rem;
    text-transform: capitalize;
    
  }

  li:not(.extra).tribe time::after {
    --_type:'tribe';
    --_bgcolor:#fbfbd5;
  }

  li:not(.extra).designChallenge time::after {
    --_type:'design-challenge';
    --_bgcolor:#e6d7ff;
  }

  li:not(.extra).project time::after {
    --_type: 'project';
    --_bgcolor:#c4f9e9;
  }

  li.active span {
    background:var(--turquoise);
    color: var(--blueberry);
  }

</style>
