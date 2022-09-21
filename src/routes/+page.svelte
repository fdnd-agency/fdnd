<script lang="ts">
  import Dropdown from '$lib/components/Dropdown.svelte'
  import Hero from '$lib/components/Hero.svelte'
  import Introduction from '$lib/components/Introduction.svelte'
  import SquadpageSection from '$lib/components/SquadpageSection.svelte'
  import SquadpageCard from '$lib/components/SquadpageCard.svelte'
  import type { PageData } from './$types'

  export let data: PageData
  console.log(data)
</script>

<Hero pageTitle="Your Tribe For Life" />
<div>
  <Introduction
    introductionTitle="Your Tribe for life..."
    introduction="Je hebt al een basis social network voor jouw squad. Breid dit social network uit naar een platform waarop de tribe members elkaar kunnen vinden en ondersteunen. In ieder geval gedurende het begin van jullie carriere als frontend designer & developer.
De focus ligt op team building, samenwerken en hoe je frameworks inzet om een gezamenlijk doel te bereiken én in contact te blijven."
  />
  <Dropdown items={data.squads} />
</div>
/>
{#each data.squads as squad}
  <SquadpageSection squad={squad.name} squadTitle={squad.title}>
    {#each squad.squadpages as squadpage}
      <SquadpageCard
        squadTitle={squad.name}
        sprintTitle={squadpage.sprint}
        squadpageUrl={squadpage.squadpageurl.url}
      />
    {/each}
  </SquadpageSection>
{/each}

<style>
  div {
    display: flex;
    justify-content: space-between;
  }

  @media (max-width: 35rem) {
    div {
      flex-direction: column;
    }
  }
</style>
