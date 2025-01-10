<script>
  import { Card } from "$lib";

  export let data;
  export let startYear;
  export let endYear;

  const startDate = new Date(`${startYear}-08-01`);
  const endDate = new Date(`${endYear}-07-31`);

  $: filteredItems =
    data?.weLoveWebList
      ?.filter((item) => {
        const itemDate = new Date(item.date_time);
        return itemDate >= startDate && itemDate <= endDate; // return item.status === "published" && itemDate >= startDate && itemDate <= endDate;
      })
      ?.sort((a, b) => new Date(b.date_time) - new Date(a.date_time)) || [];
</script>

{#if filteredItems.length > 0}
<h2>{startYear} | {endYear}</h2>
<ul>
  {#each filteredItems as item}
    <li>
      <Card
        title={item.title}
        speaker={item.speaker}
        job={item.job_title}
        link={item.website_link}
        date_time={item.date_time}
        uuid={item.uuid}
      />
    </li>
  {/each}
</ul>
{/if}

<style>
  h2 {
    font-size: clamp(1.5rem, calc(2vw + 1rem), 2.5rem);
    margin-bottom: 1.5rem;
    font-weight: 650;
  }

  ul {
    display: grid;
        width: 100%;
        grid-template-rows: 1fr;
        grid-template-columns: 1;
        gap: 1.5rem;

        @media (min-width: 1024px) {
            grid-template-columns: repeat(2, 1fr);
        }

        @media (min-width: 1440px) {
            grid-template-columns: repeat(3, 1fr);
        }
    list-style-type: none;
  }

  ul li {
    margin-bottom: 1rem;
  }
</style>
