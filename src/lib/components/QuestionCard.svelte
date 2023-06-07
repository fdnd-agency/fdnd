<script>
    export let authorName;
    export let date;
    export let title;
    export let reactions;
    export let tags;
    export let id;

    const baseThreadsUrl = "https://discord.com/channels/1017099203882782750/1027275543755890799/threads";

    const formattedDate = new Date(date).toLocaleDateString();
</script>

<li>
    <a href={`${baseThreadsUrl}/${id}`}>
        <article>

            <!-- Publication information -->
            <p class="publish-information"><span>{authorName}</span>{formattedDate}</p>

            <!-- Question title -->
            <h3>{title}</h3>

            <!-- Question categories -->
            <ul class="tags-wrapper">
                {#each tags as tag}
                    <li>
                        {`${tag.emoji} ${tag.name}`}
                    </li>
                {/each}
            </ul>

            <!-- Question reactions -->
            <p class="reactions">
                <img src="/images/react-icon.svg" alt=""/>
                <span
                >{reactions}
            <p>reacties</p>
        </article>
    </a>
</li>

<style>
    a {
        color: var(--text-primary);
    }

    article {
        margin-top: 1rem;
        padding: 1rem 1.5rem;
        border-radius: 0.6rem;
        transition: transform 150ms;
        background-color: var(--green);
        height: 100%;
    }

    article:hover {
        transform: translateY(-2px);
    }

    .publish-information {
        color: var(--blue);
        font-size: 0.8rem;
        font-weight: 600;
        display: flex;
    }

    .publish-information span {
        color: var(--blue);
        display: flex;
        align-items: center;
    }

    .publish-information span::after {
        content: "";
        display: inline-block;
        width: 0.3rem;
        height: 0.3rem;
        background-color: var(--blue);
        border-radius: 50%;
        margin: 0 5px;
    }

    h3 {
        margin-top: 1rem;
        font-size: 1.35rem;
        color: var(--blue);
    }

    .tags-wrapper {
        display: flex;
        margin-top: 1rem;
        flex-wrap: wrap;
    }

    .tags-wrapper li {
        text-transform: uppercase;
        font-size: 0.75rem;
        color: var(--white);
        font-family: "Rubik", sans-serif;
        font-weight: 600;
        border: 2px solid var(--element-border);
        padding: 0.3rem 0.9rem;
        border-radius: 3rem;
        margin-right: 0.3rem;
        margin-bottom: 0.5rem;
        background-color: var(--blue);
    }

    .reactions {
        font-size: 0.9rem;
        display: flex;
        align-items: center;
        margin-top: 1rem;
    }

    .reactions img {
        width: 0.85rem;
        height: auto;
    }

    .reactions span {
        color: var(--blue);
        font-weight: 600;
        margin-left: 0.5rem;
    }

    .reactions p {
        color: var(--blue);
        display: inline;
    }

    @media (min-width: 40rem) {
        article {
            margin-top: 0;
        }
    }

    @media (min-width: 75rem) {
        li {
            font-size: 0.8rem;
        }

        .tags-wrapper li {
            margin-bottom: 0;
        }
    }
</style>
