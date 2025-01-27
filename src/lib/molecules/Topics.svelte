<script>
  import { longDate } from "$lib/utils/date.js";
  import IconCal from "$lib/atoms/Calendar.svelte";
  import IconTopic from "$lib/atoms/Topic.svelte";
  let { startdate, topics } = $props();
</script>

<aside>
  <h3>Topics</h3>
  <ul>
    <li>
      {#if startdate}
        <IconCal date={longDate(startdate)} />
      {/if}
    </li>
    {#each topics as topic}
      <li>
        <IconTopic {topic} />
      </li>
    {/each}
  </ul>
</aside>

<style>
  aside {
    padding-left: .5rem;

    ul {
      margin: 0;
      padding: 0;
      display: flex;
      flex-wrap: wrap;
      column-gap: 0.25rem;
      row-gap: 0.25rem;
      
      li {
        padding: 0.1rem .25rem;
        font-size: 0.8rem;
        font-weight: 600;
        border-radius: var(--rounded);
        line-height: 1.5;
        display: flex;
        background: var(--turquoise);
        color: black;
      }
    }
  }
</style>
