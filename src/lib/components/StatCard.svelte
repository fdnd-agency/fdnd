<script>
	export let number;
	export let label;
</script>

<div>
	<p>{number}</p>
	<span>{label}</span>
</div>

<style>
	div {
		border: 1px solid var(--element-border-dark);
		width: 100%;
		padding: 15px;
		border-radius: 5px;
	}

	div:nth-child(2) {
		margin-left: 1rem;
	}

	p {
		font-size: 1.1rem;
		font-family: "Montserrat", sans-serif;
		color: var(--text-secondary);
		font-weight: bold;
	}

	span {
		margin-top: 10px;
		text-transform: uppercase;
		font-size: 0.65rem;
		font-family: "Rubik", sans-serif;
		font-weight: bold;
		color: var(--text-secondary);
	}

	@media (min-width: 75rem) {
		p {
			font-size: 1.75rem;
		}
	}
</style>
