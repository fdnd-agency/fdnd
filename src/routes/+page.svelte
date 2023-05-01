<script>
    import Hero from "$lib/components/index/Hero.svelte";
    import IntroBar from "$lib/components/index/IntroBar.svelte";
    import GeneralInformation from "$lib/components/index/GeneralInformation.svelte";
    import Questions from "$lib/components/Questions.svelte";
    import AdditionalInformation from "$lib/components/index/AdditionalInformation.svelte";
    import Header from "$lib/components/Header.svelte";
    import MainInformation from "$lib/components/index/MainInformation.svelte";
    import Filter from "$lib/components/index/Filter.svelte";

    // Stores
    import { filteredThreads } from "$lib/stores/filteredThreads.js";
    import { get } from "svelte/store";

    // Get data
    export let data;

    let threads = get(filteredThreads).length
        ? get(filteredThreads)
        : data.threads.threads;
    let members = data.members;
    let tags = data.tags.available_tags;

    filteredThreads.set(threads);
</script>

<section>
    <Filter {tags} title="Filters" />

    <Questions id="content" {threads} {members} {tags} />

    <AdditionalInformation />
</section>

<style>
    section {
        display: grid;
        grid-template-columns: 0.5fr 1fr;
        /* grid-gap: 3.1rem; */
        /* padding: 0 4.7rem; */
        /* grid-template-areas: */
        /* "Sidebar Header Header" */
        /* "Sidebar Threads AdditionalInfo"; */
        /* } */
    }
</style>
