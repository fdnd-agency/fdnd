<script>
	export let title;
	export let url;
</script>

<!-- Primary button -->
<a href={url}>{title}</a>

<style>
	a {
		color: var(--green);
		background-color: var(--blue);
		border: 1px solid var(--green);
		border-radius: 0.5rem;
		padding: 0.6rem 1.2rem;
	}

	a:hover {
		background-color: var(--green);
		color: var(--blue);
	}
</style>
