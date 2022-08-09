import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useSession, signIn, signOut } from "next-auth/react"
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { Tweet, TweetsApi } from '../lib/twitter'
import styled from "styled-components"
import TweetDiv from '../components/TweetDiv'

const twitter = new TweetsApi()

const Header = styled.div`
  background-color: rgba(0, 0, 0, 0.65);
  overflow: hidden;
  display: flex;
  align-items: center;
  height: 60px;
  position: sticky;
  top: 0px;
  z-index: 1;
  `

const SelectedTimeline = styled.div`
  float: left;
  width: 25%;
  margin-left : 5px;
`

const SelectedTimelineText = styled.div`
  color: #1d9bf0
`

const Menu = styled.div`
  float: right;
  width: 70%;
  margin-right : 50px;
`


const MenuList = styled.ul`
  float: right;
  list-style-type: none;
  padding: 0;
  overflow: hidden;
`


const MenuListItem = styled.li`
  float: left;
`
const MenuListItemText = styled.a`
  display: block;
  color: #1d9bf0;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
`
const MenuListItemFIlterCreateButton = styled.a`
  display: block;
  color: #1d9bf0;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
`


const Main = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;

  `

const TimelinesWrapper = styled.div`
  height: 100vh;
  width: 30%;
`;

const Timelines = styled.div`
  position: fixed;
  background-color: red;
  height: inherit;
  width: inherit;

`
const TimelineTweetsWrapper = styled.div`
  width: 40%;
  background-color: blue;
  position: relative;

  ` 
  const TimelineTweets = styled.div`
  position: relative;

  ` 

const TimelineFilterWrapper = styled.div`
  height: 100vh;
  width: 35%;
`;

const TimelineFilter = styled.div`
  position: fixed;
  background-color: yellow;
  height: inherit;
  width: inherit;
`

const Dashboard: NextPage = () => {
  const { data: session, status } = useSession();
  const [tweets, setTweets] = useState<Array<Tweet>>([])
  const [selectedTimeline, setSelectedTimeline] = useState<string>("Home")

  console.log(status)

  useEffect(() => {
    if (session) {
      fetch("/api/twitter/timeline").then(async t => setTweets((await t.json()).tweets)).catch(console.error)
    }
  }, [session])

  return <>
    {/* <Header>
      <SelectedTimeline>
        <SelectedTimelineText>{selectedTimeline}</SelectedTimelineText>
      </SelectedTimeline>
      <Menu>
        <MenuList>
          <MenuListItem>
            <MenuListItemText href="#" onClick={() => signOut()}>Log out</MenuListItemText>
          </MenuListItem>
        </MenuList>
      </Menu>
    </Header> */}
  <Main>
    <TimelinesWrapper>
      <Timelines></Timelines>
    </TimelinesWrapper>
    <TimelineTweetsWrapper>
      <Header>
        <SelectedTimeline>
          <SelectedTimelineText>{selectedTimeline}</SelectedTimelineText>
        </SelectedTimeline>
      </Header>
      <TimelineTweets>
      { tweets.map(tweet => (<TweetDiv text={tweet.text} id={tweet.id}/>)) }
      </TimelineTweets>
    </TimelineTweetsWrapper>
    <TimelineFilterWrapper>
      <TimelineFilter></TimelineFilter>
    </TimelineFilterWrapper>
  </Main>
  </>

}

export default Dashboard
