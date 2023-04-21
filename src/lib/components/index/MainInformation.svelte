<script>
    import Questions from "../Questions.svelte";

    export let threads;
    export let members;
    export let tags;
</script>

<main>
    <Questions {threads} {members} {tags} />
</main>

<style>
    main {
        margin-left: 25rem;
        display: grid;
        grid-template-columns: 1fr 0.5fr;
    }
</style>