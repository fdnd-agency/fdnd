<script>
	import { filterState } from "$lib/stores/showFilter.js";

	let showFilter = false;

	/**
	 * Toggle the filter state
	 * @constructor
	 */
	function handleFilter() {
		let state = (showFilter = !showFilter);
		$filterState = state;
	}
</script>

<picture>
	<img
		on:click={handleFilter}
		class="filter-icon"
		src="/images/filter-icon.png"
		alt="Open/sluit filters"
	/>
</picture>

<style>
	picture {
		width: 2.25rem;
		height: auto;
	}

	picture img {
		width: inherit;
		height: inherit;
	}

	@media (min-width: 60rem) {
		img {
			display: none;
		}
	}
</style>
