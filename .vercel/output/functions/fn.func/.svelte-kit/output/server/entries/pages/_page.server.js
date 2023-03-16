import { h as get_store_value } from "../../chunks/index2.js";
import { a as filters, f as filteredThreads } from "../../chunks/filters.js";
const bearerToken = "MTA2MTcyODY1NDMwMTg1OTg2MA.GsjPUq._uQa62XgPlctd25BkStduJ1PjvfZD_UGbnZNRQ";
const threadsUrl = "https://discord.com/api/guilds/1017099203882782750/threads/active";
const membersUrl = "https://discord.com/api/guilds/1017099203882782750/members?limit=250";
const tagsUrl = "https://discord.com/api/channels/1027275543755890799";
const actions = {
  // Search bar handling
  search: async ({ request }) => {
    const formData = await request.formData();
    const searchTerm = formData.get("search");
    filters.update((values) => {
      return {
        ...values,
        search: searchTerm
      };
    });
  },
  // Checkbox filter handling
  checkboxFilter: async ({ request }) => {
    const formData = await request.formData();
    const checkboxesValue = formData.getAll("checkbox");
    filters.update((values) => {
      return {
        ...values,
        checkboxes: checkboxesValue
      };
    });
  }
};
const load = async () => {
  const reqThreads = await fetch(threadsUrl, {
    method: "GET",
    headers: {
      Authorization: `Bot ${bearerToken}`
    }
  });
  const reqMembers = await fetch(membersUrl, {
    method: "GET",
    headers: {
      Authorization: `Bot ${bearerToken}`
    }
  });
  const reqTags = await fetch(tagsUrl, {
    method: "GET",
    headers: {
      Authorization: `Bot ${bearerToken}`
    }
  });
  const res = await Promise.all([reqThreads, reqMembers, reqTags]);
  const threads = await res[0].json();
  const members = await res[1].json();
  const tags = await res[2].json();
  let filterValues = get_store_value(filters);
  const searchTermFiltered = filterValues.search ? threads.threads.filter((thread) => {
    return thread.name.toLowerCase().includes(filterValues.search.toLowerCase());
  }) : threads.threads;
  const checkBoxesFiltered = filterValues.checkboxes.length === 0 ? searchTermFiltered : searchTermFiltered.filter((thread) => {
    filterValues.checkboxes.map((checkbox) => {
      return thread.applied_tags.includes(checkbox);
    }).every(Boolean);
  });
  filteredThreads.set(checkBoxesFiltered);
  return {
    threads,
    members,
    tags
  };
};
export {
  actions,
  load
};
