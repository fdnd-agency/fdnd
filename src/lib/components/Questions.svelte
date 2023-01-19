<script>
	import LayoutSwitch from "./index/LayoutSwitch.svelte";
	import SortBtn from "./index/SortBtn.svelte";
	import QuestionCard from "./QuestionCard.svelte";
	import SearchBar from "./SearchBar.svelte";
	import FilterBtn from "./FilterBtn.svelte";

	import { get } from "svelte/store";
	import { filteredThreads } from "$lib/stores/searchThreads.js";

	export let threads;
	export let title;
</script>

<section>
	<!-- Title -->
	<h3>{title}</h3>

	<!-- Searchbar -->
	<SearchBar {threads} placeholder="Vragen zoeken..." />

	<!-- Filter & Sort -->
	<div class="actions-wrapper">
		<SortBtn label="Sorteren op:" />
		<FilterBtn />
		<LayoutSwitch />
	</div>

	<!-- Questions -->
	{#each threads as thread}
		<QuestionCard
			authorImg=""
			authorName="Boudewijn"
			date={thread.thread_metadata.create_timestamp}
			title={thread.name}
			categories={["soft skills", "user experience"]}
			reactions={thread.message_count}
		/>
	{/each}
</section>

<style>
	section {
		padding: 1rem 1.5rem;
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
			padding: 1rem;
		}

		h3 {
			font-size: 1.8rem;
		}
	}
</style>
