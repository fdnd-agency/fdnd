import { writable } from 'svelte/store'

export const filters = writable({
    search: "",
    checkboxes: [],
    sortBy: "date",
    pagination: [],
});