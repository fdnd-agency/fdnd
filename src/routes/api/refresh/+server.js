const DISCORD_CLIENT_ID = import.meta.env.VITE_DISCORD_CLIENT_ID;
const DISCORD_CLIENT_SECRET = import.meta.env.VITE_DISCORD_CLIENT_SECRET;
const DISCORD_REDIRECT_URI = import.meta.env.VITE_DISCORD_REDIRECT_URI;

import { error, redirect } from '@sveltejs/kit';

export async function GET({ url, cookies }) {
  let disco_access_token;

  const disco_refresh_token = cookies.get('disco_refresh_token');
  
  if (!disco_refresh_token) {
    throw error(500)
  }

  // initializing data object to be pushed to Discord's token endpoint.
  // quite similar to what we set up in callback.js, expect with different grant_type.
  const dataObject = {
    client_id: DISCORD_CLIENT_ID,
    client_secret: DISCORD_CLIENT_SECRET,
    grant_type: 'refresh_token',
    refresh_token: disco_refresh_token,
  };

  console.log(dataObject);

  // performing a Fetch request to Discord's token endpoint
  const request = await fetch('https://discord.com/api/oauth2/token', {
    method: 'POST',
    body: new URLSearchParams(dataObject),  
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
  });
  
  const tokens = await request.json();

  console.log(tokens);

  disco_access_token = tokens.access_token;

  if (tokens.error) {
    throw error(500)
  }

  const access_token_expires_in = new Date(Date.now() + tokens.expires_in); // 10 minutes
  const refresh_token_expires_in = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000); // 30 days

  const accessTokenOptions = {
    path: "/",
    httpOnly: true,
    maxAge: access_token_expires_in
  }

  const refreshTokenOptions = {
    path: "/",
    httpOnly: true,
    maxAge: refresh_token_expires_in
  }

  cookies.set("disco_access_token", disco_access_token, accessTokenOptions);
  cookies.set("disco_refresh_token", disco_refresh_token, refreshTokenOptions);
  
  throw redirect(200, "/");
}