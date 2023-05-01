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
        /* padding: 1.56rem 4.7rem; */
        padding: 1rem;
        /* align-items: center; */
        border-bottom: 2px solid var(--element-border);
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
        /* width: 2.2rem; */
        /* height: 2.2rem; */
        border-radius: 50%;
        object-fit: cover;
    }
</style>
