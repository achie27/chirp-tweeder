// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { unstable_getServerSession } from "next-auth";
import { Tweet, TweetsApi, UsersApi } from "../../../../../lib/twitter";
import { authOptions } from "../../../auth/[...nextauth]";

const twitter = new UsersApi();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method?.toUpperCase() !== "GET") {
    return res.status(400).end();
  }

  const session = await unstable_getServerSession(req, res, authOptions);
  if (!session) {
    return res.status(200).json({ users: [] });
  }
  try {
    const id = String(req.query.id || "");
    const d = await twitter.findUserById(id, undefined, undefined, undefined, {
      headers: { Authorization: "Bearer " + session.accessToken },
    });

    res.status(200).json(d);
  } catch (e) {
    res.status(500).json({ error: e });
  }
}
