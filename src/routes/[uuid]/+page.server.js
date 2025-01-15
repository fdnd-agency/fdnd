import fetchJson from "$lib/fetch-json";

export async function load({ params }) {
    const baseUrl = "https://fdnd-agency.directus.app";
    const endpoint = `/items/fdnd_wlw_session`;

    const weLoveWeb_url = `${baseUrl}${endpoint}`;
    const weLoveWeb = await fetchJson(weLoveWeb_url);

    const details = weLoveWeb.data.find((item) => item.uuid === params.uuid);

    if (!details) {
        throw new Error("De detail pagina is niet gevonden, ga terug naar de vorige pagina.");
    }

    return {
        details,
    };
}
