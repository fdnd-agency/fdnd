<script>
	let { children } = $props();
    import { Navigation, Footer } from "$lib";
</script>

<Navigation />

<div class="container">
    {@render children()}
</div>

<Footer />

<style>
    .container {
        width: 100%;
        background: var(--grey);
        border-radius: 1.563rem;
        padding: 3.125rem 2.188rem;
    }

    @media screen and (min-width: 768px) {
        .container {
            border-radius: 1.875rem;
            padding: 1rem 3.125rem 1rem;
        }
    }

    @media screen and (min-width: 1024px) {
        .container {
            border-radius: 2.5rem;
            padding: 1rem 6.25rem 2rem;
        }
    }

    @media screen and (min-width: 1440px) {
        .container {
            padding: 1rem 10rem 2rem;
        }
    }
</style>

