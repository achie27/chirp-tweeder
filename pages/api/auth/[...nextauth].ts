import NextAuth from "next-auth/next";
import TwitterProvider from "next-auth/providers/twitter"

export default NextAuth({
  providers: [
    TwitterProvider({
      clientId: process.env.TWITTER_ID as string,
      clientSecret: process.env.TWITTER_SECRET as string,
      version: "2.0",
    })
  ]
});