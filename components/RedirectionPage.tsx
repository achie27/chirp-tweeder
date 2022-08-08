import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { FC, ReactNode, useEffect } from "react";
import { useTwitterContext } from "../providers/TwitterContext";

const RedirectionPage: FC = () => {
  const router = useRouter();
  useEffect(() => {
    router.push("/");
  })

  // TODO: Add props for redicrection context
  return <>
    Welp ...
  </>
}

export default RedirectionPage;