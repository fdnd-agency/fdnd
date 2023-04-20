<script>
    import Hero from "$lib/components/index/Hero.svelte";
    import IntroBar from "$lib/components/index/IntroBar.svelte";
    import GeneralInformation from "$lib/components/index/GeneralInformation.svelte";
    import Questions from "$lib/components/Questions.svelte";
    import AdditionalInformation from "$lib/components/index/AdditionalInformation.svelte";

    // Stores
    import { filteredThreads } from "$lib/stores/filteredThreads.js";
    import { get } from "svelte/store";
    import Sidebar from "../lib/components/Sidebar.svelte";

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
    <Sidebar title="FDND Stack" />
</section>

<style>
    section {
        display: grid;
        grid-template-columns: 0.4fr 1fr 0.75fr;
        grid-template-rows: auto 1fr;
        grid-template-areas:
            "Sidebar Header Header"
            "Sidebar Threads AdditionalInfo";
    }
</style>
