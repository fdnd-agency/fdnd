<script>
	import Filter from "./Filter.svelte";
	import DCWidget from "../DCWidget.svelte";
	export let tags;
</script>

<div>
	<!-- Filter -->
	<Filter {tags} title="Filters" />

	<!-- Discord widget -->
	<DCWidget />
</div>

<style>
	div {
		padding: 4.5rem 0 0 2rem;
	}

	@media (min-width: 75rem) {
		div {
			padding: 4.65rem 0;
		}
	}
</style>
