<script>
	import { filteredThreads } from "$lib/stores/searchThreads.js";
	import { enhance } from "$app/forms";

	export let placeholder;
	export let threads;

	/**
	 * Filter threads
	 * @constructor
	 * @param {string} searchTerm - search value from input
	 * @param {object} threads - list of all threads (questions)
	 */
	function filterThreads(searchTerm) {
		const filteredThreads = threads.filter((thread) => {
			return thread.name.toLowerCase().includes(searchTerm);
		});

		return filteredThreads;
	}
</script>

<form method="POST" action="?/search" use:enhance>
	<!-- Search input -->
	<img src="/images/search-icon.png" alt="" />
	<input
		type="search"
		on:input={(e) => filteredThreads.set(filterThreads(e.target.value))}
		{placeholder}
		name="search"
	/>

	<!-- Submit button -->
	<button type="submit">Zoek</button>
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
		background-color: var(--element-white);
	}

	input::-webkit-search-cancel-button {
		position: relative;
		right: 4.5rem;
	}

	button {
		position: absolute;
		right: 0;
		border-top-right-radius: 10px;
		border-bottom-right-radius: 10px;
		height: 100%;
		font-size: 1rem;
		font-weight: bold;
		padding: 0.6rem 1.5rem;
		font-size: 0.85rem;
		background-color: var(--element-white);
		color: var(--text-primary);
		border-left: 1px solid var(--element-border);
		transition: background-color 150ms;
		cursor: pointer;
	}

	button:hover {
		background-color: var(--element-primary-action);
		color: var(--text-white);
	}

	button:active {
		background-color: var(--element-primary-action);
		color: var(--text-white);
	}

	button:focus {
		background-color: var(--element-primary-action);
		color: var(--text-white);
	}

	@media (min-width: 60rem) {
		button {
			background-color: var(--element-primary);
			color: var(--text-white);
		}
	}
</style>
