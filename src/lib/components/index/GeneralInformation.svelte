<script>
	import ButtonPrimary from "../ButtonPrimary.svelte";
	import StatCard from "../StatCard.svelte";
	import Guidelines from "./Guidelines.svelte";

	export let introText;
</script>

<div class="general-info-wrapper">
	<p>
		{introText}
	</p>
	<ButtonPrimary title="Vraag toevoegen" />

	<div class="stat-cards-wrapper">
		<StatCard number="423" label="gestelde vragen" />
		<StatCard number="372" label="reacties" />
	</div>

	<Guidelines />
</div>

<style>
	.general-info-wrapper {
		padding: 3rem 0;
		display: none;
	}

	p {
		font-weight: 500;
		color: var(--text-introduction);
	}

	.stat-cards-wrapper {
		margin-top: 2rem;
		display: flex;
		justify-content: space-between;
	}

	@media (min-width: 60rem) {
		.general-info-wrapper {
			display: block;
		}
	}
</style>
