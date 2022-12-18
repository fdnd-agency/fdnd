<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;
</script>

{#each data.projects as project}
	<a href="/{project.slug}" data-sveltekit-preload-data>
		<img src={project.visual.url} alt="{project.title} logo" />
		<p>{project.title}</p>
	</a>
{/each}

<style>
	a {
		font-weight: 600;
	}

	img {
		width: 15rem;
		aspect-ratio: 1/1;
		object-fit: contain;
		background-color: var(--green);
	}
</style>
