import { redirect } from "@sveltejs/kit";

export async function GET({ url, cookies }) {
    console.log('redirect to / with cleared cookies');

    const disco_access_token = "";
    const disco_refresh_token = "";

    const tokenOptions = {
        path: "/",
        httpOnly: true,
        maxAge: -1         
    }


    cookies.set("disco_access_token", disco_access_token, tokenOptions)
    cookies.set("disco_refresh_token", disco_refresh_token, tokenOptions)

    throw redirect(302, "/");
  }