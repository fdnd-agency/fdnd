<svelte:head>
	<title>Frontend Design & Development | Agency</title>
</svelte:head>

<header>
	<a href="/">
		<h1>
			<abbr title="Frontend Design &amp; Development">
				<span>FDND</span>
			</abbr> 
			<span>Frontend<br>Design &amp; Development</span>
		</h1>
	</a>
</header>

<main>
	<slot />
</main>

<style>
	main {

	}
	a {
		text-decoration:none;
	}
	h1 {
		display:flex;
		margin-bottom: 2rem;
	}
	h1 > span {
		color: var(--lavender);
		padding: .5rem 1rem 0 .5rem;
		font-size: clamp(1rem, 4vw, 2rem);
		font-size: 1rem;
		line-height: 1;
		text-decoration: none;
		padding-bottom:.5rem;
		vertical-align:baseline
	}
	a:hover h1 > span {
		color:var(--turquoise);
	}

	h1 > abbr > span {
		border: 1px solid var(--turquoise);
		border-radius: var(--rounded);
		box-shadow: calc(-1*var(--shadow))var(--shadow)0 0 var(--turquoise);
		color: var(--turquoise);
		text-transform: lowercase;
		padding: .5rem 1rem;
		font-size: 2rem;
	}

	a:hover h1 > abbr > span {
		color:var(--lavender);
	}
</style>
