<script>
    import { enhance } from "$app/forms";

    // Components
    import Checkbox from "../Checkbox.svelte";

    // Stores
    import { filterState } from "$lib/stores/showFilter.js";

    // Get data
    export let tags;
    export let title; 
</script>

<!-- Filter wrapper -->
<div class="filter-wrapper" class:visible={$filterState === true}>

    <!-- Filter title -->
    <h5>{title}</h5>

    <!-- Categories checkboxes -->
    <div class="categories-wrapper">
        <p>Categorie</p>

        <form method="POST" action="?/checkboxFilter" use:enhance>
            {#each tags as tag}
                <Checkbox
                    name="checkbox"
                    value={tag.id}
                    emoji={tag.emoji_name}
                    label={tag.name}
                />
            {/each}

            <noscript>
                <!-- Apply filter button -->
                <button type="submit">Apply filters</button>
            </noscript>
        </form>
    </div>

    <div class="filter-btn-wrapper">
        <button>Toon ... resultaten</button>
    </div>
</div>

<style>
    .filter-wrapper {
        background-color: var(--purple);
        padding: 1.25rem 1.6rem;
        border-top-left-radius: 1rem;
        border-top-right-radius: 1rem;
        position: fixed;
        z-index: 998;
        height: 50%;
        width: 100%;
        transition: transform 200ms;
        bottom: 0;
        transform: translateY(100%);
    }

    h5 {
        font-size: 1.25rem;
    }

    p {
        margin-top: 1.25rem;
        font-family: "Montserrat", sans-serif;
        margin-bottom: 0.6rem;
        font-size: 0.85rem;
    }

    .categories-wrapper {
        display: flex;
        flex-direction: column;
    }

    .visible {
        transform: translateY(0);
        visibility: visible;
        opacity: 1;
    }

    button {
        background-color: var(--blue);
        padding: 0.5rem 0.5rem;
        border-radius: 5px;
        margin-top: 1rem;
        cursor: pointer;
        transition: background-color 150ms;
        color: var(--white);
    }

    button:hover {
        background-color: var(--blue);
    }

    .filter-btn-wrapper {
        display: flex;
    }

    @media (min-width: 30rem) {
        .filter-wrapper {
            width: 100%;
        }
    }

    @media (min-width: 60rem) {
        .filter-wrapper {
            position: relative;
            transform: none;
            border-radius: 0.5rem;
            margin-top: 5.35rem;
            height: auto;
        }

        .filter-btn-wrapper {
            display: none;
        }
    }
</style>
