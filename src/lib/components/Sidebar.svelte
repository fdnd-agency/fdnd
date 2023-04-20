<script>
    export let title;

    import SearchBar from "./SearchBar.svelte";
    import SidebarNavMenu from "./SidebarNavMenu.svelte";
    import SidebarNavMenuPersonal from "./SidebarNavMenuPersonal.svelte";
</script>

<section>
    <h1>{title}</h1>
    <SearchBar placeholder="Vragen zoeken..." />
    <SidebarNavMenu />
    <hr />
    <SidebarNavMenuPersonal />
    <hr />
</section>

<style>
    section {
        background-color: var(--element-white);
        grid-area: Sidebar;
        height: 100vh;
        padding: 1.56rem;
    }

    hr {
        margin-top: 2.12rem;
        margin-bottom: 2.12rem;
        border: 1px solid var(--element-border);
    }
</style>