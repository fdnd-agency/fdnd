<script>
    export let title = "";
    export let speaker = "";
    export let job = "";
    export let date_time = "";
    export let isNextUpcoming = false;
    export let uuid = "";

    const formatTime = (dateTime) => {
        const date = new Date(dateTime);
        return date.toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
        });
    };

    const formatDate = (dateTime) => {
        const date = new Date(dateTime);
        const day = String(date.getDate()).padStart(2, "0");
        const month = String(date.getMonth() + 1).padStart(2, "0");
        return `${day}-${month}`;
    };

    $: formattedTime = formatTime(date_time);
    $: formattedDate = formatDate(date_time);

    $: isPast = new Date(date_time) < new Date();
</script>

<article class:is-next-upcoming={isNextUpcoming} class:is-past={isPast}>
    <a href={`/${uuid}`} aria-label="We Love Web Event">
        <h2 class:is-next-upcoming={isNextUpcoming}>{title}</h2>
        <h3>{speaker}</h3>
        <p>{job}</p>
        <div>
            <time>{formattedTime}</time>
            <time>{formattedDate}</time>
        </div>
    </a>
</article>

<style>
    article.is-past h2,
    article.is-past h3,
    article.is-past p,
    article.is-past time {
        color: var(--fifthyshadesofgrey);
    }

    article.is-past::before {
        background-color: var(--fifthyshadesofgrey);
    }

    article.is-next-upcoming:hover {
        border: solid 2px var(--green);
    }

    article {
        border: solid 2px rgba(233, 224, 233, 65);
        border-radius: 1.563rem;
        position: relative;
        padding: 1.25rem 1.5rem 1.25rem 2.875rem;
        background-color: transparent;
        cursor: pointer;
        transition: 0.7s;
    }

    article::before {
        content: "";
        height: 6.25rem;
        width: 3px;
        background-color: var(--blue);
        position: absolute;
        top: 22%;
        left: 1.563rem;
        border-radius: 6.25rem;
    }

    article:hover {
        border: solid 2px var(--blue);
        transform: scale(1.05);
    }

    h2 {
        color: var(--purple);
        font-size: 1.25rem;
    }

    h2.is-next-upcoming {
        color: var(--green);
    }

    h3 {
        font-weight: var(--font-weight-bold);
        font-size: var(--font-size-sm);
        color: var(--blue);
        margin-top: 4px;
    }

    p {
        margin-top: 5px;
        color: var(--fifthyshadesofgrey);
        font-weight: var(--font-weight-reg);
        font-size: var(--font-size-sm);
    }

    div {
        display: flex;
        justify-content: space-between;
        margin-top: 6px;
    }

    time {
        font-weight: var(--font-weight-semi);
        font-size: 1.25rem;
        color: var(--blue);
    }

    @media screen and (min-width: 768px) {
        h2 {
            color: var(--purple);
            font-size: 1.4rem;
        }

        p {
            margin-top: 1.375rem;
        }
    }
</style>
