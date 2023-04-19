<script>
	import ButtonPrimary from "../ButtonPrimary.svelte";
	import StatCard from "../StatCard.svelte";
	import Guidelines from "./Guidelines.svelte";

	export let introText;
	export let threads;
	export let members;

	let countThread = threads.length;
	let countMembers = members.length;
</script>

<aside>
	<!-- General info wrapper -->
	<div class="general-info-wrapper">
		<!-- Introduction text -->
		<p>
			{introText}
		</p>

		<!-- Create question button -->
		<ButtonPrimary title="Vraag toevoegen" />

		<!-- Channel stats -->
		<div class="stat-cards-wrapper">
			<StatCard number={countThread} label="open vragen" />
			<StatCard number={countMembers} label="aantal leden" />
		</div>

		<!-- Channel guidelines -->
		<Guidelines />
	</div>
</aside>

<style>
	.general-info-wrapper {
		padding: 1rem 1.5rem;
	}

	p {
		font-weight: 500;
		color: var(--text-secondary);
		font-size: 0.8rem;
	}

	.stat-cards-wrapper {
		margin-top: 1rem;
		display: flex;
		justify-content: space-between;
	}


	@media (min-width: 60rem) {
		aside {
			display: none;
		}
	}

	@media (min-width: 75rem) {
		aside {
			display: block;
			padding: 4.65rem 0;
		}

		.general-info-wrapper {
			padding: 0;
		}

		p {
			font-size: 1rem;
		}

		.stat-cards-wrapper {
			margin-top: 2rem;
		}
	}
</style>
