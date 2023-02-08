<script>
	import { page } from "$app/stores";

	let y = 0;
</script>

<svelte:window bind:scrollY={y} />

<!-- Header -->
<header class:scrolled={y >= 1}>
	<!--Logo -->
	<p class:large={y >= 1}>FDND Stack</p>

	<!-- Navigation menu -->
	<nav>
		<ul>
			<li>
				<a href="/" class:active={$page.url.pathname === "/"}>Home</a>
			</li>
			<li>
				<a href="/about">Over stack</a>
			</li>
			<img src="/images/profile-icon.jpg" alt="" />
		</ul>
	</nav>
</header>

<style>
	header {
		position: fixed;
		width: 100%;
		padding: 1.5rem;
		z-index: 999;
		color: var(--text-white);
		display: flex;
		align-items: center;
		transition: background-color 200ms;
	}

	.scrolled {
		-webkit-backdrop-filter: blur(8px);
		backdrop-filter: blur(8px);
		background-color: rgba(0, 0, 0, 0.35);
	}

	p {
		font-family: "Montserrat", sans-serif;
		font-size: 0.9rem;
		transition: font-size 150ms;
	}

	p.large {
		font-size: 1.1rem;
	}

	nav {
		margin-left: auto;
	}

	ul {
		display: flex;
		font-family: "Inter", sans-serif;
	}

	li {
		margin-right: 1rem;
		position: relative;
		display: none;
	}

	li:nth-child(2) a::before {
		content: "";
		display: block;
		width: 1px;
		height: 25px;
		background-color: var(--element-white);
		position: absolute;
		right: -15px;
	}

	a {
		color: var(--text-white);
		opacity: 0.5;
		font-size: 0.9rem;
	}

	a.active {
		opacity: 1;
	}
	img {
		width: 2rem;
		height: 2rem;
		object-fit: cover;
		border-radius: 50%;
		margin: -3px;
	}

	@media (min-width: 60rem) {
		header {
			padding: 1.5rem 2rem;
		}

		p {
			font-size: 1.1rem;
		}

		p.large {
			font-size: 1.35rem;
		}

		nav {
			display: block;
		}

		li {
			display: block;
		}

		img {
			margin: -3px 15px;
		}
	}

	@media (min-width: 75rem) {
		header {
			padding: 1.5rem 5rem;
		}
	}
</style>
