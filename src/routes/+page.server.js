const bearerToken = import.meta.env.VITE_BEARER_TOKEN;
const threadsUrl =
	"https://discord.com/api/guilds/1017099203882782750/threads/active";
const membersUrl =
	"https://discord.com/api/guilds/1017099203882782750/members?limit=250";
const tagsUrl = "https://discord.com/api/channels/1027275543755890799";

import { filteredThreads } from "$lib/stores/searchThreads";
import { get } from "svelte/store";

// Form actions
export const actions = {
	search: async ({ request }) => {
		const formData = await request.formData();
		const searchTerm = formData.get("search");

		filteredThreads.set(searchTerm);
	},
};

export const load = async () => {
	// Get all threads
	const reqThreads = await fetch(threadsUrl, {
		method: "GET",
		headers: {
			Authorization: `Bot ${bearerToken}`,
		},
	});

	// Get all members
	const reqMembers = await fetch(membersUrl, {
		method: "GET",
		headers: {
			Authorization: `Bot ${bearerToken}`,
		},
	});

	// Get all messages (descriptions)
	const reqTags = await fetch(tagsUrl, {
		method: "GET",
		headers: {
			Authorization: `Bot ${bearerToken}`,
		},
	});

	// Return json
	const res = await Promise.all([reqThreads, reqMembers, reqTags]);

	const threads = await res[0].json();
	const members = await res[1].json();
	const tags = await res[2].json();

	// Filter threads on the server
	if (filteredThreads) {
		const filtered = threads.threads.filter((thread) => {
			if (thread.name.toLowerCase().includes(get(filteredThreads))) {
				return thread;
			}
		});
		filteredThreads.set(filtered);
	}

	// Return json
	return {
		threads,
		members,
		tags,
	};
};
