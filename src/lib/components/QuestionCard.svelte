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
            <h4>{title}</h4>

            <!-- Question categories -->
            <ul class="tags-wrapper">
                {#each tags as tag}
                    <li>
                        {`${tag.emoji} ${tag.name}`}
                    </li>
                {/each}
            </ul>

            <!-- Question seperator -->
            <hr/>

            <!-- Question reactions -->
            <p class="reactions">
                <img width="13.6" height="13.6" src="/images/react-icon.jpg" alt=""/>
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
        background-color: var(--element-white);
        padding: 1rem 1.5rem;
        border-radius: 0.6rem;
        box-shadow: rgb(149 157 165 / 20%) 0px 8px 24px;
        transition: transform 150ms;
    }

    article:hover {
        transform: translateY(-2px);
    }

    .publish-information {
        color: var(--text-gray);
        font-size: 0.8rem;
        font-weight: 600;
        display: flex;
    }

    .publish-information span {
        color: var(--element-primary);
        display: flex;
        align-items: center;
    }

    .publish-information span::after {
        content: "";
        display: inline-block;
        width: 0.3rem;
        height: 0.3rem;
        background-color: var(--text-gray);
        border-radius: 50%;
        margin: 0 5px;
    }

    h4 {
        margin-top: 1rem;
        font-size: 1.35rem;
    }

    .tags-wrapper {
        display: flex;
        margin-top: 1rem;
        flex-wrap: wrap;
    }

    .tags-wrapper li {
        text-transform: uppercase;
        font-size: 0.75rem;
        color: var(--text-secondary);
        font-family: "Rubik", sans-serif;
        font-weight: 600;
        border: 1px solid var(--element-border);
        padding: 0.3rem 0.9rem;
        border-radius: 3rem;
        margin-right: 0.3rem;
        margin-bottom: 0.5rem;
    }

    hr {
        border: 1px solid var(--element-border);
        margin: 1rem 0;
    }

    .reactions {
        font-size: 0.9rem;
        display: flex;
        align-items: center;
    }

    .reactions img {
        width: 0.85rem;
        height: auto;
    }

    .reactions span {
        color: var(--element-primary);
        font-weight: 600;
        margin-left: 0.3rem;
    }

    .reactions p {
        color: var(--text-gray-4);
        display: inline;
    }

    @media (min-width: 75rem) {
        article {
            margin-top: 0;
            margin-bottom: 1rem;
        }

        h4 {
            font-size: 1.5rem;
        }

        li {
            font-size: 0.8rem;
        }

        .tags-wrapper li {
            margin-bottom: 0;
        }
    }
</style>
