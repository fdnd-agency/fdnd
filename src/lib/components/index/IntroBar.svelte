<section>
	<!-- Introbar icon -->
	<p>🚀</p>

	<!-- Introbar title -->
	<h2>
		Welkom!
		<span>Boudewijn</span>
	</h2>
</section>

<style>
	section {
		background-color: var(--element-white);
		padding: 0.75rem 1.5rem;
		display: flex;
		position: relative;
	}

	p {
		background-color: #4272ca;
		font-size: 1.65rem;
		width: 50px;
		height: 50px;
		border-radius: 50%;
		display: flex;
		justify-content: center;
		align-items: center;
		position: absolute;
		top: 0;
		transform: translateY(-50%);
		box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
	}

	h2 {
		font-family: "Inter", sans-serif;
		font-size: 0.85rem;
		color: var(--text-gray-2);
		margin-left: 3.5rem;
	}

	span {
		color: var(--text-primary);
	}

	@media (min-width: 60rem) {
		section {
			padding: 0.75rem 2rem;
		}

		p {
			font-size: 2.25rem;
			width: 65px;
			height: 65px;
		}

		h2 {
			font-size: 1.1rem;
			margin-left: 5rem;
		}
	}

	@media (min-width: 75rem) {
		section {
			padding: 0.75rem 5rem;
		}
	}
</style>
