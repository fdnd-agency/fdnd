<script>
	import Hero from "$lib/components/index/Hero.svelte";
	import IntroBar from "$lib/components/index/IntroBar.svelte";
	import GeneralInformation from "$lib/components/index/GeneralInformation.svelte";
	import Questions from "$lib/components/Questions.svelte";
	import Filter from "$lib/components/index/Filter.svelte";

	export let data;

	let threads = data.threads.threads;
</script>

<Hero />
<IntroBar />

<section>
	<!-- General information -->
	<GeneralInformation
		introText="De plek waar jij al jouw code vragen kan: stellen, terugvinden en anderen
		kan helpen."
		{threads}
	/>

	<!-- Questions -->
	<Questions {threads} title="Alle vragen" />
</section>

<style>
	iframe {
		display: none;
	}

	@media (min-width: 60rem) {
		section {
			padding: 0 8rem;
			display: grid;
			grid-template-columns: 0.6fr 1fr 0.6fr;
			grid-template-rows: auto 1fr;
			grid-gap: 2rem;
			grid-template-areas:
				"GeneralInfo Questions AdditionalInfo"
				"GeneralInfo Questions AdditionalInfo";
		}

		iframe {
			display: block;
		}
	}
</style>
