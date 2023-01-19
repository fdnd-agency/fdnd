<script>
	import { filteredThreads } from "$lib/stores/searchThreads.js";
	import { loop_guard } from "svelte/internal";
	import { get } from "svelte/store";

	export let placeholder;
	export let threads;

	let searchTerm = "";

	$: searchedThreads = threads.filter((thread) => {
		return thread.name.includes(searchTerm);
	});

	filteredThreads.set(searchedThreads);
</script>

<form action="">
	<img src="/images/search-icon.png" alt="" />
	<input type="search" bind:value={searchTerm} {placeholder} />
	<button>Zoek</button>
</form>

<style>
	form {
		margin-top: 1.5rem;
		display: flex;
		position: relative;
		align-items: center;
	}

	img {
		position: absolute;
		left: 1rem;
	}

	input {
		width: 100%;
		padding: 0.65rem 2.5rem;
		border-radius: 10px;
		border: none;
		box-shadow: rgb(149 157 165 / 20%) 0px 8px 24px;
	}

	button {
		background-color: var(--element-primary);
		position: absolute;
		right: 0;
		border-top-right-radius: 10px;
		border-bottom-right-radius: 10px;
		height: 100%;
		font-size: 1rem;
		font-weight: bold;
		padding: 0.6rem 1.5rem;
	}
</style>
