<script>
	import Hero from "$lib/components/index/Hero.svelte";
	import IntroBar from "$lib/components/index/IntroBar.svelte";
	import GeneralInformation from "$lib/components/index/GeneralInformation.svelte";
	import Questions from "$lib/components/Questions.svelte";
</script>

<Hero />
<IntroBar />

<section>
	<GeneralInformation
		introText="De plek waar jij al jouw code vragen kan: stellen, terugvinden en anderen
		kan helpen."
	/>
	<Questions title="Alle vragen" />

	<iframe
		title="Discord Widget"
		src="https://discord.com/widget?id=1017099203882782750&theme=dark"
		width="350"
		height="500"
		allowtransparency="true"
		frameborder="0"
		sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
	/>
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
