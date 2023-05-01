<script>
    import CommunityWidget from "../CommunityWidget.svelte";
    import Questions from "../Questions.svelte";
    import Filter from "./Filter.svelte";

    export let threads;
    export let members;
    export let tags;
</script>

<main>
    <Filter {tags} title="Filter op" />
</main>

<style>
    main {
        /* margin-left: 25rem; */
        display: grid;
        grid-template-columns: 0.5fr 1fr 0.5fr;
        padding: 0 4.7rem;
        /* padding: 3rem 4.7rem; */
        /* grid-template-areas: "filters threads additionalInfo"; */
    }
</style>