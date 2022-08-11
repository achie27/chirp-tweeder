// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { unstable_getServerSession } from 'next-auth'
import { Tweet, TweetsApi, UsersApi } from '../../../../lib/twitter'
import { authOptions } from "../../auth/[...nextauth]"

const twitter = new UsersApi()

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method?.toUpperCase() !== "GET") {
    return res.status(400).end();
  }

  const session = await unstable_getServerSession(req, res, authOptions)
  if (!session) {
    return res.status(200).json({ users: [] })
  }
  try {
    const paginationToken = String(req.query.pagination_token || "");
    const d = await twitter.usersIdFollowing({
      id: session.id as string,
      ...(paginationToken && { paginationToken })
    }, { 
      headers: { "Authorization": "Bearer " + session.accessToken 
    }})
  
    res.status(200).json(d)

  } catch (e) {
    console.error(e)
    res.status(500).json({ error: e })

  }
}
