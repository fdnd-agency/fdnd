<script>
	export let authorName;
	export let date;
	export let title;
	export let reactions;
	export let tags;

	const formattedDate = new Date(date).toLocaleDateString();
</script>

<a href="/">
	<article>
		<!-- Publication information -->
		<p class="publish-information"><span>{authorName}</span>{formattedDate}</p>

		<!-- Question title -->
		<h4>{title}</h4>

		<!-- Question categories -->
		<div>
			<ul>
				{#each tags as tag}
					<li>
						{`${tag.emoji} ${tag.name}`}
					</li>
				{/each}
			</ul>
		</div>

		<hr />

		<!-- Question reactions -->
		<p class="reactions">
			<img src="/images/react-icon.jpg" alt="" />
			<span
				>{reactions}
				<p>reacties</p>
			</span>
		</p>
	</article>
</a>

<style>
	a {
		color: var(--text-primary);
	}

	article {
		margin-top: 1rem;
		background-color: var(--element-white);
		padding: 1rem 1.5rem;
		border-radius: 0.6rem;
		box-shadow: rgb(149 157 165 / 20%) 0px 8px 24px;
		transition: transform 150ms;
	}

	article:hover {
		transform: translateY(-2px);
	}

	.publish-information {
		color: var(--text-gray);
		font-size: 0.8rem;
		font-weight: 600;
		display: flex;
	}

	.publish-information span {
		color: var(--element-primary);
		display: flex;
		align-items: center;
	}

	.publish-information span::after {
		content: "";
		display: inline-block;
		width: 0.3rem;
		height: 0.3rem;
		background-color: var(--text-gray);
		border-radius: 50%;
		margin: 0 5px;
	}

	h4 {
		margin-top: 1rem;
		font-size: 1.35rem;
	}

	div {
		scroll-snap-type: x mandatory;
		overflow: scroll;
	}

	ul {
		display: flex;
		margin-top: 1rem;
		flex-wrap: wrap;
	}

	li {
		text-transform: uppercase;
		font-size: 0.75rem;
		color: var(--text-secondary);
		font-family: "Rubik", sans-serif;
		font-weight: 600;
		border: 1px solid var(--element-border);
		padding: 0.3rem 0.9rem;
		border-radius: 3rem;
		margin-right: 0.3rem;
	}

	hr {
		border: 1px solid var(--element-border);
		margin: 1rem 0;
	}

	.reactions {
		font-size: 0.9rem;
		display: flex;
		align-items: center;
	}

	.reactions img {
		width: 0.85rem;
		height: auto;
	}

	.reactions span {
		color: var(--element-primary);
		font-weight: 600;
		margin-left: 0.3rem;
	}

	.reactions p {
		color: var(--text-gray-4);
		display: inline;
		font-weight: medium;
	}

	@media (min-width: 75rem) {
		h4 {
			font-size: 1.5rem;
		}

		li {
			font-size: 0.8rem;
		}
	}
</style>
