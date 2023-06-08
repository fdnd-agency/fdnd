<script>
    import { loop_guard } from "svelte/internal";

    export let data;

    const threadInfo = data.threadInfo;
    const members = data.members;
    const threadData = data.threadData;
    const threadCreationDate = threadInfo.thread_metadata.create_timestamp;
    const reactions = threadData.slice(1);

    console.log(reactions);

    const threadAuthor = members.find(
        (value) => value.user.id === threadInfo.owner_id
    );

    const formattedDate = new Date(threadCreationDate).toLocaleDateString();
</script>

<main>
    <section class="threadQuestion">
        <article>
            <div class="authorInfo">
                <picture>
                    <img
                        src="https://cdn.discordapp.com/avatars/{threadAuthor
                            .user.id}/{threadAuthor.user.avatar}.png"
                        alt=""
                    />
                </picture>

                <p>
                    <span>{threadAuthor.user.username}</span>
                    {formattedDate}
                </p>
            </div>

            <h2>{threadInfo.name}</h2>

            <p class="threadIntro">
                {threadData[0].content}
            </p>

            {#if threadData[0].attachments.length >= 1}
                <picture class="threadIntroPicture">
                    <img src={threadData[0].attachments[0].url} alt="" />
                </picture>
            {/if}
        </article>
    </section>

    <section class="threadReactions">
        <h3>Reacties</h3>

        <ul>
            {#each reactions as reaction}
                <li>
                    <div class="authorInfoReaction">
                        <picture>
                            <img
                                src="https://cdn.discordapp.com/avatars/{reaction
                                    .author.id}/{reaction.author.avatar}.png"
                                alt=""
                            />
                        </picture>

                        <p>
                            <span>{reaction.author.username}</span>
                            {formattedDate}
                        </p>
                    </div>

                    <p class="reactionContent">
                        {reaction.content}
                    </p>

                    {#if reaction.attachments.length >= 1}
                        <a rel="noreferrer" target="_blank" href={reaction.attachments[0].url}>
                            <picture>
                                <img
                                    src={reaction.attachments[0].url}
                                    alt=""
                                />
                            </picture>
                        </a>
                    {/if}
                </li>
            {/each}
        </ul>
    </section>
</main>

<style>
    main {
        display: grid;
        grid-template-columns: 2fr 1fr;
    }

    .threadQuestion {
        border: 1px solid var(--green);
        border-radius: var(--border-round);
    }

    .threadQuestion,
    .threadReactions {
        margin: 1rem 4.7rem;
        color: var(--green);
    }

    article {
        padding: 2rem;
    }

    /* Author information */
    .authorInfo, .authorInfoReaction {
        display: flex;
        align-items: center;
        margin-bottom: 1rem;
    }

    .authorInfo picture {
        width: 2.5rem;
        height: 2.5rem;
        margin-right: 1rem;
    }

    .authorInfo img , .authorInfoReaction img{
        width: inherit;
        height: inherit;
        border-radius: 50%;
        object-fit: cover;
    }

    .authorInfo p, .authorInfoReaction p {
        font-size: 1rem;
        display: flex;
    }

    .authorInfo span, .authorInfoReaction span {
        display: flex;
        align-items: center;
    }

    .authorInfo span::after, .authorInfoReaction span::after {
        content: "";
        display: inline-block;
        width: 0.3rem;
        height: 0.3rem;
        background-color: var(--green);
        border-radius: 50%;
        margin: 0 5px;
    }

    article h2 {
        font-size: 1.5rem;
    }

    .threadIntro {
        margin-top: 1rem;
        font-size: 0.95rem;
    }

    .threadIntroPicture {
        margin-top: 1rem;
        width: 100%;
        height: 20rem;
        display: block;
    }

    .threadIntroPicture img {
        width: inherit;
        object-fit: cover;
        height: inherit;
        border-radius: var(--border-round);
    }

    .threadReactions {
        grid-row: 2;
    }

    .threadReactions h3 {
        margin-bottom: 1rem;
    }

    .threadReactions li {
        border: 1px solid var(--green);
        border-radius: var(--border-round);
        margin-bottom: 1rem;
        padding: 1rem 2rem;
    }

    .authorInfoReaction picture {
        width: 2.15rem;
        height: 2.15rem;
        margin-right: 1rem;
    }

    .reactionContent {
        font-size: 1rem;
    }   

    li picture {
        width: 100%;
        height: 15rem;
        display: block;
        margin-top: 1rem;
    }

    li img {
        width: inherit;
        height: inherit;
        object-fit: cover;
    }
</style>
