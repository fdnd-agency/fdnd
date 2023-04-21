<script>
    import Questions from "../Questions.svelte";
    import Filter from "./Filter.svelte";

    export let threads;
    export let members;
    export let tags;
</script>

<main>
    <Questions {threads} {members} {tags} />
    <Filter {tags} title="Filter op" />
</main>

<style>
    main {
        margin-left: 25rem;
        display: grid;
        grid-template-columns: 1fr 0.45fr;
        padding: 3rem 4.7rem;
        grid-gap: 4.7rem;
    }
</style>