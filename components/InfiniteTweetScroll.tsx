import { useVirtualizer } from "@tanstack/react-virtual";
import { FC, MutableRefObject, useEffect } from "react";
import styled from "styled-components";
import { ITweetWithExpansions } from "../providers/TwitterContext";

// @ts-ignore
import TweetDiv from "./TweetDiv";

const LoaderRow = styled.div`
  width: 100%;
  padding: 15px 0;
  color: rgb(231, 233, 234);
  background-color: rgb(22 24 28);
  font-weight: 500;
  text-align: center;
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
    count: hasMoreTweetsToFetch ? timeline.length + 1 : timeline.length,
    getScrollElement: () => parentRef.current,
    estimateSize: () => 700,
    overscan: 10,
    enableSmoothScroll: false,
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

    if (
      lastItem.index >= timeline.length - 1 &&
      hasMoreTweetsToFetch &&
      !isFetchingTweets
    ) {
      console.log("infinite scroller polling timeline")
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
        {rowVirtualizer.getVirtualItems().map((virtualRow) => {
          const isLoaderRow = virtualRow.index > timeline.length - 1;
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
              {isLoaderRow ? (
                hasMoreTweetsToFetch ? (
                  <LoaderRow>Loading more ...</LoaderRow>
                ) : (
                  <LoaderRow>Nothing more to show</LoaderRow>
                )
              ) : (
                <TweetDiv
                  tweetData={tweet.tweet}
                  includesData={tweet.includes}
                />
              )}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default InfiniteTweetScroll;
