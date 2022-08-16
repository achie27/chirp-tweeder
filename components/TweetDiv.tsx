import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import React, { FC, ReactNode, useEffect } from "react";
import styled from "styled-components";
import { Expansions, Tweet, User } from "../lib/twitter";
import { useTwitterContext } from "../providers/TwitterContext";
import ReactTweet from "./Tweet";

const Container = styled.div`
  width: 100%;
  height: 200px;
  position: relative;
`;

const TweetDiv: FC<{ tweetData: Tweet; includesData: Expansions }> = ({
  tweetData,
  includesData,
}) => {
  const linkProps = { target: "_blank", rel: "noreferrer" };
  const author = includesData.users?.find((u) => u.id === tweetData.author_id);
  const quotedTweet = tweetData.referenced_tweets?.find(
    (rt) => rt.type === "quoted"
  );
  const quotedTweetExpansion = includesData.tweets?.find(
    (qt) => qt.id === quotedTweet?.id
  );
  const quotedTweetAuthor = includesData.users?.find(
    (u) => u.id === quotedTweetExpansion?.author_id
  );
  const retweetedTweet = tweetData.referenced_tweets?.find(
    (rt) => rt.type === "retweeted"
  );
  const retweetedTweetExpansion = includesData.tweets?.find(
    (rt) => rt.id === retweetedTweet?.id
  );
  const retweetedTweetAuthor = includesData.users?.find(
    (u) => u.id === retweetedTweetExpansion?.author_id
  );

  return (
    <ReactTweet
      data={{
        id_str: tweetData.id,
        user: {
          name: author?.name,
          screen_name: author?.username,
          profile_image_url: author?.profile_image_url,
        },
        text: tweetData.text,
        created_at: tweetData.created_at,
        favorite_count: tweetData.public_metrics?.like_count,
        retweet_count: tweetData.public_metrics?.retweet_count,
        reply_count: tweetData.public_metrics?.reply_count,
        entities: {
          media: includesData.media?.filter(
            (m) =>
              m?.media_key &&
              tweetData.attachments?.media_keys?.includes(m.media_key)
          ),
          urls: tweetData.entities?.urls,
          user_mentions: tweetData.entities?.mentions,
          hashtags: tweetData.entities?.hashtags,
          symbols: tweetData.entities?.cashtags,
        },
        extended_tweets: includesData.media?.filter(
          (m) =>
            m?.media_key &&
            tweetData.attachments?.media_keys?.includes(m.media_key)
        ),
        ...(quotedTweet &&
          quotedTweetExpansion && {
            quoted_status: {
              id_str: quotedTweetExpansion.id,
              user: {
                name: quotedTweetAuthor?.name,
                screen_name: quotedTweetAuthor?.username,
                profile_image_url: quotedTweetAuthor?.profile_image_url,
              },
              text: quotedTweetExpansion.text,
              created_at: quotedTweetExpansion.created_at,
              favorite_count: quotedTweetExpansion.public_metrics?.like_count,
              retweet_count: quotedTweetExpansion.public_metrics?.retweet_count,
              entities: {
                media: includesData.media?.filter(
                  (m) =>
                    m?.media_key &&
                    tweetData.attachments?.media_keys?.includes(m.media_key)
                ), // TODO:fix
                urls: quotedTweetExpansion.entities?.urls,
                user_mentions: quotedTweetExpansion.entities?.mentions,
                hashtags: quotedTweetExpansion.entities?.hashtags,
                symbols: quotedTweetExpansion.entities?.cashtags,
              },
              extended_tweets: includesData.media?.filter(
                (m) =>
                  m?.media_key &&
                  tweetData.attachments?.media_keys?.includes(m.media_key)
              ), // TODO:fix
            },
          }),
        ...(retweetedTweet &&
          retweetedTweetExpansion && {
            retweeted_status: {
              id_str: retweetedTweetExpansion.id,
              user: {
                name: retweetedTweetAuthor?.name,
                screen_name: retweetedTweetAuthor?.username,
                profile_image_url: retweetedTweetAuthor?.profile_image_url,
              },
              text: retweetedTweetExpansion.text,
              created_at: retweetedTweetExpansion.created_at,
              favorite_count:
                retweetedTweetExpansion.public_metrics?.like_count,
              retweet_count:
                retweetedTweetExpansion.public_metrics?.retweet_count,
              entities: {
                media: includesData.media?.filter(
                  (m) =>
                    m?.media_key &&
                    tweetData.attachments?.media_keys?.includes(m.media_key)
                ), // TODO:fix
                urls: retweetedTweetExpansion.entities?.urls,
                user_mentions: retweetedTweetExpansion.entities?.mentions,
                hashtags: retweetedTweetExpansion.entities?.hashtags,
                symbols: retweetedTweetExpansion.entities?.cashtags,
              },
              extended_tweets: includesData.media?.filter(
                (m) =>
                  m?.media_key &&
                  tweetData.attachments?.media_keys?.includes(m.media_key)
              ), // TODO:fix
            },
          }),
      }}
      linkProps={linkProps}
    ></ReactTweet>
  );
};

export default TweetDiv;
