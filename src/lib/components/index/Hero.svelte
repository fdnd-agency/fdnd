<section />

<style>
	section {
		background: url("/images/hero-bg-fdnd.avif");
		background-size: cover;
		height: 15rem;
		padding: 1.5rem;
		display: flex;
		justify-content: center;
		flex-direction: column;
		position: relative;
	}

	section::before {
		content: "";
		display: block;
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-image: linear-gradient(
			to bottom,
			rgba(0, 0, 0, 0.5),
			transparent
		);
	}

	h1 {
		z-index: 1;
		margin-bottom: 0.3rem;
		font-size: 2.1rem;
	}

	p {
		color: #fff;
		z-index: 1;
		font-family: "Rubik", sans-serif;
		font-weight: normal;
		font-size: 0.9rem;
	}

	@media (min-width: 60rem) {
		section {
			height: 20rem;
			padding: 0 2rem;
		}

		h1 {
			margin-bottom: 0.6rem;
			font-size: 3rem;
		}

		p {
			font-size: 1.1rem;
		}
	}

	@media (min-width: 75rem) {
		section {
			height: 25rem;
            background-position: 0 40%;
			padding: 0 5rem;
		}
	}
</style>
