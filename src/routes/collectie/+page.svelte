<script>
    import { Heading, Card } from "$lib";

    export let data;

    // Functie om unieke jaren te verkrijgen uit de evenementen data
    const getUniqueYears = (events) => {
        const years = new Set();
        events.forEach(item => {
            const year = new Date(item.date_time).getFullYear();
            years.add(year);
        });
        return Array.from(years).sort((a, b) => b - a);
    };

    // Verkrijg de unieke jaren
    $: uniqueYears = getUniqueYears(data.weLoveWebList);

    // Functie om evenementen te filteren op basis van start- en eindjaar
    const filterEventsByYear = (events, startYear, endYear) => {
        const startDate = new Date(`${startYear}-08-01`);
        const endDate = new Date(`${endYear}-07-31`);
        return events
            .filter(item => {
                const itemDate = new Date(item.date_time);
                return itemDate >= startDate && itemDate <= endDate;
            })
            .sort((a, b) => new Date(b.date_time) - new Date(a.date_time));
    };
</script>

<Heading
    smallText={'Archief pagina'}
    h1Text={'We ❤️ Web'}
    linkText={'Terug'}
    link={'/'}
></Heading>

{#each uniqueYears as year, i}
    <!-- Controleer of er evenementen zijn voor het jaar -->
    {#if filterEventsByYear(data.weLoveWebList, year, year + 1).length > 0}
        <h2>{year} | {year + 1}</h2>
        <ul>
            {#each filterEventsByYear(data.weLoveWebList, year, year + 1) as item}
                <li>
                    <Card
                        title={item.title}
                        speaker={item.speaker}
                        job={item.job_title}
                        link={item.website_link}
                        date_time={item.date_time}
                        uuid={item.uuid}
                        isArchivePage={true}
                    />
                </li>
            {/each}
        </ul>
    {/if}
{/each}

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
