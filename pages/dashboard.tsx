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


const TimelineFilterCreate = styled.div`
  margin: 10px 15px;
  padding: 10px 25px;
  text-decoration: none;
  background-color: #1d9bf0;
  border:0;
  border-radius: 40px;
  border-color: white;
  outline: 0;
  color: white;
  font-weight: bold;
  &:hover {
  	cursor: pointer;
  }
`

const TimelineFilterCreateModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(91, 112, 131, 0.4);
`


const TimelineFilterCreateModalContent = styled.div`
  width: 400px;
  height: 200px;
  position: absolute;
  top: 20%;
  left: calc(50% - 200px);
  background-color: green;
  display: flex;
  align-items: center;
  justify-content: center;
`


const TimelineFilterCreateModalClose = styled.div`
  position: absolute;
  right: 10px;
  top: 5px;
  font-size: 20px;
  font-weight: bold;
  &:hover {
  	cursor: pointer;
  }
`

const Dashboard: NextPage = () => {
  const { data: session, status } = useSession();
  const [tweets, setTweets] = useState<Array<Tweet>>([])
  const [selectedTimeline, setSelectedTimeline] = useState<string>("Home")
  const [filterModalOpen, setFilterModalOpen] = useState<boolean>(false)

  console.log(status)

  useEffect(() => {
    if (session) {
      fetch("/api/twitter/timeline").then(async t => setTweets((await t.json()).tweets)).catch(console.error)
    }
  }, [session])


  useEffect(() => {
    if (filterModalOpen) {

    } else {

    }
  }, [filterModalOpen])

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
      {/* TODO:remove Header from here */}
      <Header>
        <TimelineFilterCreate onClick={() => {
          console.log(filterModalOpen); 
          setFilterModalOpen(true)
        }}>Create a filter</TimelineFilterCreate>
      </Header>
      <TimelineFilter>
      </TimelineFilter>
    </TimelineFilterWrapper>
  </Main>
  <TimelineFilterCreateModal hidden={!filterModalOpen}>
    <TimelineFilterCreateModalContent>
      <TimelineFilterCreateModalClose onClick={() => setFilterModalOpen(false)}>X</TimelineFilterCreateModalClose>
        You've been modaled
      </TimelineFilterCreateModalContent>
  </TimelineFilterCreateModal>
  </>

}

export default Dashboard
