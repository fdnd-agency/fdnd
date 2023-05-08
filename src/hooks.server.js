// const DISCORD_API_URL = import.meta.env.VITE_DISCORD_API_URL;
// const HOST = import.meta.env.VITE_HOST;

// import { redirect } from "@sveltejs/kit";
// import cookie from "cookie";

// export async function handle({ event }) {
//   const request = event.request;
//   const cookies = cookie.parse(request.headers.get("cookie") || "");
  
//   //if only refresh token is found, then access token has expired. perform a refresh on it.
//   if (cookies.disco_refresh_token && cookies.disco_access_token) {
//     const discord_request = await fetch(`${HOST}/api/refresh?code=${cookies.disco_refresh_token}`);
//     const discord_response = await discord_request.json();

//     // console.log("Request:", discord_request);
//     // console.log(discord_requ);

//     // console.log(discord_response);

//     // if (discord_response.disco_access_token) {
//     //   console.log('setting discord user via refresh token..')

//     //   const request = await fetch(`${DISCORD_API_URL}/users/@me`, {
//     //     headers: {
//     //       'Content-Type': 'application/json',
//     //       'Authorization': `Bearer ${discord_response.disco_access_token}`
//     //     }
//     //   });

//       //returns a discord user if JWT was valid
//       // const response = await request.json();

//       // if (response.id) {
//       //   const user = {
//       //     id: response.id,
//       //     username: response.username
//       //   };

//       //   return {
//       //     user: user,
//       //   }
//       // }
//     }
//   }

//   // if (cookies.disco_access_token) {
//   //   console.log('setting discord user via access token..')

//   //   const request = await fetch(`${DISCORD_API_URL}/users/@me`, {
//   //     headers: {
//   //       'Content-Type': 'application/json',
//   //       'Authorization': `Bearer ${cookies.disco_access_token}`
//   //     }
//   //   });

//   //   // console.log(request);


//   //   // // returns a discord user if JWT was valid
//   //   const response = await request.json();

//   //   if (response.id) {
//   //     const user = {
//   //       id: response.id,
//   //       username: response.username
//   //     };

//   //     return {
//   //       user: user,
//   //     }
//   //   }
//   // }

//   // return {
//   //   user: user,
//   // }
