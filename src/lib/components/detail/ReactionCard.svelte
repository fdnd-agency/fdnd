<script>
    export let reactionData;
    export let publishDate;
</script>

<li>

    <!-- Author info -->
    <div class="authorInfoReaction">
        <picture>
            <img
                src="https://cdn.discordapp.com/avatars/{reactionData
                    .author.id}/{reactionData.author.avatar}.png"
                alt=""
            />
        </picture>

        <p>
            <span>{reactionData.author.username}</span>
            {publishDate}
        </p>
    </div>

    <!-- Reaction body -->
    <p class="reactionContent">
        {reactionData.content}
    </p>

    <!-- Reaction image (if there is any) -->
    {#if reactionData.attachments.length >= 1}
        <a
            rel="noreferrer"
            target="_blank"
            href={reactionData.attachments[0].url}
        >
            <picture class="reactionPicture">
                <img src={reactionData.attachments[0].url} alt="" />
            </picture>
        </a>
    {/if}
</li>

<style>
    li {
        border: 1px solid var(--green);
        border-radius: var(--border-round);
        margin-bottom: 1rem;
        padding: 1rem;
    }

    div {
        display: flex;
        align-items: center;
        margin-bottom: 1rem;
    }

    /* Author info */
    .authorInfoReaction picture {
        width: 2rem;
        height: 2rem;
        margin-right: 0.5rem;
        display: none;
    }

    img {
        width: inherit;
        height: inherit;
        object-fit: cover;
    }

    .authorInfoReaction img {
        border-radius: 50%;
    }

    p {
        font-size: 0.9rem;
    }

    .authorInfoReaction p {
        display: flex;
    }

    span {
        display: flex;
        align-items: center;
    }

    span::after {
        content: "";
        display: inline-block;
        width: 0.3rem;
        height: 0.3rem;
        background-color: var(--green);
        border-radius: 50%;
        margin: 0 5px;
    }

    /* Reaction image */
    .reactionPicture {
        width: 100%;
        height: 15rem;
        display: block;
        margin-top: 1rem;
    }

    @media (min-width: 30rem) {
        .authorInfoReaction picture {
            display: block;
        }

        .reactionContent {
            max-width: 30rem;
        }
    }
</style>