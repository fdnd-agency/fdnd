<script>
	import Hero from "$lib/components/index/Hero.svelte";
	import IntroBar from "$lib/components/index/IntroBar.svelte";
	import GeneralInformation from "$lib/components/index/GeneralInformation.svelte";
	import Questions from "$lib/components/Questions.svelte";
	import AdditionalInformation from "$lib/components/index/AdditionalInformation.svelte";
	import { filteredThreads } from "$lib/stores/searchThreads.js";
	import { get } from "svelte/store";
	export let data;

	let threads = get(filteredThreads).length
		? get(filteredThreads)
		: data.threads.threads;

	let members = data.members;

	filteredThreads.set(threads);
</script>

<Hero />
<IntroBar />

<section>
	<!-- General information -->
	<GeneralInformation
		introText="De plek waar jij al jouw code vragen kan: stellen, terugvinden en anderen
		kan helpen."
		{threads}
		{members}
	/>

	<!-- Questions -->
	<Questions id="content" {threads} {members} title="Alle vragen" />

	<!-- Additional Information (Fillter) & Widget -->
	<AdditionalInformation />
</section>

<style>
	@media (min-width: 60rem) {
		section {
			padding: 0 2rem;
			display: grid;
			grid-template-columns: 2.5fr 1fr;
			grid-template-rows: auto 1fr;
			grid-template-areas:
				"GeneralInfo Questions AdditionalInfo"
				"GeneralInfo Questions AdditionalInfo";
		}
	}

	@media (min-width: 75rem) {
		section {
			padding: 0 5rem;
			grid-template-columns: 0.6fr 1fr 0.6fr;
			grid-gap: 2rem;
		}
	}
</style>
