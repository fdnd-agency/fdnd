<script>
	export let label;
</script>

<div>
	<p>{label}</p>
	<select name="" id="">
		<option value="0">datum</option>
		<option value="1">reacties</option>
	</select>
</div>

<style>
	div {
		display: flex;
		align-items: center;
	}

	p {
		color: var(--text-gray);
		font-family: "Inter", sans-serif;
		font-weight: 500;
	}

	select {
		text-transform: uppercase;
		margin-left: 0.5rem;
		font-family: "Rubik", sans-serif;
		color: var(--text-secondary);
		font-weight: 500;
		border-radius: 3rem;
		text-align: center;
		padding: 0.35rem;
		border: 1px solid var(--element-border);
		font-size: 0.9rem;
	}
</style>
