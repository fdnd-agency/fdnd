import { gql } from '$lib/graphql';
import { allProjects } from '$lib/graphql/projects';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ fetch }) => {
	const req = await fetch(import.meta.env.VITE_HYGRAPH_URL, { ...gql(allProjects) });
	const data = await req.json();


	return { ...data.data };
};
