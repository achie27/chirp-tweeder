import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import React, { FC, ReactNode, useEffect } from "react";
import styled from "styled-components";
import { Tweet, User } from "../lib/twitter";
import { useTwitterContext } from "../providers/TwitterContext";
import ReactTweet from "./Tweet"

const Container = styled.div`
width: 100%;
height: 200px;
position: relative
`

const TweetDiv: FC<{ tweetData: Tweet, userData: User }> = ({ tweetData, userData }) => {
  const linkProps = {target: '_blank', rel: 'noreferrer'}

  return <ReactTweet data={{
    id_str: tweetData.id,
    user: {
      name: 'XXX',
      screen_name: tweetData.authorId,
      profile_image_url: 'XXX'
    },
    text: tweetData.text,
    created_at: tweetData.createdAt,
    favorite_count: tweetData.organicMetrics?.likeCount,
    retweet_count: tweetData.organicMetrics?.retweetCount,
    entities: {
      media: [],
      urls: tweetData.entities?.urls,
      user_mentions: tweetData.entities?.mentions,
      hashtags: tweetData.entities?.hashtags,
      symbols: []
    } 
  }} linkProps={linkProps}  ></ReactTweet>
}

export default TweetDiv;