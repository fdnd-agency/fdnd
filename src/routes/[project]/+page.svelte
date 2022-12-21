<script lang="ts">
	import StudentWork from '$lib/components/StudentWork.svelte';
	import { getFullName } from '$lib/utils/getFullName';
	import type { PageData } from './$types';

	export let data: PageData;

	function isPlural(groupOfPeople: any[]) {
		return groupOfPeople.length > 1 ? 's' : '';
	}
</script>

<section>
	<h2>{data.project.title}</h2>

	<section class="rounded green-on-blue">
		<ul>
			<li><span>Opdrachtgever:</span> <a href="/">{data.project.clients[0].title}</a></li>
			<li>
				<span>Product owner{isPlural(data.project.productOwners)}:</span>  
				{#each data.project.productOwners as productOwner, i}
					<a href="/">{getFullName(productOwner)}</a>
				{/each}
			</li>

			<li>
				<span>Coach:</span>
				{#each data.project.coaches as coach, i}
					<a href="/">{getFullName(coach)}</a>
				{/each}
			</li>

			<li>
				<span>Team lead{isPlural(data.project.teamLeads)}:</span>
				{#each data.project.teamLeads as teamlead}
					<a href="/">{getFullName(teamlead)}</a>
				{/each}
			</li>		
		</ul>


		<h3>Studenten</h3>
		<ul>
			{#each data.project.students as student}
				<li><a href="/">{getFullName(student)}</a></li>
			{/each}
		</ul>
	</section>
</section>

<section id="work">

	<h2>Studentwork</h2>
	
	{#each data.project.studentwork as studentwork}
		<StudentWork
			title={studentwork.title}
			sprint={studentwork.sprint}
			repo={studentwork.repository}
			website={studentwork.website}
			students={studentwork.students}
		/>
	{/each}


</section>


<style>
	h2 {
		margin-bottom: 2rem;
		font-weight: normal;
	}
	ul {
		margin:0 0 2rem;
		
		
	}
	li {
		list-style:none;
		display:flex;
	}
	li > * {
		white-space: nowrap;
		margin-right: .5rem;
	}
	li span {
		width:10rem;
	}

	section {
		grid-column: 1 / auto;
	}

	section h2 {
		margin-left:1rem
	}

	section section {
		padding: 2rem;
		margin: 0 -1rem 2rem;
	}
</style>
