import {get} from "svelte/store";

const bearerToken = import.meta.env.VITE_BEARER_TOKEN;
// use URL API?
const threadsUrl =
    "https://discord.com/api/guilds/1017099203882782750/threads/active";
const membersUrl =
    "https://discord.com/api/guilds/1017099203882782750/members?limit=250";
const tagsUrl = "https://discord.com/api/channels/1027275543755890799";

// Stores
import {filteredThreads} from "$lib/stores/filteredThreads";
import {filters} from "$lib/stores/filters";

// Form actions
export const actions = {

    // Search bar handling
    search: async ({request}) => {
        const formData = await request.formData();
        const searchTerm = formData.get("search");

        // Update store with search term
        filters.update((values) => {
            return {
                ...values,
                search: searchTerm,
            }
        })
    },

    // Checkbox filter handling
    checkboxFilter: async ({request}) => {
        const formData = await request.formData();
        const checkboxesValue = formData.getAll("checkbox");

        //  Update store value with selected checkboxes
        filters.update((values) => {
            return {
                ...values,
                checkboxes: checkboxesValue,
            };
        });
    },
};

export const load = async ({locals}) => {

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

    // Get values from filter options
    let filterValues = get(filters);

    const searchTermFiltered = filterValues.search
        ? threads.threads.filter((thread) => {
            return thread.name
                .toLowerCase()
                .includes(filterValues.search.toLowerCase());
        })
        : threads.threads;

    const checkBoxesFiltered =
        filterValues.checkboxes.length === 0
            ? searchTermFiltered
            : searchTermFiltered.filter((thread) => {
                const x = filterValues.checkboxes
                    .map((checkbox) => {
                        return thread.applied_tags.includes(checkbox);
                    })
                    .every(Boolean);
                 x;
            });

    // Set filtered threads store
    filteredThreads.set(checkBoxesFiltered);

    // Return JSON
    return {
        threads,
        members,
        tags,
        user: locals.user
    };
};
