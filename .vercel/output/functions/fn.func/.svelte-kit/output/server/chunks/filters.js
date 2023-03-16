import { w as writable } from "./index.js";
const filteredThreads = writable([]);
const filters = writable({
  search: "",
  checkboxes: [],
  sortBy: "date",
  pagination: []
});
export {
  filters as a,
  filteredThreads as f
};
