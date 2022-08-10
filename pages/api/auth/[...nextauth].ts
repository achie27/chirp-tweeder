import { NextAuthOptions } from "next-auth";
import NextAuth from "next-auth/next";
import TwitterProvider from "next-auth/providers/twitter"
import { FindMyUserUserFieldsEnum, TweetsApi, UsersApi } from "../../../lib/twitter";
const twitterUser = new UsersApi()

export const authOptions: NextAuthOptions = {
  providers: [
    TwitterProvider({
      clientId: process.env.TWITTER_ID as string,
      clientSecret: process.env.TWITTER_SECRET as string,
      version: "2.0",
      authorization: {
        url: "https://twitter.com/i/oauth2/authorize",
        params: { scope: "users.read follows.read tweet.read offline.access" }
      }
    })
  ],
  debug: true,
  callbacks: {
    async jwt({ token, account }) {

      // Persist the OAuth access_token to the token right after signin
      if (account) {
        token.accessToken = account.access_token
        try {
          const d = await twitterUser.findMyUser({ userFields: new Set([FindMyUserUserFieldsEnum.Id])}, { headers: { "Authorization": "Bearer " + token.accessToken } })
          token.id = d.data?.id;

        } catch(e) {
          if (e) {
            console.error(e)
          }
        }
      }
      return token
    },
    async session({ session, user, token }) {
      session.accessToken = token.accessToken
      session.id = token.id
      return session
    }
  }
};

export default NextAuth(authOptions);