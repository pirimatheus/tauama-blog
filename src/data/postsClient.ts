import { client } from '../../tina/__generated__/client'

export async function getAllPosts() {
  const res = await client.queries.postConnection()
  return res.data.postConnection.edges!.map(e => e!.node!)
}

export async function getPostBySlug(slug: string) {
  const res = await client.queries.postConnection({
    filter: { slug: { eq: slug } }
  })
  return res.data.postConnection.edges![0]?.node ?? null
}
