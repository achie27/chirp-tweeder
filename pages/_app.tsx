import '../styles/globals.css'
import { SessionProvider } from "next-auth/react"

import type { AppProps } from 'next/app'
import { TwitterContextProvider } from '../providers/TwitterContext'
import { EnsureLoginWrapper } from '../components/EnsureLoginWrapper'

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {

  return <SessionProvider session={session}>
    <TwitterContextProvider>
        <Component {...pageProps} />
    </TwitterContextProvider>
  </SessionProvider>
}

export default MyApp
