const DISCORD_CLIENT_ID = import.meta.env.VITE_DISCORD_CLIENT_ID;
const DISCORD_CLIENT_SECRET = import.meta.env.VITE_DISCORD_CLIENT_SECRET;
const DISCORD_REDIRECT_URI = import.meta.env.VITE_DISCORD_REDIRECT_URI;

import { redirect } from '@sveltejs/kit';

export async function GET({ url, cookies }) {
  const returnCode = url.searchParams.get('code');
  
  let disco_access_token, disco_refresh_token;

  const dataObject = {
    client_id: DISCORD_CLIENT_ID,
    client_secret: DISCORD_CLIENT_SECRET,
    grant_type: 'authorization_code',
    code: returnCode,
    redirect_uri: DISCORD_REDIRECT_URI,
    scope: 'identify email guilds'
  };

  const request = await fetch('https://discord.com/api/oauth2/token', {
    method: 'POST',
    body: new URLSearchParams(dataObject),
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
  });
  
  const tokens = await request.json();

  console.log(tokens);

  disco_access_token = tokens.access_token;
  disco_refresh_token = tokens.refresh_token;

  const accessTokenOptions = {
    path: "/",
    httpOnly: true,
    maxAge: 10 * 60 * 1000
  }

  const refreshTokenOptions = {
    path: "/",
    httpOnly: true,
    maxAge: 30 * 24 * 60 * 60 * 1000
  }

  cookies.set("disco_access_token", disco_access_token, accessTokenOptions);
  cookies.set("disco_refresh_token", disco_refresh_token, refreshTokenOptions);

  throw redirect(302, "/");
}
