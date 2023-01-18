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

	p {
		font-size: 1.75rem;
		font-family: "Montserrat", sans-serif;
		color: var(--text-secondary);
	}

	span {
		margin-top: 10px;
		text-transform: uppercase;
		font-size: 11px;
		font-family: "Rubik", sans-serif;
		font-weight: bold;
		color: var(--text-gray-2);
	}
</style>
