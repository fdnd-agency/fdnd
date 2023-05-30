<script>
	export let label;
</script>

<div>
	<!-- Button label -->
	<p>{label}</p>

	<!-- Select options -->
	<select>
		<option value="date">datum</option>
		<option value="alphabetic">a-z</option>
		<option value="reactions">reacties</option>
	</select>
</div>

<style>
	div {
		display: flex;
		align-items: center;
	}

	p {
		color: var(--white);
		font-family: "Inter", sans-serif;
		font-weight: 500;
		display: none;
		font-size: 1rem;
	}

	select {
		text-transform: uppercase;
		font-family: "Rubik", sans-serif;
		color: var(--green);
		font-weight: 500;
		border-radius: 2rem;
		padding: 0.35rem;
		border: 1px solid var(--green);
		font-size: 0.9rem;
		background-color: transparent;
	}

	@media (min-width: 30rem) {
		div {
			margin-bottom: 0;
		}
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
