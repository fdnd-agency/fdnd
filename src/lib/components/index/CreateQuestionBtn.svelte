<script>
	export let title;
</script>

<button>{title}</button>

<style>
	button {
		background-color: var(--element-primary);
		text-transform: none;
		padding: 0.6rem 1.6rem;
		border-radius: 2rem;
		box-shadow: rgb(149 157 165 / 20%) 0px 8px 24px;
		font-size: 0.95rem;
		font-weight: 500;
	}

	@media (min-width: 75rem) {
		button {
			display: none;
		}
	}
</style>
