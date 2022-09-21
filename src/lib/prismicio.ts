import * as prismic from '@prismicio/client'

const repoName = 'fdndtribe'
const accessToken = ''

const createClient = ({ request, fetch }: { request?: Request; fetch?: prismic.FetchLike }) => {
  const clientOptions = {
    fetch,
    accessToken,
  }
  const client = prismic.createClient(repoName, clientOptions)

  if (request) {
    client.enableAutoPreviewsFromReq(request)
  }

  return client
}

export default createClient
