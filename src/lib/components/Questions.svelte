<script>
    import FilterBtn from "./FilterBtn.svelte";
    import CreateQuestionBtn from "./index/CreateQuestionBtn.svelte";
    import SortBtn from "./index/SortBtn.svelte";
    import LayoutSwitch from "./LayoutSwitch.svelte";
    import QuestionCard from "./QuestionCard.svelte";
    import SearchBar from "./SearchBar.svelte";
    import QuestionsEmpty from "./index/QuestionsEmpty.svelte";

    // Props
    export let threads;
    export let members;
    export let title;
    export let tags;

    let memberNames = {};

    // Stores
    import {filteredThreads} from "$lib/stores/filteredThreads.js";
    import {filters} from "$lib/stores/filters.js";

    // Find tag belonging to thread
    threads.map((thread) => {
        let emoji = thread.applied_tags.map((tagId) => {
            let found = tags.find((tag) => tagId == tag.id);
            return {emoji: found.emoji_name, name: found.name};
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

<section id="content">
    <!-- Title & button wrapper -->
    <div class="title-btn-wrapper">
        <!-- Title -->
        <h3>{title}</h3>

        <!-- Create question button (mobile) -->
        <CreateQuestionBtn title="Stel je vraag"/>
    </div>

    <!-- Searchbar -->
    <SearchBar {threads} placeholder="Vragen zoeken..."/>

    <!-- Filter & Sort -->
    <div class="actions-wrapper">
        <SortBtn {threads} label="Sorteren op:"/>
        <FilterBtn/>
        <LayoutSwitch/>
    </div>

    <ul>
        <!-- Question card -->
        {#each threadsF as thread}
            <QuestionCard
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
        <QuestionsEmpty/>
    {/if}
</section>

<style>
    section {
        padding: 1rem 1.5rem;
    }

    .title-btn-wrapper {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    h3 {
        font-size: 1.25rem;
    }

    .actions-wrapper {
        display: flex;
        justify-content: space-between;
        margin-top: 1.5rem;
    }

    @media (min-width: 60rem) {
        section {
            padding: 1rem 0;
        }

        h3 {
            font-size: 1.8rem;
        }
    }
</style>
