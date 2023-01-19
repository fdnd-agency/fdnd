<script>
	import Filter from "./Filter.svelte";
	import DCWidget from "../DCWidget.svelte";
</script>

<div>
	<Filter title="Filters" />
	<DCWidget />
</div>

<style>
	div {
		margin: 4.5rem 0 0 2rem;
	}

	@media (min-width: 75rem) {
		div {
			margin: 4.5rem 0;
		}
	}
</style>
