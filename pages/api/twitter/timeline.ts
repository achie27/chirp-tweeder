// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { unstable_getServerSession } from 'next-auth'
import { Tweet, TweetsApi } from '../../../lib/twitter'
import { authOptions } from "../auth/[...nextauth]"

const twitter = new TweetsApi()

type Data = {
  name: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const session = await unstable_getServerSession(req, res, authOptions)
  console.log(session)
  try {
    const d = await twitter.usersIdTimeline({ id: session?.id as string }, { headers: { "Authorization": "Bearer " + session?.accessToken }})
  
    res.status(200).json({ tweets: d.data } as any)

  } catch (e) {
    console.error(e)
    res.status(500).json({ error: e } as any )

  }
}
