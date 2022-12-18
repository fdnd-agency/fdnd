<script lang="ts">
	import { getFullName } from '$lib/utils/getFullName';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<a href="/">Terug</a>
<h1>{data.project.client.title}</h1>
<ul>
	<li>{getFullName(data.project.productOwner)}</li>
	<li>{getFullName(data.project.teamLead)}</li>
	<li>
		Studenten
		<ul>
			{#each data.project.students as student}
				<li>{getFullName(student)}</li>
			{/each}
		</ul>
	</li>
</ul>

<img src={data.project.visual.url} alt="{data.project.client.title} logo" />
