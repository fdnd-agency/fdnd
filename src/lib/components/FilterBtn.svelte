<script>
	import { get } from "svelte/store";
	import { filterState } from "$lib/stores/showFilter.js";

	let showFilter = get(filterState);
</script>

<button>Filters</button>

<style>
	button {
		background-color: var(--element-primary);
		border-radius: 0.6rem;
		/* padding: 0.5rem 1rem; */
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
