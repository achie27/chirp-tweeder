import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import React, { FC, MutableRefObject, ReactNode, useEffect, useRef } from "react";
import styled from "styled-components";
import { ITweetWithExpansions, useTwitterContext } from "../providers/TwitterContext";
import { useVirtualizer } from '@tanstack/react-virtual'
import { Tweet } from "../lib/twitter";
// import { Tweet as TweetEmbed } from "react-twitter-widgets"
import { Tweet as TweetEmbed } from 'react-static-tweets'

// @ts-ignore
import TweetWidget from "react-tweet";
import TweetDiv from "./TweetDiv";

const Container = styled.div`
  width: inherit;
  position: relative
`

interface IInfiniteTweetScrollProps {
  timeline: Array<ITweetWithExpansions>;
  isFetchingTweets: boolean;
  hasMoreTweetsToFetch: boolean;
  pollNextTweetSet: () => Promise<void>;
  parentRef: MutableRefObject<null>;
  moveToTop: boolean;
  setMoveToTop: (m: boolean) => void
};

const InfiniteTweetScroll: FC<IInfiniteTweetScrollProps> = ({ timeline, hasMoreTweetsToFetch, isFetchingTweets, pollNextTweetSet, parentRef, moveToTop, setMoveToTop }) => {
  const rowVirtualizer = useVirtualizer({
    count: timeline.length,
    getScrollElement: () => parentRef.current,
    estimateSize: () => 700,
    overscan: 5,
    enableSmoothScroll: false,
    // scrollToFn()
  });

  useEffect(() => {
    if (moveToTop) {
      rowVirtualizer.scrollToOffset(0, { align: "start" });
      setMoveToTop(false);
    }
  }, [moveToTop])

  // useEffect(() => {
  //   const [lastItem] = [...rowVirtualizer.getVirtualItems()].reverse()
  //   console.log("current lastitem", lastItem)
  //   if (!lastItem) {
  //     return
  //   }

  //   if (
  //     lastItem.index >= tweets.length - 1 &&
  //     hasMoreTweetsToFetch &&
  //     !isFetchingTweets
  //   ) {
  //     console.log(
  //       "polling more tweets",
  //       lastItem.index,
  //       hasMoreTweetsToFetch,
  //       tweets.length,
  //       isFetchingTweets,
  //       rowVirtualizer.getVirtualItems()
  //     )
  //     pollNextTweetSet()
  //   }
  // }, [
  //   hasMoreTweetsToFetch,
  //   tweets.length,
  //   isFetchingTweets,
  //   rowVirtualizer.getVirtualItems()
  // ])

  // return <div
  //   ref={parentRef}
  //   style={{
  //     height: "2000px",
  //     width: "100%"
  //   }}
  // >
  //   <div
  //     style={{
  //       height: `${rowVirtualizer.getTotalSize()}px`,
  //       width: '100%',
  //       position: 'relative',
  //     }}
  //   >
  //     {rowVirtualizer.getVirtualItems().map((virtualRow) => {
  //       // const isLoaderRow = virtualRow.index > tweets.length - 1
  //       const tweet = tweets[virtualRow.index]
  //       return (
  //         <div
  //         key={virtualRow.key}
  //         ref={virtualRow.measureElement}
  //         style={{
  //           position: 'absolute',
  //           top: 0,
  //           left: 0,
  //           width: '100%',
  //           transform: `translateY(${virtualRow.start}px)`,
  //         }}
  //       >

  //               <TweetEmbed tweetId={tweet.id} />
  //         </div>
  //       )

  //     })}
  //   </div>
  // </div>

  return (
    <>
      <div
        style={{
          height: rowVirtualizer.getTotalSize(),
          width: '100%',
          position: 'relative',
        }}
      >
        {rowVirtualizer.getVirtualItems().map((virtualRow, idx) => {
          const tweet = timeline[virtualRow.index];
          const items = rowVirtualizer.getVirtualItems()
          console.log("previos tweet end - ", items[(idx - 1) || 0]?.end, "current tweet start - ", virtualRow.start)
          return <div
            key={virtualRow.index}
            ref={(el) => {
              const measured = virtualRow.measureElement(el);
              return measured
            }}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              transform: `translateY(${virtualRow.start}px)`,
            }}
          >
            <TweetDiv tweetData={tweet.tweet} includesData={tweet.includes} />
          </div>
        })}
      </div>
    </>
  )
}


export default InfiniteTweetScroll