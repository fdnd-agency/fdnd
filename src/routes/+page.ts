import createClient from '$lib/components/prismicio'
import type { PageLoad } from './$types'

export const load: PageLoad = async ({ fetch }) => {
  const client = createClient({ fetch })
  const prismicQuery: object[] = await client.getAllByType('squad')
  const squads = prismicQuery.map((squad: any) => {
    let title = squad.uid.split('-').join(' ')
    title = title.charAt(0).toUpperCase() + title.slice(1)
    return { title, ...squad.data }
  })

  return { squads }
}
