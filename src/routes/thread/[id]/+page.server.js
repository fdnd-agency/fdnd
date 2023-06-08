const threadDataUrl = "https://discord.com/api/channels/";
const membersUrl =
    "https://discord.com/api/guilds/1017099203882782750/members?limit=250";

const bearerToken = import.meta.env.VITE_BEARER_TOKEN;


export const load = async ({ params }) => {
    const id = params.id;

    // Get thread info
    const reqThreadInfo = await fetch(threadDataUrl + id, {
        method: "GET",
        headers: {
            Authorization: `Bot ${bearerToken}`
        }
    });

    // Get all members
    const reqMembers = await fetch(membersUrl, {
        method: "GET",
        headers: {
            Authorization: `Bot ${bearerToken}`,
        },
    });

    // Get thread data
    const reqThreadData = await fetch(threadDataUrl + id + ' /messages', {
        method: "GET",
        headers: {
            Authorization: `Bot ${bearerToken}`,
        }
    });


    const res = await Promise.all([reqThreadInfo, reqMembers, reqThreadData]);

    const threadInfo = await res[0].json();
    const members = await res[1].json();
    const threadDataReponse = await res[2].json();
    const threadData = threadDataReponse.reverse();

    return {
        threadInfo,
        members,
        threadData
    }

}