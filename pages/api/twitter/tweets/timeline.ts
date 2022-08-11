// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { unstable_getServerSession } from 'next-auth'
import { Tweet, TweetsApi, UsersIdTweetsExpansionsEnum, UsersIdTweetsTweetFieldsEnum } from '../../../../lib/twitter'
import { authOptions } from "../../auth/[...nextauth]"

const twitter = new TweetsApi()

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const session = await unstable_getServerSession(req, res, authOptions)
  if (!session) {
    return res.status(200).json({ tweets: [] })
  }

  try {
    const d = await twitter.usersIdTimeline({ 
      id: session?.id as string, 
      tweetFields: new Set([
        UsersIdTweetsTweetFieldsEnum.Id, 
        UsersIdTweetsTweetFieldsEnum.AuthorId,
        UsersIdTweetsTweetFieldsEnum.ContextAnnotations,
        UsersIdTweetsTweetFieldsEnum.InReplyToUserId,
        UsersIdTweetsTweetFieldsEnum.ReferencedTweets,
        UsersIdTweetsTweetFieldsEnum.Source,
        UsersIdTweetsTweetFieldsEnum.ConversationId
      ]),
      expansions: new Set([
        UsersIdTweetsExpansionsEnum.ReferencedTweetsId
      ])
    },{ 
      headers: { "Authorization": "Bearer " + session?.accessToken }
    })
  
    res.status(200).json({ tweets: d.data })

  } catch (e) {
    console.error(e)
    res.status(500).json({ error: e })

  }
}
