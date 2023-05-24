import { redirect } from "@sveltejs/kit";

export async function GET({ url, cookies }) {
    let disco_access_token;
    let disco_refresh_token;

    const dataObject = {
        disco_access_token: disco_access_token,
        disco_refresh_token: disco_access_token
    }

    let payload = new URLSearchParams();

    payload.append("disco_access_token", disco_access_token)
    payload.append("disco_refresh_token", disco_refresh_token)

    const request = await fetch("https://discord.com/api/oauth2/token/revoke", {
        method: "POST",
        body: payload,
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
    });

    const tokenOptions = {
        path: "/",
        httpOnly: true,
        maxAge: -1         
    }

    cookies.set("disco_access_token", disco_access_token, tokenOptions)
    cookies.set("disco_refresh_token", disco_refresh_token, tokenOptions)

    throw redirect(302, "/");
  }