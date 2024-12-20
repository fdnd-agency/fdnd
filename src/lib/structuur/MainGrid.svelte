<script>
    import { Card } from "$lib";

    export let data;


    const now = new Date();

    $: sortedList =
        data?.weLoveWebList
            ?.filter((item) => {
                const year = new Date(item.date_time).getFullYear();
                return item.status === "published" && (year === 2024 || year === 2025);
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

<section>
    {#if sortedList.length > 0}
        <picture>
            <a href=/{nextUpcoming.uuid}>
                <img
                    src={`https://fdnd-agency.directus.app/assets/${nextUpcoming.image}`}
                    alt={nextUpcoming.speaker || "Onbekende spreker"}
                />
            </a>
        </picture>

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

    section picture {
        width: 100%;
        height: 100%;
        overflow: hidden;
        display: flex;
        align-items: center;
        border: 2px solid var(--green);
        border-radius: 1.563rem;
        transition: 0.7s;

        @media (min-width: 1024px) {
            grid-row: 1 / 3;
            grid-column: 1 / 3;
        }

        @media (min-width: 1440px) {
            height: 385px;
            grid-row: 1 / span 2;
            grid-column: 1 / span 2;
        }
    }

    section picture:hover {
        border: 2px solid var(--green);
        box-shadow: 0 0 1rem rgba(102, 229, 191, .5);
        transform: scale(1.05);
    }

    section picture a {
        width: 100%;
        height: 100%;
    }
    
    section picture a img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 1.563rem;
        border: 2px solid #e9e0e965;
    }
</style>
