<script>
    export let author;
    export let publishDate;
    export let threadBody;
    export let threadInfo;
</script>

<article>

    <!-- Author info -->
    <div class="authorInfo">
        <picture>
            <img
                src="https://cdn.discordapp.com/avatars/{author
                    .user.id}/{author.user.avatar}.png"
                alt=""
            />
        </picture>

        <p>
            <span>{author.user.username}</span>
            {publishDate}
        </p>
    </div>

    <!-- Thread title -->
    <h2>{threadInfo.name}</h2>

    <!-- Thread body -->
    <p class="threadIntro">
        {threadBody.content}
    </p>

    <!-- Thread image (if there is any) -->
    {#if threadBody.attachments.length >= 1}
        <a
            rel="noreferrer"
            target="_blank"
            href={threadBody.attachments[0].url}
        >
            <picture class="threadIntroPicture">
                <img src={threadBody.attachments[0].url} alt="" />
            </picture>
        </a>
    {/if}
</article>

<style>
    article {
        width: 100%;
        border-radius: var(--border-round);
        background-color: var(--green);
        color: var(--blue);
        padding: 1rem;
    }

    /* Author info */
    .authorInfo {
        display: flex;
        align-items: center;
        margin-bottom: 1rem;
    }

    .authorInfo picture {
        width: 2.5rem;
        height: 2.5rem;
        margin-right: .5rem;
        display: none;
    }

    .authorInfo img, .threadIntroPicture img {
        width: inherit;
        height: inherit;
        object-fit: cover;
    }

    .authorInfo img {
        border-radius: 50%;
    }

    .authorInfo p {
        font-size: 1rem;
        display: flex;
    }

    .authorInfo span {
        display: flex;
        align-items: center;
    }

    .authorInfo span::after {
        content: "";
        display: inline-block;
        width: 0.3rem;
        height: 0.3rem;
        background-color: var(--blue);
        border-radius: 50%;
        margin: 0 5px;
    }

    /* Article body */
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
        border-radius: var(--border-round);
    }

    /* Media querys */
    @media (min-width: 30rem) {
        .authorInfo picture {
            display: block;
        }
        
        article h2 {
            max-width: 40rem;
        }

        article p {
            max-width: 30rem;
        }
    }
</style>