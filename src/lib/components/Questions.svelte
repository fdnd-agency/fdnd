<script>
    import FilterBtn from "./FilterBtn.svelte";
    import SortBtn from "./index/SortBtn.svelte";
    import QuestionCard from "./QuestionCard.svelte";
    import SearchBar from "./SearchBar.svelte";
    import QuestionsEmpty from "./index/QuestionsEmpty.svelte";

    // Props
    export let threads;
    export let members;
    export let tags;

    let memberNames = {};

    // Stores
    import { filteredThreads } from "$lib/stores/filteredThreads.js";
    import { filters } from "$lib/stores/filters.js";

    // Find tag belonging to thread
    threads.map((thread) => {
        let emoji = thread.applied_tags.map((tagId) => {
            let found = tags.find((tag) => tagId == tag.id);
            return { emoji: found.emoji_name, name: found.name };
        });
        thread.emoji = emoji;
        return emoji;
    });

    // Find members of a question
    const memberList = threads.map((thread) =>
        members.find((member) => member.user.id == thread.owner_id)
    );

    // Get member names
    memberList.forEach((member) => {
        memberNames[`${member.user.id}`] = member.user.username;
    });

    // Date descending
    threads.sort((a, b) => new Date(b.thread_metadata.create_timestamp) - new Date(a.thread_metadata.create_timestamp))

    // Checkbox filter
    $: threadsF = $filters.checkboxes.length
        ? $filteredThreads.filter((thread) => {
              const hasTag = thread.applied_tags.filter((tag) =>
                  $filters.checkboxes.includes(tag)
              );
              if (hasTag.length) {
                  return thread;
              }
          })
        : $filteredThreads;
</script>

<main id="content">
    <div class="sort-create-wrapper">
        <SortBtn label="Sorteren op:" />
        <FilterBtn />
    </div>

    <SearchBar {threads} placeholder="Vragen zoeken..." />

    <ul>
        <!-- Question card -->
        {#each threadsF as thread}
            <QuestionCard 
                id={thread.id}
                authorName={memberNames[thread.owner_id]}
                date={thread.thread_metadata.create_timestamp}
                title={thread.name}
                tags={thread.emoji}
                reactions={thread.message_count}
            />
        {/each}
    </ul>

    <!-- Questions empty state -->
    {#if threadsF.length == 0}
        <QuestionsEmpty />
    {/if}
</main>

<style>
    main {
        padding: 0 1rem;
    }

    .sort-create-wrapper {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 1.5rem 0;
    }

    @media (min-width: 40rem) {
        ul {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            grid-gap: 1rem;
        }
    }

    @media (min-width: 60rem) {
        main {
            padding: 0;
        }
    }

    @media (min-width: 75rem) {
        .sort-create-wrapper {
            flex-direction: row;
        }
    }
</style>
