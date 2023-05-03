<script>
    import CommunityWidget from "../CommunityWidget.svelte";
    import Guidelines from "./Guidelines.svelte";
</script>

<div>
    <Guidelines />
    <CommunityWidget />
</div>

<style>
    @media (min-width: 75rem) {
        div {
            margin-top: 5.35rem;
        }
    }
</style>