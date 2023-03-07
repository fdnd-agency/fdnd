import { GraphQLClient, gql } from 'graphql-request'
import { HYGRAPH_KEY, HYGRAPH_URL_HIGH_PERFORMANCE } from '$env/static/private'

import { responseInit } from '$lib/server/responseInit'

const hygraph = new GraphQLClient(HYGRAPH_URL_HIGH_PERFORMANCE, {
  headers: { Authorization: `Bearer ${HYGRAPH_KEY}` },
})

export async function GET({ params }) {
  const slug = params.slug
  const query = gql`
    query getSprint($slug: String!) {
      sprint(where: { slug: $slug }) {
        title
        slug
        sprintNumber
        startdate
        content {
          html
        }
        criteria {
          html
        }
        weekPlans {
          weekNumber
          sprint
          mondayDate
          monday {
            html
          }
          tuesdayDate
          tuesday {
            html
          }
          wednesdayDate
          wednesday {
            html
          }
          thursdayDate
          thursday {
            html
          }
          fridayDate
          friday {
            html
          }
        }
        topics {
          name
        }
      }
    }
  `
  const data = await hygraph.request(query, { slug })
  return new Response(JSON.stringify(data), responseInit)
  // return new Response(JSON.stringify({ working: null }), responseInit);
}
