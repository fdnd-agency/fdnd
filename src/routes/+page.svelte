<script lang="ts">
  import Hero from '$lib/components/Hero.svelte'
  import Introduction from '$lib/components/Introduction.svelte'
  import SquadpageSection from '$lib/components/SquadpageSection.svelte'
  import SquadpageCard from '$lib/components/SquadpageCard.svelte'
  import type { PageData } from './$types'

  export let data: PageData
</script>

<Hero pageTitle="Your Tribe For Life" />
<Introduction
  introductionTitle="Your Tribe for life..."
  introduction="Je hebt al een basis social network voor jouw squad. Breid dit social network uit naar een platform waarop de tribe members elkaar kunnen vinden en ondersteunen. In ieder geval gedurende het begin van jullie carriere als frontend designer & developer.
De focus ligt op team building, samenwerken en hoe je frameworks inzet om een gezamenlijk doel te bereiken én in contact te blijven."
/>
<SquadpageSection year={2022}>
  <SquadpageCard squadTitle="The Founders" sprintTitle="Sprint 1" />
  <SquadpageCard squadTitle="The Founders" sprintTitle="Sprint 1" />
  <SquadpageCard squadTitle="The Founders" sprintTitle="Sprint 1" />
  <SquadpageCard squadTitle="The Founders" sprintTitle="Sprint 1" />
</SquadpageSection>
