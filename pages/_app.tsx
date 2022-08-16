import "../styles/globals.css";
import "react-static-tweets/styles.css";
import { SessionProvider } from "next-auth/react";

import type { AppProps } from "next/app";
import { TwitterContextProvider } from "../providers/TwitterContext";
import { FilterContextProvider } from "../providers/FilterContext";
import { EnsureLoginWrapper } from "../components/EnsureLoginWrapper";

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <SessionProvider session={session}>
      <TwitterContextProvider>
        <FilterContextProvider>
          <Component {...pageProps} />
        </FilterContextProvider>
      </TwitterContextProvider>
    </SessionProvider>
  );
}

export default MyApp;
