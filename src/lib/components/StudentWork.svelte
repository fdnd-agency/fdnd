<script lang="ts">
	import { getFullName } from '$lib/utils/getFullName';

	export let title: string;
	export let repo: string;
	export let website: string;
	export let sprint: string | number;
	export let students: any[];
</script>

<article class="rounded purple-on-blue">
	<small class="blue-on-purple">sprint {sprint}</small>
	<h3>{title}</h3>

	<ul>
		<li>{#if students.length < 2}
			<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-user" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
				<path stroke="none" d="M0 0h24v24H0z" fill="none"/>
				<circle cx="12" cy="7" r="4" />
				<path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
			</svg>
			{:else}
			<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-users" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
				<path stroke="none" d="M0 0h24v24H0z" fill="none"/>
				<circle cx="9" cy="7" r="4" />
				<path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
				<path d="M16 3.13a4 4 0 0 1 0 7.75" />
				<path d="M21 21v-2a4 4 0 0 0 -3 -3.85" />
			</svg>
			{/if}</li>
		{#each students as student}
		<li>
			
			{getFullName(student)}
		</li>
		{/each}
	</ul>
	<ul>
		<li>
			<a href={repo} target="_blank" rel="noopener noreferrer">Github Reposity</a>
		</li>
		<li><a href={website} target="_blank" rel="noopener noreferrer">View Live</a></li>
	</ul>
	
	
</article>

<style>
	article {
		padding: 2rem;
		border-radius: 0.5em;
		position: relative;
		margin: 0 -1rem 2rem;
	}
	h3 {
		font-size: 1.25rem;
		display:flex;
		margin-bottom: .5rem;
	}

	small {
		font-size: .8rem;
		white-space: nowrap;
		position:absolute;
		right:0;
		top:0;
		padding:.25rem;
		border-radius:0 .5rem 0 0
	}
	ul {
		margin: 0 0 2rem;
		display:flex;
	}
	ul:last-of-type {
		margin-bottom: 0;
	}
	li {
		list-style: none;
		margin-right: .5rem;
	}
	a {
		color: inherit;
	}


</style>
