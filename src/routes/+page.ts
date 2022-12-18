import { gql } from '$lib/graphql';
import { allProjects } from '$lib/graphql/projects';
import type { PageLoad } from './$types';
import { PUBLIC_HYGRAPH_URL } from '$env/static/public';

export const load: PageLoad = async ({ fetch }) => {
	const req = await fetch(PUBLIC_HYGRAPH_URL, { ...gql(allProjects) });
	const data = await req.json();

	return { ...data.data };
};
