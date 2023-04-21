<script>
    import { enhance } from "$app/forms";

    // Components
    import RangeSlider from "../RangeSlider.svelte";
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

    <!-- Custom rangeslider -->
    <p>Aantal reacties</p>
    <div class="rangeslider-wrapper">
        <p>0</p>
        <RangeSlider min="0" max="500" value="0" />
        <p>1000</p>
    </div>
</div>

<style>
    .filter-wrapper {
        background-color: var(--element-white);
        padding: 1.25rem 1.6rem;
        border-radius: 5px;
        box-shadow: rgb(149 157 165 / 20%) 0px 8px 24px;
        display: inline-block;
        align-self: start;
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

    .rangeslider-wrapper {
        display: flex;
        align-items: center;
    }

    .rangeslider-wrapper p {
        margin: 0;
        font-family: "Rubik", sans-serif;
        color: var(--element-primary);
        font-weight: 500;
    }

    .categories-wrapper {
        display: flex;
        flex-direction: column;
    }

    .visible {
        transform: translateX(0);
        right: 0.5rem;
    }

    button {
        background-color: var(--element-primary);
        padding: 0.5rem 0.5rem;
        border-radius: 5px;
        margin-top: 1rem;
        cursor: pointer;
        transition: background-color 150ms;
    }

    button:hover {
        background-color: var(--element-primary-action);
    }
</style>
