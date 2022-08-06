import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useSession, signIn, signOut } from "next-auth/react"
import { useRouter } from 'next/router'


const Dashboard: NextPage = ({}) => {
  const { data: session } = useSession();
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
