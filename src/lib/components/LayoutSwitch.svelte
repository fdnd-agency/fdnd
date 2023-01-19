<div>
	<p>Weergave:</p>
	<img src="/images/layout-3.png" alt="" />
	<img src="/images/layout-4.png" alt="" />
</div>

<style>
	div {
		background-color: var(--element-white);
		display: flex;
		align-items: center;
		border-radius: 0.6rem;
		padding: 0.35rem;
		border: 1px solid var(--element-border);
		display: none;
	}

	p {
		color: var(--text-gray);
		font-family: "Inter", sans-serif;
		font-weight: 500;
		margin: 0 1rem 0 0.5rem;
	}

	img {
		margin-right: 0.6rem;
	}

	@media (min-width: 60rem) {
		div {
			display: flex;
		}

		p {
			font-size: 0.85rem;
		}
	}

	@media (min-width: 75rem) {
		p {
			font-size: 0.9rem;
		}
	}
</style>
