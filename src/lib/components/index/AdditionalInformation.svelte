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
            margin-top: 4.9rem;
        }
    }
</style>