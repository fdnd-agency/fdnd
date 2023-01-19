<script>
	export let authorName;
	export let date;
	export let title;
	export let description;
	export let reactions;
	export let categories;
</script>

<article>
	<p class="publish-information"><span>{authorName}</span>{date}</p>
	<h4>{title}</h4>
	<ul>
		{#each categories as category}
			<li>
				{category}
			</li>
		{/each}
	</ul>
	<p class="description">
		{description}
	</p>
	<hr />
	<p class="reactions">
		<img src="/images/react-icon.jpg" alt="" />
		<span>{reactions}</span> reacties
	</p>
</article>

<style>
	article {
		margin-top: 2rem;
		background-color: var(--element-white);
		padding: 1rem 1.5rem;
		border-radius: 0.6rem;
		box-shadow: rgb(149 157 165 / 20%) 0px 8px 24px;
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
		font-size: 1.5rem;
	}

	ul {
		display: flex;
		margin-top: 1rem;
	}

	li {
		text-transform: uppercase;
		font-size: 0.8rem;
		color: var(--text-secondary);
		font-family: "Rubik", sans-serif;
		font-weight: 600;
		border: 1px solid var(--element-border);
		padding: 0.3rem 0.9rem;
		border-radius: 3rem;
		margin-right: 0.3rem;
	}

	.description {
		color: var(--text-gray-4);
		margin-top: 1rem;
		font-size: 0.9rem;
		font-weight: 400;
		line-height: 1.25rem;
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
</style>
