<script>
	export let title;
	export let url;
</script>

<!-- Primary button -->
<a href={url}>{title}</a>

<style>
	a {
		padding: 0 1rem;
		color: var(--green);
		background-color: var(--blue);
		border: 1px solid var(--green);
		border-radius: 2rem;
	}
</style>
