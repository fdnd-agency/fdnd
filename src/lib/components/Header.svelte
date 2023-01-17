<script>
	import { page } from "$app/stores";
</script>

<header>
	<p>FDND Stack</p>

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
	}

	p {
		font-family: "Montserrat", sans-serif;
		font-size: 0.9rem;
	}

	nav {
		margin-left: auto;
		display: none;
	}

	ul {
		display: flex;
		font-family: "Inter", sans-serif;
	}

	li {
		margin-right: 1rem;
		position: relative;
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
		margin: -3px 15px;
	}

	@media (min-width: 60rem) {
		header {
			padding: 1.5rem 8rem;
		}

		p {
			font-size: 1.1rem;
		}

		nav {
			display: block;
		}
	}
</style>
