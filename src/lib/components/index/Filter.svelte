<script>
	import RangeSlider from "../RangeSlider.svelte";
	import Checkbox from "../Checkbox.svelte";

	export let title;

	let showFilter = false;

	function handleFilter() {
		showFilter = !showFilter;
	}
</script>

<div class="filter-wrapper">
	<!-- Rangeslider -->
	<h5>{title}</h5>
	<p>Aantal reacties</p>

	<div class="rangeslider-wrapper">
		<p>0</p>
		<RangeSlider min="0" max="500" value="0" />
		<p>1000</p>
	</div>

	<!-- Categories checkboxes -->
	<div class="categories-wrapper">
		<p>Categorieën</p>
		<Checkbox id="html" name="HTML" value="html" />
		<Checkbox id="css" name="CSS" value="css" />
		<Checkbox id="js" name="JavaScript" value="js" />
		<Checkbox id="git" name="Git" value="git" />
		<Checkbox id="feedback" name="Feedback" value="feedback" />
	</div>
</div>

<style>
	.filter-wrapper {
		background-color: var(--element-white);
		padding: 1.25rem 1.6rem;
		border-radius: 0.6rem;
		box-shadow: rgb(149 157 165 / 20%) 0px 8px 24px;
		border-top: 2px solid var(--element-primary);
		position: fixed;
		right: 0;
		bottom: 1rem;
		transform: translateX(100%);
		transition: right 200ms;
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
		}
	}
</style>
