<script>
	import Hero from "$lib/components/index/Hero.svelte";
	import IntroBar from "$lib/components/index/IntroBar.svelte";
</script>

<Hero />
<IntroBar />

<section>
	<div>General Info</div>
	<div>Questions</div>
	<div>AdditionalInfo</div>
</section>

<style>
	section {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		grid-template-rows: auto 1fr;
		grid-template-areas:
			"GeneralInfo Questions AdditionalInfo"
			"GeneralInfo Questions AdditionalInfo";
	}
</style>
