<script>
import { Heading, Card, About, Credits } from "$lib";

export let data;

const now = new Date();

$: sortedList =
    data?.weLoveWebList
        ?.filter((item) => {
            const year = new Date(item.date_time).getFullYear();
            return (
                item.status === "published" &&
                (year === 2024 || year === 2025)
            );
        })
        ?.sort((a, b) => new Date(b.date_time) - new Date(a.date_time)) ||
    [];

$: nextUpcoming =
    sortedList.reduce((closest, item) => {
        const itemDate = new Date(item.date_time);
        if (
            itemDate >= now &&
            (!closest || itemDate < new Date(closest.date_time))
        ) {
            return item;
        }
        return closest;
    }, null) || sortedList[0];
</script>

<Heading
    small={'Laat je inspireren door experts!'}
    h1={'We ❤️ Web'}
    linkText={'Archief'}
    link={'/collectie'}
></Heading>

<section>
{#if sortedList.length > 0}
    {#each sortedList as item}
        <Card
            title={item.title}
            speaker={item.speaker}
            job={item.job_title}
            link={item.website_link}
            date_time={item.date_time}
            uuid={item.uuid}
            isNextUpcoming={item === nextUpcoming}
        />
    {/each}
{/if}
</section>

<About />
<Credits />

<style>
section {
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
}
</style>