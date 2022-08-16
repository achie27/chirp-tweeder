import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import React, { FC, ReactNode, useEffect } from "react";
import styled from "styled-components";
import { Expansions, Tweet, User } from "../lib/twitter";
import { useTwitterContext } from "../providers/TwitterContext";
import ReactTweet from "./Tweet"

const Container = styled.div`
width: 100%;
height: 200px;
position: relative
`

const TweetDiv: FC<{ tweetData: Tweet, includesData: Expansions }> = ({ tweetData, includesData }) => {
  const linkProps = {target: '_blank', rel: 'noreferrer'}
  const author = includesData.users?.find(u => u.id === tweetData.authorId)
  const quotedTweet = tweetData.referencedTweets?.find(rt => rt.type === "quoted");
  const quotedTweetExpansion = includesData.tweets?.find(qt => qt.id === quotedTweet?.id);
  const quotedTweetAuthor = includesData.users?.find(u => u.id === quotedTweetExpansion?.authorId);
  const retweetedTweet = tweetData.referencedTweets?.find(rt => rt.type === "retweeted");
  const retweetedTweetExpansion = includesData.tweets?.find(rt => rt.id === retweetedTweet?.id);
  const retweetedTweetAuthor = includesData.users?.find(u => u.id === retweetedTweetExpansion?.authorId);

  return <ReactTweet data={{
    id_str: tweetData.id,
    user: {
      name: author?.name,
      screen_name: author?.username,
      profile_image_url: author?.profileImageUrl
    },
    text: tweetData.text,
    created_at: tweetData.createdAt,
    favorite_count: tweetData.publicMetrics?.likeCount,
    retweet_count: tweetData.publicMetrics?.retweetCount,
    reply_count: tweetData.publicMetrics?.replyCount,
    entities: {
      media: includesData.media?.filter(m => m?.mediaKey && tweetData.attachments?.mediaKeys?.includes(m.mediaKey)),
      urls: tweetData.entities?.urls,
      user_mentions: tweetData.entities?.mentions,
      hashtags: tweetData.entities?.hashtags,
      symbols: tweetData.entities?.cashtags
    },
    extended_tweets: includesData.media?.filter(m => m?.mediaKey && tweetData.attachments?.mediaKeys?.includes(m.mediaKey)),
    ...(quotedTweet && quotedTweetExpansion && {
      quoted_status: {
        id_str: quotedTweetExpansion.id,
        user: {
          name: quotedTweetAuthor?.name,
          screen_name: quotedTweetAuthor?.username,
          profile_image_url: quotedTweetAuthor?.profileImageUrl
        },
        text: quotedTweetExpansion.text,
        created_at: quotedTweetExpansion.createdAt,
        favorite_count: quotedTweetExpansion.publicMetrics?.likeCount,
        retweet_count: quotedTweetExpansion.publicMetrics?.retweetCount,
        entities: {
          media: includesData.media?.filter(m => m?.mediaKey && tweetData.attachments?.mediaKeys?.includes(m.mediaKey)), // TODO:fix
          urls: quotedTweetExpansion.entities?.urls,
          user_mentions: quotedTweetExpansion.entities?.mentions,
          hashtags: quotedTweetExpansion.entities?.hashtags,
          symbols: quotedTweetExpansion.entities?.cashtags
        },
        extended_tweets: includesData.media?.filter(m => m?.mediaKey && tweetData.attachments?.mediaKeys?.includes(m.mediaKey)), // TODO:fix
      }
    }),
    ...(retweetedTweet && retweetedTweetExpansion && {
      retweeted_status: {
        id_str: retweetedTweetExpansion.id,
        user: {
          name: retweetedTweetAuthor?.name,
          screen_name: retweetedTweetAuthor?.username,
          profile_image_url: retweetedTweetAuthor?.profileImageUrl
        },
        text: retweetedTweetExpansion.text,
        created_at: retweetedTweetExpansion.createdAt,
        favorite_count: retweetedTweetExpansion.publicMetrics?.likeCount,
        retweet_count: retweetedTweetExpansion.publicMetrics?.retweetCount,
        entities: {
          media: includesData.media?.filter(m => m?.mediaKey && tweetData.attachments?.mediaKeys?.includes(m.mediaKey)), // TODO:fix
          urls: retweetedTweetExpansion.entities?.urls,
          user_mentions: retweetedTweetExpansion.entities?.mentions,
          hashtags: retweetedTweetExpansion.entities?.hashtags,
          symbols: retweetedTweetExpansion.entities?.cashtags
        },
        extended_tweets: includesData.media?.filter(m => m?.mediaKey && tweetData.attachments?.mediaKeys?.includes(m.mediaKey)), // TODO:fix
      }
    })

  }} linkProps={linkProps}  ></ReactTweet>
}

export default TweetDiv;