// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { unstable_getServerSession } from 'next-auth'
import { Tweet, TweetsApi } from '../../../../lib/twitter'
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

    const d = await twitter.usersIdTimeline(
      session.id as string, 
      undefined,
      undefined,
      undefined,
      paginationToken,
      undefined,
      undefined,
      undefined,
      new Set<any>([
        "id", 
        "author_id",
        "context_annotations",
        "in_reply_to_user_id",
        "referenced_tweets",
        "source",
        "conversation_id",
        "entities",
        "public_metrics",
      ]),
      new Set<any>([
        "referenced_tweets",
        "referenced_tweets.id.author_id",
        "author_id",
        "attachments.media_keys",
      ]),
      new Set<any>([
        "duration_ms",
        "url",
        "type",
        "height",
        "preview_image_url",
        "variants"
      ]),
      undefined,
      new Set<any>([
        "profile_image_url",
        "name",
        "user_name",
      ]), 
      undefined,
      { 
      headers: { "Authorization": "Bearer " + session.accessToken }
    })
  
    res.status(200).json(d)

  } catch (e) {
    res.status(500).json({ error: e })
  }
}
