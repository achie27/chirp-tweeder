import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import React, { FC, ReactNode, useEffect, useRef } from "react";
import styled from "styled-components";
import { useTwitterContext } from "../providers/TwitterContext";
import { useVirtualizer } from '@tanstack/react-virtual'
import { Tweet } from "../lib/twitter";
import { Tweet as TweetWidget } from "react-twitter-widgets";

const Container = styled.div`
  width: inherit;
  position: relative
`

interface IInfiniteTweetScrollProps {
  tweets: Array<Tweet>;
  isFetchingTweets: boolean;
  hasMoreTweetsToFetch: boolean;
  pollNextTweetSet: () => Promise<void>
};

const InfiniteTweetScroll: FC<IInfiniteTweetScrollProps> = ({ tweets, hasMoreTweetsToFetch, isFetchingTweets, pollNextTweetSet }) => {
  const parentRef = useRef(null);
  const rowVirtualizer = useVirtualizer({
    count: hasMoreTweetsToFetch ? tweets.length + 1 : tweets.length,
    getScrollElement: () => parentRef.current,
    estimateSize: () => 500,
    overscan: 5,
  });

  useEffect(() => {
    const [lastItem] = [...rowVirtualizer.getVirtualItems()].reverse()

    if (!lastItem) {
      return
    }

    if (
      lastItem.index >= tweets.length - 1 &&
      hasMoreTweetsToFetch &&
      !isFetchingTweets
    ) {
      pollNextTweetSet()
    }
  }, [
    hasMoreTweetsToFetch,
    tweets.length,
    isFetchingTweets,
    rowVirtualizer.getVirtualItems()
  ])

  return <div
      ref={parentRef}
      className="List"
      style={{
        height: `500px`,
        width: `100%`,
        overflow: 'auto',
      }}
    >
      <div
        style={{
          height: `${rowVirtualizer.getTotalSize()}px`,
          width: '100%',
          position: 'relative',
        }}
      >
        {rowVirtualizer.getVirtualItems().map((virtualRow) => {
          const isLoaderRow = virtualRow.index > tweets.length - 1
          const tweet = tweets[virtualRow.index]

          return (
            <div
              key={virtualRow.index}
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
              }}
            >
              {isLoaderRow
                ? hasMoreTweetsToFetch
                  ? '...'
                  : 'Nothing more to load'
                : <TweetWidget tweetId={tweet.id}></TweetWidget>
              }
            </div>
          )
        })}
      </div>
    </div>
}

export default InfiniteTweetScroll