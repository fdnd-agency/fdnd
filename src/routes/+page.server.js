import fetchJson from "$lib/fetch-json";

export async function load() {
    const baseUrl = "https://fdnd-agency.directus.app";
    const endpoint = "/items/fdnd_wlw_session";

    const weLoveWeb_url = `${baseUrl}${endpoint}`;
    const response = await fetchJson(weLoveWeb_url);

    if (!response || !response.data) {
        throw new Error("Failed to fetch data");
    }

    return {
        weLoveWebList: response.data,
    };
}
