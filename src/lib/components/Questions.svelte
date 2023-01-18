<script>
	import QuestionCard from "./QuestionCard.svelte";
	import SearchBar from "./SearchBar.svelte";

	export let title;
</script>

<section>
	<h3>{title}</h3>
	<SearchBar placeholder="Vragen zoeken..." />

	<QuestionCard
		authorImg=""
		authorName="Boudewijn"
		date="18-01-2023"
		title="Hoe kan ik beter worden in soft UX skills?"
		categories={["soft skills", "user experience"]}
		description="Hoi iedereen op dit forum. Ik ben bezig met het maken van verschillende
		ontwerpen, maar ik Vind het erg moeilijk om user experience toe te passen.
		Is er iemand die hier ervaring mee heeft En mij eventueel zou willen helpen?
		Ik ben actief op dit forum, maar je kunt me eventueel ook Bereiken op
		microsoft teams, discord en een privé bericht."
		reactions="3"
	/>
</section>

<style>
	section {
		padding: 1rem 1.5rem;
	}

	h3 {
		font-size: 1.25rem;
	}

	@media (min-width: 60rem) {
		section {
			padding: 1rem;
		}

		h3 {
			font-size: 1.8rem;
		}
	}
</style>
