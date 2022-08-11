import { Session } from "next-auth";
import { SessionContextValue, useSession } from "next-auth/react";
import { createContext, FC, ReactNode, useCallback, useContext, useEffect, useState } from "react"
import { Get2UsersIdFollowingResponse, Get2UsersIdTimelinesReverseChronologicalResponse, Tweet, User } from "../lib/twitter";

// TODO: add sign in and sing out functions here
interface ITwitterContext {
  loginStatus: SessionContextValue["status"]
  session?: Session;
  id?: string;
  userName?: string;
  profileImage?: string;
  timeline: Array<Tweet>;
  pollingTimeline?: boolean;
  timelineHasMoreTweets?: boolean;
  pollTimeline: () => Promise<void>;
  fetchFollowing: () => Promise<Array<User>>
}

const twitterContext = createContext<ITwitterContext>({
  loginStatus: "loading",
  pollTimeline: () => {
    throw new Error("too soon")
  },
  fetchFollowing: () => {
    throw new Error("too soon")
  },
  timeline: []
});

export const TwitterContextProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const { status: loginStatus, data: session } = useSession()

  const [id, setId] = useState<string>("");
  const [userName, setUserName] = useState<string>("");
  const [profileImage, setProfileImage] = useState<string>("");

  const [timeline, setTimeline] = useState<Array<Tweet>>([]);
  const [pollingTimeline, setPollingTimeline] = useState<boolean>(false);
  const [nextPaginationToken, setNextPaginationToken] = useState<string>("");

  useEffect(() => {
    if (loginStatus === "authenticated") {
      setId(String(session.id));
    }
  }, [session]);

  const pollTimeline = useCallback(async () => {
    if (loginStatus !== "authenticated") return;

    setPollingTimeline(true);
    try {
      const res = await fetch(`/api/twitter/tweets/timeline?pagination_token=${nextPaginationToken}`);
      const data: Get2UsersIdTimelinesReverseChronologicalResponse = await res.json();
     
      setTimeline(timeline.concat(data.data || []));
      setNextPaginationToken(data.meta?.nextToken || "");
    } catch(e) {
      // TODO: handle this someday
      console.error(e)
    } finally {
      setPollingTimeline(false);
    }
  }, [loginStatus]);

  const fetchFollowing = useCallback(async () => {
    if (loginStatus !== "authenticated") return [];

    let currentPaginationToken = "";
    const following: Array<User> = [];

    do {
      const res = await fetch(`/api/twitter/user/following?pagination_token=${currentPaginationToken}`);
      const data: Get2UsersIdFollowingResponse = await res.json();
      following.push(...(data.data || []));
      currentPaginationToken = data.meta?.nextToken || "";
    } while (currentPaginationToken.length > 0)

    return following;
  }, [loginStatus]);

  return (
    <twitterContext.Provider 
      value={{
        loginStatus,
        id, 
        userName, 
        profileImage,
        timeline,
        timelineHasMoreTweets: nextPaginationToken.length > 0,
        pollingTimeline,
        pollTimeline,
        fetchFollowing
      }}
    >
      {children}
    </twitterContext.Provider>
  );
}

export const useTwitterContext = () => useContext(twitterContext);