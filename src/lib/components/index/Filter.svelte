<script>
	import RangeSlider from "../RangeSlider.svelte";
	import Checkbox from "../Checkbox.svelte";
	import { filterState } from "$lib/stores/showFilter.js";

	export let tags;
	export let title;
</script>

<!-- Filter wrapper -->
<div class="filter-wrapper" class:visible={$filterState == true}>
	<!-- Filter title -->
	<h5>{title}</h5>
	<p>Aantal reacties</p>

	<!-- Rangeslider -->
	<div class="rangeslider-wrapper">
		<p>0</p>
		<RangeSlider min="0" max="500" value="0" />
		<p>1000</p>
	</div>

	<!-- Categories checkboxes -->
	<div class="categories-wrapper">
		<p>Categorieën</p>

		<!-- Loop over checkboxes -->
		{#each tags as tag}
			<Checkbox
				id={tag.name}
				name={tag.name}
				emoji={tag.emoji_name}
				value={tag.name}
			/>
		{/each}
	</div>
</div>

<style>
	.filter-wrapper {
		background-color: var(--element-white);
		padding: 1.25rem 1.6rem;
		border-radius: 0.6rem;
		box-shadow: rgb(149 157 165 / 20%) 0px 8px 24px;
		position: fixed;
		right: 0;
		bottom: 1rem;
		transform: translateX(100%);
		transition: transform 200ms;
	}

	h5 {
		font-size: 1.25rem;
	}

	p {
		margin-top: 1.25rem;
		font-family: "Montserrat", sans-serif;
		margin-bottom: 0.6rem;
		font-size: 0.85rem;
	}

	.rangeslider-wrapper {
		display: flex;
		align-items: center;
	}

	.rangeslider-wrapper p {
		margin: 0;
		font-family: "Rubik", sans-serif;
		color: var(--element-primary);
		font-weight: 500;
	}

	.categories-wrapper {
		display: flex;
		flex-direction: column;
	}

	@media (min-width: 60rem) {
		.filter-wrapper {
			position: relative;
			transform: none;
			transition: none;
			margin-bottom: 1.5rem;
			bottom: 0;
		}
	}

	.visible {
		transform: translateX(0);
		right: 0.5rem;
	}
</style>
