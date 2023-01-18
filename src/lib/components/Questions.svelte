<script>
	import SearchBar from "./SearchBar.svelte";

	export let title;
</script>

<section>
	<h3>{title}</h3>
	<SearchBar placeholder="Vragen zoeken..." />
</section>

<style>
	section {
		padding: 1rem 1.5rem;
	}

	h3 {
		font-size: 1.25rem;
	}

	@media (min-width: 60rem) {
		h3 {
			font-size: 1.8rem;
		}
	}
</style>
