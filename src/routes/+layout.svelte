<script>
    import "./../styles/global.css";
    import "./../styles/theme.css";

    // Components
    import SkipLink from "$lib/components/SkipLink.svelte";
    import Header from "$lib/components/Header.svelte";
    
    export let data
</script>

<SkipLink />
<Header user={data.user} />

<slot />
