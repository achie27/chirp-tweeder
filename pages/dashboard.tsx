import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useSession, signIn, signOut } from "next-auth/react"
import { useRouter } from 'next/router'
import { useCallback, useEffect, useState } from 'react'
import { Tweet, TweetsApi, User, UsersIdFollowingUserFieldsEnum } from '../lib/twitter'
import styled from "styled-components"
import TweetDiv from '../components/TweetDiv'
import Select, { StylesConfig } from "react-select"
import annotations from "../lib/twitter/contextAnnotations"
import { useFilterContext } from '../providers/FilterContext'
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

const TimelinesListItem = styled.div`
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
  z-index: 2;
`


const TimelineFilterCreateModalContent = styled.div`
  width: 600px;
  height: 400px;
  position: absolute;
  top: 10%;
  left: calc(50% - 300px);
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


const TimelineFilterCreateModalSelectContainer = styled.div`
  width: 500px;
  height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`


const TimelineFilterSave = styled.div`
  position: absolute;
  right: 10px;
  bottom: 30px;
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

const CreateFilterInput = styled.input`
`

const Dashboard: NextPage = () => {
  const { data: session, status } = useSession();
  const { addFilter, filterUserCtxAnnotationMap, savedFilters } = useFilterContext()

  const [tweets, setTweets] = useState<Array<Tweet>>([])
  const [following, setFollowing] = useState<Array<User>>([])
  const [selectedTimeline, setSelectedTimeline] = useState<string>("Home")
  const [filterModalOpen, setFilterModalOpen] = useState<boolean>(false)
  const [currentFilterName, setCurrentFilterName] = useState<string>("")
  const [currentSelectedUsersInFilter, setCurrentSelectedUsersInFilter] = useState<Array<string>>([])
  const [currentSelectedCtxAnnotationsInFilter, setCurrentSelectedCtxAnnotationsInFilter] = useState<Array<string>>([])
  
  const handleFilterSave = useCallback(() => {
    addFilter({
      name: currentFilterName, 
      userNames: currentSelectedUsersInFilter,
      contextAnnotationIds: currentSelectedCtxAnnotationsInFilter
    })
    setFilterModalOpen(false)
  }, [currentFilterName, currentSelectedUsersInFilter, currentSelectedCtxAnnotationsInFilter])

  const tweedTheTweet = useCallback((tweet: Tweet) => {
    if(
      tweet.contextAnnotations?.some(ca => filterUserCtxAnnotationMap[selectedTimeline]?.[tweet.authorId!]?.[ca.domain.id])
    ) {
      // TWEED
      return true
    }

    // don't tweed
    return false;
  }, [filterUserCtxAnnotationMap, selectedTimeline]);

  useEffect(() => {
    if (session) {
      fetch("/api/twitter/tweets/timeline").then(async t => {
        const res = (await t.json());
        setTweets(res.tweets || [])
      }).catch(console.error)
      fetch("/api/twitter/user/following").then(async u => {
        const res = (await u.json());
        setFollowing(res.users || [])
      }).catch(console.error)
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
      <Timelines>
        <TimelinesListItem onClick={() => setSelectedTimeline("Home")}>Home</TimelinesListItem>
        { savedFilters.map(f => <TimelinesListItem key={f.name} onClick={() => setSelectedTimeline(f.name)} >{f.name}</TimelinesListItem>) }
      </Timelines>
    </TimelinesWrapper>
    <TimelineTweetsWrapper>
      <Header>
        <SelectedTimeline>
          <SelectedTimelineText>{selectedTimeline}</SelectedTimelineText>
        </SelectedTimeline>
      </Header>
      <TimelineTweets>
      { tweets.filter(t => !tweedTheTweet(t)).map(tweet => (<TweetDiv text={tweet.text} id={tweet.id}/>)) }
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
      <TimelineFilterCreateModalSelectContainer>
        <CreateFilterInput onChange={(e) => setCurrentFilterName(e.target.value)} placeholder="Filter name"/>
        <Select
          isMulti
          name="following"
          options={following.map(f => ({ label: f.username, value: f.id }))}
          className="basic-multi-select"
          classNamePrefix="select"
          closeMenuOnSelect={false}
          onChange={(newV) => {
            setCurrentSelectedUsersInFilter(newV.map(v => v.value));
          }}
        />
        <Select
          isMulti
          name="ctxAnnotation"
          options={annotations.map(f => ({ label: f.name, value: f.id }))}
          className="basic-multi-select"
          classNamePrefix="select"
          closeMenuOnSelect={false}
          onChange={(newV) => {
            setCurrentSelectedCtxAnnotationsInFilter(newV.map(v => v.value));
          }}
        />
        <TimelineFilterSave onClick={handleFilterSave}>Save Filter</TimelineFilterSave>
      </TimelineFilterCreateModalSelectContainer>
    </TimelineFilterCreateModalContent>
  </TimelineFilterCreateModal>
  </>

}

export default Dashboard
