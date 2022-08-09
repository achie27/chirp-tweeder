import { Session } from "next-auth";
import { SessionContextValue, useSession } from "next-auth/react";
import { createContext, FC, ReactNode, useContext, useState } from "react"

// TODO: add sign in and sing out functions here
interface ITwitterContext {
  loginStatus: SessionContextValue["status"]
  session?: Session;
  id?: string;
  userName?: string;
  profileImage?: string;
}

const twitterContext = createContext<ITwitterContext>({
  loginStatus: "loading"
});

export const TwitterContextProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const { status: loginStatus, data: session } = useSession()

  const [id, setId] = useState<string>("");
  const [userName, setUserName] = useState<string>("");
  const [profileImage, setProfileImage] = useState<string>("");


  return (
    <twitterContext.Provider 
      value={{
        loginStatus,
        id, 
        userName, 
        profileImage
      }}
    >
      {children}
    </twitterContext.Provider>
  );
}

export const useTwitterContext = () => useContext(twitterContext);