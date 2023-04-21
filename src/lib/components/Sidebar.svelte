<script>
    export let title;
    export let threads;

    import SearchBar from "./SearchBar.svelte";
    import SidebarNavMenu from "./SidebarNavMenu.svelte";
    import SidebarNavMenuPersonal from "./SidebarNavMenuPersonal.svelte";
    import Guidelines from "./index/Guidelines.svelte";
</script>

<aside>
    <h1>{title}</h1>
    <SearchBar {threads} placeholder="Vragen zoeken..."  />
    <SidebarNavMenu />
    <hr />
    <SidebarNavMenuPersonal />
    <hr />
    <Guidelines />
</aside>

<style>
    aside {
        background-color: var(--element-white);
        grid-area: Sidebar;
        height: 100%;
        padding: 1.56rem;
        border-right: 2px solid var(--element-border);
        position: fixed;
        width: 25rem;
    }

    hr {
        margin-top: 2.12rem;
        margin-bottom: 2.12rem;
        border: 1px solid var(--element-border);
    }
</style>