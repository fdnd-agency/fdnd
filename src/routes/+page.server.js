const bearerToken = import.meta.env.VITE_BEARER_TOKEN;
const threadsUrl =
	"https://discord.com/api/guilds/1017099203882782750/threads/active";
const membersUrl =
	"https://discord.com/api/guilds/1017099203882782750/members?limit=250";

import { filteredThreads } from "$lib/stores/searchThreads";
import { get } from "svelte/store";

export const actions = {
	search: async ({ request }) => {
		const formData = await request.formData();
		const searchTerm = formData.get("search");

		filteredThreads.set(searchTerm);
	},
};

export const load = async () => {
	const reqThreads = await fetch(threadsUrl, {
		method: "GET",
		headers: {
			Authorization: `Bot ${bearerToken}`,
		},
	});
	const reqMembers = await fetch(membersUrl, {
		method: "GET",
		headers: {
			Authorization: `Bot ${bearerToken}`,
		},
	});

	const res = await Promise.all([reqThreads, reqMembers]);

	const threads = await res[0].json();
	const members = await res[1].json();

	if (filteredThreads) {
		const filtered = threads.threads.filter((thread) => {
			if (thread.name.toLowerCase().includes(get(filteredThreads))) {
				return thread;
			}
		});
		filteredThreads.set(filtered);
	}

	return {
		threads,
		members,
	};
};
