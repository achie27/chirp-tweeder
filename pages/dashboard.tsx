import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useSession, signIn, signOut } from "next-auth/react"
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { Tweet, TweetsApi } from '../lib/twitter'
const twitter = new TweetsApi()

const Dashboard: NextPage = () => {
  const { data: session, status } = useSession();
  const [tweets, setTweets] = useState<Array<Tweet>>([])
  const router = useRouter()

  useEffect(() => {
    if (session) {
      fetch("/api/twitter/timeline").then(t => setTweets(t as any)).catch(console.error)
    }
  }, [session])

  if (status === "loading") {
    return <>Checking your session</>
  } else if (status === "authenticated") {
    return <div>
      <main className="maincontent">
        {JSON.stringify(tweets)}
      </main>

     </div>

  }

  return <>
  <>Please login first</> {router.push("/")}
  </> 

}

export default Dashboard
