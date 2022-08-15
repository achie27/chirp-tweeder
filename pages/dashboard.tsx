import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useSession, signIn, signOut } from "next-auth/react"
import { useRouter } from 'next/router'
import { useCallback, useEffect, useRef, useState } from 'react'
import { Tweet, TweetsApi, User, UsersIdFollowingUserFieldsEnum } from '../lib/twitter'
import styled from "styled-components"
import TweetDiv from '../components/TweetDiv'
import Select, { StylesConfig } from "react-select"
import annotations from "../lib/twitter/contextAnnotations"
import { IFilter, useFilterContext } from '../providers/FilterContext'
import { useTwitterContext } from '../providers/TwitterContext'
import InfiniteTweetScroll from '../components/InfiniteTweetScroll'
import {Tweet as TweetEmbed} from "react-twitter-widgets"


const Header = styled.div`
  background-color: #000000;
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
  margin-left : 5px;
`

const SelectedTimelineText = styled.div`
  color: #1d9bf0;
  font-weight: bold;
  font-size: x-large;
  letter-spacing: 0.5px;
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
  width: 27%;
`;

const Timelines = styled.div`
  position: fixed;
  background-color: #000000;
  height: inherit;
  width: inherit;
  display: flex;
  flex-direction: column;

`

const TimelinesListItem = styled.div`
  width: 80%;
  padding: 15px 0px;
  margin: 0 auto;
  text-align: right;
  color: rgb(231, 233, 234);
  font-weight: bold;
  font-size: larger;
  &:hover {
  	cursor: pointer;
    color: white;
  }
`

const TimelineTweetsWrapper = styled.div`
  width: 40%;
  position: relative;

  ` 
const TimelineTweets = styled.div`
  position: relative;
  height: calc(100vh - 60px);
  overflow: auto
  ` 

const TimelineFilterWrapper = styled.div`
  height: 100vh;
  width: 32%;
`;

const TimelineFilterCreateWrapper = styled.div`
  background-color: #000000;
  overflow: hidden;
  display: flex;
  align-items: center;
  height: 60px;
  position: relative;
  top: 0px;
  z-index: 1;
  width: 100%;
`


const TimelineFilter = styled.div`
  position: fixed;
  height: inherit;
  width: inherit;
  display: flex;
  flex-direction: column;
  background-color: #000000;
  `

const TimelineFilterSpec = styled.div`
  text-align: center;
  padding: 50px;
  width: 100%;
  color: white;
  background-color: rgb(22 24 28);
  display: flex;
  flex-direction: column;
  `

const TimelineFilterCreate = styled.div`
  width: 100px;
  text-align: center;
  margin-left: 5%;
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
  const { addFilter, filterUserCtxAnnotationMap, savedFilters } = useFilterContext()
  const { loginStatus, timeline, pollingTimeline, pollTimeline, fetchFollowing, timelineHasMoreTweets } = useTwitterContext()

  const [following, setFollowing] = useState<Array<User>>([])
  const [selectedTimeline, setSelectedTimeline] = useState<string>("Home")
  const [currentSelectedFilter, setCurrentSelectedFilter] = useState<IFilter>()
  const [filterModalOpen, setFilterModalOpen] = useState<boolean>(false)
  const [shouldScrollerRefresh, setShouldScrollerRefresh] = useState<boolean>(false)
  const [currentFilterName, setCurrentFilterName] = useState<string>("")
  const [currentSelectedUsersInFilter, setCurrentSelectedUsersInFilter] = useState<Array<string>>([])
  const [currentSelectedCtxAnnotationsInFilter, setCurrentSelectedCtxAnnotationsInFilter] = useState<Array<string>>([])

  useEffect(() => {
    if (loginStatus === "authenticated") {
      if (!pollingTimeline) pollTimeline();
      fetchFollowing().then(setFollowing).catch(console.error)
    }
  }, [loginStatus])

  const handleFilterSave = useCallback(() => {
    addFilter({
      name: currentFilterName, 
      userNames: currentSelectedUsersInFilter,
      contextAnnotationIds: currentSelectedCtxAnnotationsInFilter
    })
    setFilterModalOpen(false)
  }, [currentFilterName, currentSelectedUsersInFilter, currentSelectedCtxAnnotationsInFilter])


  const handleTimelineClick = useCallback((timelineName: string) => {
    setSelectedTimeline(timelineName)
    setShouldScrollerRefresh(true);
  }, [])

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
    setCurrentSelectedFilter(savedFilters?.find(f => f.name === selectedTimeline));
  }, [selectedTimeline])

  console.log(currentSelectedFilter, selectedTimeline)

  const parentRef = useRef(null)
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
        <div style={{ height: "60px" }}></div>
        <TimelinesListItem onClick={() => handleTimelineClick("Home")}>Home</TimelinesListItem>
        { savedFilters.map(f => <TimelinesListItem key={f.name} onClick={() => handleTimelineClick(f.name)} >{f.name}</TimelinesListItem>) }
      </Timelines>
    </TimelinesWrapper>
    <TimelineTweetsWrapper>
      <Header>
        <SelectedTimeline>
          <SelectedTimelineText>{selectedTimeline}</SelectedTimelineText>
        </SelectedTimeline>
      </Header>
      <TimelineTweets ref={parentRef}>
        <InfiniteTweetScroll parentRef={parentRef} timeline={timeline.filter(t => !tweedTheTweet(t.tweet))} hasMoreTweetsToFetch={timelineHasMoreTweets} isFetchingTweets={pollingTimeline} pollNextTweetSet={pollTimeline} moveToTop={shouldScrollerRefresh} setMoveToTop={setShouldScrollerRefresh}/>
      </TimelineTweets>
    </TimelineTweetsWrapper>
    <TimelineFilterWrapper>
      <TimelineFilterCreateWrapper>
        <TimelineFilterCreate onClick={() => {
          setFilterModalOpen(true)
        }}>Create filter</TimelineFilterCreate>
      </TimelineFilterCreateWrapper>
      <TimelineFilter>
       <TimelineFilterSpec>
          {currentSelectedFilter ? <>
            <>This filter is weeding out tweets about</><br/>
            <>{currentSelectedFilter.contextAnnotationIds.map(caId => annotations.find(a => a.id === caId)?.name).join(", ")} </><br/>
            <>from</><br/> 
            <>{currentSelectedFilter.userNames.map(un => following.find(f => f.id === un)?.username).join(", ")}</><br/>
          </>
            :
            "Not weeding out any tweets"
          }
       </TimelineFilterSpec>
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
