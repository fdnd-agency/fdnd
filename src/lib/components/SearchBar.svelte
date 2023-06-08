<script>
    import {enhance} from "$app/forms";
    import {filteredThreads} from "$lib/stores/filteredThreads";

    // Get data
    export let placeholder;
    export let threads;

    /**
     * Filter threads
     * @constructor
     * @param {string} searchTerm - search value from input
     * @param {object} threads - list of all threads (questions)
     */
    function filterThreads(searchTerm) {
        const filteredThreads = threads.filter((thread) => {
            return thread.name.toLowerCase().includes(searchTerm);
        });

        return filteredThreads;
    }
</script>

<form method="POST" action="?/search" use:enhance>

    <!-- Search input -->
    <img src="/images/search-icon.png" alt=""/>
    <input
            type="search"
            on:input={(e) => filteredThreads.set(filterThreads(e.target.value))}
            {placeholder}
            name="search"
    />

    <!-- Submit button -->
    <noscript>
        <button type="submit">Zoek</button>
    </noscript>
</form>

<style>
    form {
        display: flex;
        position: relative;
        align-items: center;
    }

    img {
        position: absolute;
        left: 1rem;
    }

    input {
        flex-grow: 1;
        padding: 0.65rem 2.5rem;
        border-radius: var(--border-round);
        border: 1px solid var(--green);
        color: var(--green);
        background-color: transparent;
    }

    input::placeholder {
        color: var(--green);
    }

    @media (min-width: 40rem) {
        form {
            margin-bottom: 1rem;
        }
    }
</style>
