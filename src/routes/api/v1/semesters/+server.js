import { GraphQLClient, gql } from 'graphql-request'
import { HYGRAPH_KEY, HYGRAPH_URL_HIGH_PERFORMANCE } from '$env/static/private'

import { responseInit } from '$lib/server/responseInit'

const hygraph = new GraphQLClient(HYGRAPH_URL_HIGH_PERFORMANCE, {
  headers: {
    Authorization: `Bearer ${HYGRAPH_KEY}`,
  },
})

export async function GET({ url }) {
  let first = Number(url.searchParams.get('first') ?? 5)
  let skip = Number(url.searchParams.get('skip') ?? 0)
  let direction = url.searchParams.get('direction') === 'DESC' ? 'DESC' : 'ASC'
  let orderBy = (url.searchParams.get('orderBy') ?? 'publishedAt') + '_' + direction

  const query = gql`
    query getSemesters($first: Int, $skip: Int, $orderBy: SemesterOrderByInput) {
      semesters(first: $first, skip: $skip, orderBy: $orderBy) {
        title
        slug
        content {
          html
        }
        sprints(orderBy: startdate_ASC) {
          title
          slug
          sprintNumber
          startdate
        }
      }
      semestersConnection {
        pageInfo {
          hasNextPage
          hasPreviousPage
          pageSize
        }
      }
    }
  `
  const data = await hygraph.request(query, { first, skip, orderBy })
  return new Response(JSON.stringify(data), responseInit)
}
