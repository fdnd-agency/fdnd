<script>
	export let title;
</script>

<button type="button">{title}</button>

<style>
	button {
		background-color: var(--element-primary);
		padding: 1.25rem 0;
		width: 100%;
		border-radius: 2rem;
		margin-top: 2rem;
		font-size: 1rem;
		font-weight: bold;
		cursor: pointer;
		transition: background-color 150ms, transform 100ms;
	}

	button:hover {
		background-color: var(--element-primary-action);
	}

	button:active {
		background-color: var(--element-primary-action);
		transform: scale(0.97);
	}

	button:focus {
		background-color: var(--element-primary-action);
	}
</style>
