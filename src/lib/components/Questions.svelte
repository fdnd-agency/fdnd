<script>
	import FilterBtn from "./FilterBtn.svelte";
	import CreateQuestionBtn from "./index/CreateQuestionBtn.svelte";
	import SortBtn from "./index/SortBtn.svelte";
	import LayoutSwitch from "./LayoutSwitch.svelte";
	import QuestionCard from "./QuestionCard.svelte";
	import SearchBar from "./SearchBar.svelte";

	import { filteredThreads } from "$lib/stores/searchThreads.js";

	export let threads;
	export let members;

	const memberList = threads.map((thread) =>
		members.find((member) => member.user.id == thread.owner_id)
	);

	export let title;
</script>

<section>
	<!-- Title & button wrapper -->
	<div class="title-btn-wrapper">
		<!-- Title -->
		<h3>{title}</h3>

		<!-- Create question button (mobile) -->
		<CreateQuestionBtn title="Stel je vraag" />
	</div>

	<!-- Searchbar -->
	<SearchBar {threads} placeholder="Vragen zoeken..." />

	<!-- Filter & Sort -->
	<div class="actions-wrapper">
		<SortBtn label="Sorteren op:" />
		<FilterBtn />
		<LayoutSwitch />
	</div>

	<!-- Question card -->
	{#each $filteredThreads as thread}
		<QuestionCard
			authorImg=""
			date={thread.thread_metadata.create_timestamp}
			title={thread.name}
			categories={["soft skills", "user experience"]}
			reactions={thread.message_count}
		/>
	{/each}

	{#if $filteredThreads.length == 0}
		<p>Geen zoekresultaten</p>
	{/if}
</section>

<style>
	section {
		padding: 1rem 1.5rem;
	}

	.title-btn-wrapper {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	h3 {
		font-size: 1.25rem;
	}

	.actions-wrapper {
		display: flex;
		justify-content: space-between;
		margin-top: 1.5rem;
	}

	@media (min-width: 60rem) {
		section {
			padding: 1rem 0;
		}

		h3 {
			font-size: 1.8rem;
		}
	}

	@media (min-width: 75rem) {
	}
</style>
