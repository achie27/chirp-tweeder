import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useSession, signIn, signOut } from "next-auth/react"
import { useRouter } from 'next/router'


const Home: NextPage = () => {
  const { data: session, status } = useSession()
  const router = useRouter()

  let loginSpace = <></>;

  switch (status) {
    case "authenticated":
      router.push("/dashboard");
      break;
    case "loading":
      loginSpace = <>Checking your session</>
      break
    case "unauthenticated":
      loginSpace = <div className="maincontentright-login">
      <button className="maincontentright-login-button" onClick={() => signIn("twitter", { redirect: false })}>Sign In</button>
    </div>
      break 
  }

  return (
    <div>
      <Head>
        <title>Tweeder - filter your Twitter experience</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="maincontent">
        <div className="maincontentleft">
          Filter your tweet topics you don't want to see from certain authors 
        </div>
        <div className="maincontentright">
          <div className="maincontentright-text">
            Login to your with your Twitter account
          </div>
          loginSpace
        </div>
      </main>

     </div>
  )
}

export default Home
