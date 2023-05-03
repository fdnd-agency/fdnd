<script>
    import {filterState} from "$lib/stores/showFilter.js";

    let showFilter = false;

    function handleFilter() {
        let state = (showFilter = !showFilter);
        $filterState = state;
    }
</script>

<!-- Header -->
<header>
    <h1>FDND Stack</h1>

    <div>
        <img on:click={handleFilter} class="filter-icon" src="/images/filter-icon.png" alt="" />
        <img class="profile-icon" src="/images/profile-icon.jpg" alt="" />
    </div>
</header>

<style>
    header {
        z-index: 999;
        display: flex;
        padding: 1rem;
    }

    h1 {
        color: var(--green);
        font-size: 1.5rem;
    }

    div {
        margin-left: auto;
        display: flex;
        align-items: center;
    }

    img {
        width: 1.75rem;
        height: 1.75rem;
    }

    img:nth-child(2) {
        margin-left: 1rem;
    }

    .profile-icon {
        border-radius: 50%;
        object-fit: cover;
    }

    @media (min-width: 60rem) {
        header {
            padding: 1rem 2rem;
        }

        .filter-icon {
            display: none;
        }
    }

    @media (min-width: 75rem) {
        header {
            padding: 1.56rem 4.7rem;
            align-items: center;
        }

        .profile-icon {
            width: 2.2rem;
            height: 2.2rem;
        }
    }
</style>
