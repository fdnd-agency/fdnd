<script lang="ts">
	import { getFullName } from '$lib/utils/getFullName';

	export let title: string;
	export let repo: string;
	export let website: string;
	export let sprint: string | number;
	export let students: any[];
</script>

<section>
	<h4>{title}</h4>
	<ul>
		<li>
			<a href={repo} target="_blank" rel="noopener noreferrer">Github Reposity</a>
		</li>
		<li><a href={website} target="_blank" rel="noopener noreferrer">View Live</a></li>
	</ul>
	<p>Sprint: {sprint}</p>
	<h5>Made by:</h5>
	<ul>
		{#each students as student}
			<li>{getFullName(student)}</li>
		{/each}
	</ul>
</section>

<style>
	section {
		background-color: var(--green);
		color: var(--blue);
		padding: 0.75rem;
		border-radius: 0.5em;
	}

	a {
		color: inherit;
	}

	li > * {
		display: block;
	}
</style>
