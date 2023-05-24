<script>
    import Questions from "$lib/components/Questions.svelte";
    import AdditionalInformation from "$lib/components/index/AdditionalInformation.svelte";
    import Filter from "$lib/components/index/Filter.svelte";

    // Stores
    import { filteredThreads } from "$lib/stores/filteredThreads.js";
    import {filterState } from "$lib/stores/showFilter.js";
    import { get } from "svelte/store";

    // Get data
    export let data;

    let threads = get(filteredThreads).length
        ? get(filteredThreads)
        : data.threads.threads;
    let members = data.members;
    let tags = data.tags.available_tags;

    filteredThreads.set(threads);   

    // console.log('user', data.user)
</script>

<section class:disable-scroll={$filterState === true}>
    <Filter {filteredThreads} {tags} title="Filters" />

    <Questions id="content" {threads} {members} {tags} />

    {#if data.user}
    <img src="https://cdn.discordapp.com/avatars/{data.user.id}/{data.user.avatar}.png" alt="">
    {/if}

    <AdditionalInformation />
</section>

<style>
    @media(min-width: 60rem) {
        section {
            display: grid;
            grid-template-columns: 0.35fr 1fr;
            grid-gap: 2rem;
            padding: 0 2rem;
            align-items: start;
        }
    }

    @media (min-width: 75rem) {
        section {
            grid-template-columns: 0.4fr 1fr 0.4fr;
            padding: 0 4.7rem;
            grid-gap: 3.1rem;
        }
    }
</style>
