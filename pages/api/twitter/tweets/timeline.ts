// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { unstable_getServerSession } from 'next-auth'
import { Tweet, TweetsApi, UsersIdTweetsExpansionsEnum, UsersIdTweetsMediaFieldsEnum, UsersIdTweetsTweetFieldsEnum, UsersIdTweetsUserFieldsEnum } from '../../../../lib/twitter'
import { authOptions } from "../../auth/[...nextauth]"

const twitter = new TweetsApi()

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method?.toUpperCase() !== "GET") {
    return res.status(400).end();
  }

  const session = await unstable_getServerSession(req, res, authOptions)
  if (!session) {
    return res.status(200).json({ tweets: [] })
  }

  try {
    const paginationToken = String(req.query.pagination_token || "");

    const d = await twitter.usersIdTimeline({ 
      id: session.id as string, 
      tweetFields: new Set([
        UsersIdTweetsTweetFieldsEnum.Id, 
        UsersIdTweetsTweetFieldsEnum.AuthorId,
        UsersIdTweetsTweetFieldsEnum.ContextAnnotations,
        UsersIdTweetsTweetFieldsEnum.InReplyToUserId,
        UsersIdTweetsTweetFieldsEnum.ReferencedTweets,
        UsersIdTweetsTweetFieldsEnum.Source,
        UsersIdTweetsTweetFieldsEnum.ConversationId,
        UsersIdTweetsTweetFieldsEnum.Entities,
        UsersIdTweetsTweetFieldsEnum.InReplyToUserId,
        UsersIdTweetsTweetFieldsEnum.PublicMetrics,
      ]),
      userFields: new Set([
        UsersIdTweetsUserFieldsEnum.ProfileImageUrl,
        UsersIdTweetsUserFieldsEnum.Name,
        UsersIdTweetsUserFieldsEnum.Username,
      ]),
      mediaFields: new Set([
        UsersIdTweetsMediaFieldsEnum.DurationMs,
        UsersIdTweetsMediaFieldsEnum.Url,
        UsersIdTweetsMediaFieldsEnum.Type,
        UsersIdTweetsMediaFieldsEnum.Height,
        UsersIdTweetsMediaFieldsEnum.PreviewImageUrl,
        UsersIdTweetsMediaFieldsEnum.Variants,

      ]),
      expansions: new Set([
        UsersIdTweetsExpansionsEnum.ReferencedTweetsId,
        UsersIdTweetsExpansionsEnum.AuthorId,
        UsersIdTweetsExpansionsEnum.AttachmentsMediaKeys,
      ]),
      ...(paginationToken && { paginationToken })
    },{ 
      headers: { "Authorization": "Bearer " + session.accessToken }
    })
  
    res.status(200).json(d)

  } catch (e) {
    console.error(e)
    res.status(500).json({ error: e })

  }
}
