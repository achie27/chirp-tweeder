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
  const session = await unstable_getServerSession(req, res, authOptions)
  if (!session) {
    return res.status(200).json({ users: [] })
  }
  try {
    const d = await twitter.usersIdFollowing({ id: session?.id as string }, { headers: { "Authorization": "Bearer " + session?.accessToken }})
  
    res.status(200).json({ users: d.data })

  } catch (e) {
    console.error(e)
    res.status(500).json({ error: e })

  }
}
