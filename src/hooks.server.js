const DISCORD_API_URL = import.meta.env.VITE_DISCORD_API_URL;
const HOST = import.meta.env.VITE_HOST;

import { redirect } from "@sveltejs/kit";

export async function handle({ event, resolve }) {
    const request = event.request;
    const refreshToken = event.cookies.get('disco_refresh_token')
    const accessToken = event.cookies.get('disco_access_token')

    // if only refresh token is found, then access token has expired. perform a refresh on it.
    if (refreshToken && !accessToken) {
        const discord_request = await fetch(`${HOST}/api/refresh?code=${refreshToken}`);

        const discord_response = await discord_request.json();

        if (discord_response.disco_access_token) {
            console.log('setting discord user via refresh token..')

            const request = await fetch(`${DISCORD_API_URL}/users/@me`, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${discord_response.disco_access_token}`
                }
            });

            //returns a discord user if JWT was valid
            const response = await request.json();

            if (response.id) {
                const user = {
                    id: response.id,
                    username: response.username
                };

                return {
                    user: user,
                }
            }
        }

        return redirect(302, "/");
    }

    if (accessToken) {
        const request = await fetch(`${DISCORD_API_URL}/users/@me`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${accessToken}`
            }
        });

        // returns a discord user if JWT was valid
        const response = await request.json();
        
        if (response.id) {
            const user = {
                id: response.id,
                username: response.username,
                avatar: response.avatar,
            };

            event.locals.user = user
            const rs = await resolve(event)
            return rs
        }
    }

    const defaultResponse = await resolve(event)
    return defaultResponse;
}
