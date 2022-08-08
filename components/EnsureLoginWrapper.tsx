import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { FC, ReactNode } from "react";
import { useTwitterContext } from "../providers/TwitterContext";
import RedirectionPage from "./RedirectionPage";

export const EnsureLoginWrapper: FC<{ children: ReactNode }> = ({ children }) => {
  const { loginStatus } = useTwitterContext();
  if (loginStatus === "authenticated") {
    return <>{children}</>;
  }
  
  // TODO: change this
  return <RedirectionPage/>;
}
