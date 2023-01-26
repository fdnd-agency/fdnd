<script>
	import { filterState } from "$lib/stores/showFilter.js";
	import { get } from "svelte/store";

	$: showFilter = "false";

	function toggleFilter() {
		showFilter = !showFilter;
		filterState.set(showFilter);
	}
</script>

<button on:click={toggleFilter}>Filters</button>

<style>
	button {
		background-color: var(--element-primary);
		border-radius: 0.6rem;
		padding: 0.4rem 1rem;
		font-size: 0.9rem;
		font-weight: 500;
	}

	@media (min-width: 60rem) {
		button {
			display: none;
		}
	}
</style>
