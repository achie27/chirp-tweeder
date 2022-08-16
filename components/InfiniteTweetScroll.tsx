import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import React, {
  FC,
  MutableRefObject,
  ReactNode,
  useEffect,
  useRef,
} from "react";
import styled from "styled-components";
import {
  ITweetWithExpansions,
  useTwitterContext,
} from "../providers/TwitterContext";
import { useVirtualizer } from "@tanstack/react-virtual";
import { Tweet } from "../lib/twitter";
// import { Tweet as TweetEmbed } from "react-twitter-widgets"
import { Tweet as TweetEmbed } from "react-static-tweets";

// @ts-ignore
import TweetWidget from "react-tweet";
import TweetDiv from "./TweetDiv";

const Container = styled.div`
  width: inherit;
  position: relative;
`;

interface IInfiniteTweetScrollProps {
  timeline: Array<ITweetWithExpansions>;
  isFetchingTweets: boolean;
  hasMoreTweetsToFetch: boolean;
  pollNextTweetSet: () => Promise<void>;
  parentRef: MutableRefObject<null>;
  moveToTop: boolean;
  setMoveToTop: (m: boolean) => void;
}

const InfiniteTweetScroll: FC<IInfiniteTweetScrollProps> = ({
  timeline,
  hasMoreTweetsToFetch,
  isFetchingTweets,
  pollNextTweetSet,
  parentRef,
  moveToTop,
  setMoveToTop,
}) => {
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
      rowVirtualizer.scrollToIndex(0, { align: "start" });
      setMoveToTop(false);
    }
  }, [moveToTop]);

  useEffect(() => {
    const [lastItem] = [...rowVirtualizer.getVirtualItems()].reverse();
    if (!lastItem) {
      return;
    }

    const id = Math.random() * 100000 + Math.random() * 1000;

    if (
      lastItem.index >= timeline.length - 1 &&
      hasMoreTweetsToFetch &&
      !isFetchingTweets
    ) {
      pollNextTweetSet();
    }
  }, [
    hasMoreTweetsToFetch,
    timeline.length,
    isFetchingTweets,
    rowVirtualizer.getVirtualItems(),
  ]);

  return (
    <>
      <div
        style={{
          height: rowVirtualizer.getTotalSize(),
          width: "100%",
          position: "relative",
        }}
      >
        {rowVirtualizer.getVirtualItems().map((virtualRow, idx) => {
          const tweet = timeline[virtualRow.index];

          return (
            <div
              key={virtualRow.index}
              ref={(el) => {
                const measured = virtualRow.measureElement(el);
                return measured;
              }}
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                transform: `translateY(${virtualRow.start}px)`,
              }}
            >
              <TweetDiv tweetData={tweet.tweet} includesData={tweet.includes} />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default InfiniteTweetScroll;
