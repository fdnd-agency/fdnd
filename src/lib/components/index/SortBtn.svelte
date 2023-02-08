<script>
	export let label;
</script>

<div>
	<!-- Button label -->
	<p>{label}</p>

	<!-- Select options -->
	<select>
		<option value="alphabetic">a-z</option>
		<option value="date">datum</option>
		<option value="reactions">reacties</option>
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
		display: none;
	}

	select {
		text-transform: uppercase;
		font-family: "Rubik", sans-serif;
		color: var(--text-secondary);
		font-weight: 500;
		border-radius: 3rem;
		text-align: center;
		padding: 0.35rem;
		border: 1px solid var(--element-border);
		font-size: 0.9rem;
	}

	@media (min-width: 40rem) {
		p {
			display: block;
			margin-right: 1rem;
		}
	}

	@media (min-width: 60rem) {
		p {
			display: block;
			font-size: 0.85rem;
		}

		select {
			margin-left: 0.5rem;
		}
	}

	@media (min-width: 75rem) {
		p {
			font-size: 0.9rem;
		}
	}
</style>
