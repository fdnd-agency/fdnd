<script>
    import ThreadCard from "../../../lib/components/detail/ThreadCard.svelte";
    import ReactionCard from "../../../lib/components/detail/ReactionCard.svelte";

    export let data;

    const threadInfo = data.threadInfo;
    const members = data.members;
    const threadData = data.threadData;
    const threadCreationDate = threadInfo.thread_metadata.create_timestamp;
    const reactions = threadData.slice(1);
    const reactionsCount = threadData.length;

    const threadAuthor = members.find(
        (value) => value.user.id === threadInfo.owner_id
    );

    const formattedDate = new Date(threadCreationDate).toLocaleDateString();
</script>

<main>

    <!-- Thread info -->
    <section class="threadQuestion">
        <ThreadCard
            author={threadAuthor}
            publishDate={formattedDate}
            threadBody={threadData[0]}
            {threadInfo}
        />
    </section>

    <!-- Thread reactions -->
    <section class="threadReactions">
        <h3>{reactionsCount} Reacties</h3>

        <ul>
            {#each reactions as reaction}
                <ReactionCard reactionData={reaction} publishDate={formattedDate} />
            {/each}
        </ul>
    </section>
</main>

<style>
    main {
        padding: 1rem;
    }

    .threadReactions {
        color: var(--green);
    }

    .threadReactions {
        width: 100%;
    }

    .threadReactions h3 {
        margin: 1rem 0;
    }

    @media (min-width: 30rem) {
        .threadQuestion {
            width: 100%;
        }
    }

    @media (min-width: 60rem) {
        main {
            display: grid;
            grid-template-columns: 2fr 1fr;
            place-items: start;
            grid-gap: 2rem;
            padding: 1rem 2rem;
        }

        .threadQuestion {
            position: sticky;
            top: 2rem;
        }

        .threadReactions h3 {
            margin-top: 0;
            margin-bottom: 1rem;
        }
    }

    @media (min-width: 75rem) {
        main {
            padding: 1rem 4.7rem;
        }
    }
</style>
