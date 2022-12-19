<script lang="ts">
	import StudentWork from '$lib/components/StudentWork.svelte';
	import { getFullName } from '$lib/utils/getFullName';
	import type { PageData } from './$types';

	export let data: PageData;

	function isPlural(groupOfPeople: any[]) {
		return groupOfPeople.length > 1 ? 's' : '';
	}
</script>

<a href="/">Terug</a>

<img src={data.project.visual.url} alt="{data.project.clients[0].title} logo" />

<h1>{data.project.clients[0].title}</h1>

<h2>Informatie</h2>

<h3>Product owner{isPlural(data.project.productOwners)}</h3>
<ul>
	{#each data.project.productOwners as productOwner}
		<li>{getFullName(productOwner)}</li>
	{/each}
</ul>

<h3>Team lead{isPlural(data.project.teamLeads)}</h3>
<ul>
	{#each data.project.teamLeads as teamlead}
		<li>{getFullName(teamlead)}</li>
	{/each}
</ul>

<h3>Student{isPlural(data.project.students)}</h3>
<ul>
	{#each data.project.students as student}
		<li>{getFullName(student)}</li>
	{/each}
</ul>

<h2>Studentwork</h2>
<div>
	{#each data.project.studentwork as studentwork}
		<StudentWork
			title={studentwork.title}
			sprint={studentwork.sprint}
			repo={studentwork.repository}
			website={studentwork.website}
			students={studentwork.students}
		/>
	{/each}
</div>

<style>
	div {
		display: flex;
		flex-direction: row;
	}
	img {
		display: block;
		width: 15rem;
		margin: 1rem 0;
	}
</style>
