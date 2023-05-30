const DISCORD_CLIENT_ID = import.meta.env.VITE_DISCORD_CLIENT_ID;
const DISCORD_CLIENT_SECRET = import.meta.env.VITE_DISCORD_CLIENT_SECRET;
const DISCORD_REDIRECT_URI = import.meta.env.VITE_DISCORD_REDIRECT_URI;

import { redirect } from '@sveltejs/kit';

export async function GET({ url, cookies }) {
  let disco_access_token;

  const disco_refresh_token = cookies.get('disco_refresh_token');
  
  if (!disco_refresh_token) {
    throw redirect(302, "/")
  }

  // initializing data object to be pushed to Discord's token endpoint.
  // quite similar to what we set up in callback.js, expect with different grant_type.
  const dataObject = {
    client_id: DISCORD_CLIENT_ID,
    client_secret: DISCORD_CLIENT_SECRET,
    grant_type: 'refresh_token',
    refresh_token: disco_refresh_token, 
    redirect_uri: DISCORD_REDIRECT_URI
  };
  
  let payload = new URLSearchParams();

  payload.append("client_id", DISCORD_CLIENT_ID)
  payload.append("client_secret", DISCORD_CLIENT_SECRET)
  payload.append("grant_type", 'refresh_token')
  payload.append("refresh_token", disco_refresh_token)
  payload.append("redirect_uri", DISCORD_REDIRECT_URI)

  console.log(payload); 

  // performing a fetch request to Discord's token endpoint
  const request = await fetch('https://discord.com/api/oauth2/token', {
    method: 'POST',
    body: payload,
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
  });
  
  const tokens = await request.json();

  disco_access_token = tokens.access_token;

  const accessTokenOptions = {
    path: "/",
    httpOnly: true,
    maxAge: 10 * 60 * 1000
  }

  const refreshTokenOptions = {
    path: "/",
    httpOnly: true,
    maxAge:  30 * 24 * 60 * 60 * 1000
  }

  cookies.set("disco_access_token", disco_access_token, accessTokenOptions);
  cookies.set("disco_refresh_token", disco_refresh_token, refreshTokenOptions);
  
  throw redirect(302, "/");
}