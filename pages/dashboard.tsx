import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useSession, signIn, signOut } from "next-auth/react"
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { Tweet, TweetsApi } from '../lib/twitter'
const twitter = new TweetsApi()

const Dashboard: NextPage = ({}) => {
  const { data: session } = useSession();
  const [tweets, setTweets] = useState<Array<Tweet>>([])
  useEffect(() => {
    if (session) {
      fetch("/api/twitter/timeline").then(t => setTweets(t as any)).catch(console.error)
    }
  }, [session])

  return (
    <div>
      <Head>
        <title>Tweeder - filter your Twitter experience</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="maincontent">
        Aye mah man {JSON.stringify(session)}
      </main>

     </div>
  )
}

export default Dashboard
