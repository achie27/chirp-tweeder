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
  width: 33%;
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
  text-align: left;
  padding: 50px;
  width: 70%;
  color: silver;
  `

const TimelineFilterSpecText = styled.div`
  width: 100%;
  margin: 20px 0;
`;

const ModalInputsContainer = styled.div`
  margin: 10px 0;
`;

const ModalInputsContainerLabel = styled.div`
  color: silver;
`;


const TimelineFilterSpecTags = styled.span`
  color: white;
  padding: 8px 15px;
  background-color: #1d9bf0;
  margin: 5px;
  border:0;
  border-radius: 40px;
  border-color: white;
  outline: 0;
  font-weight: 500;
  display: inline-block;
`;


const TimelineFilterCreate = styled.div`
  width: 200px;
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
  height: auto;
  position: absolute;
  top: 10%;
  left: calc(50% - 300px);
  background-color: #000000;
  border:0;
  border-radius: 20px;
  border-color: white;
  outline: 0;
  padding-top: 50px;
  padding-bottom: 75px;
`

const TimelineFilterCreateModalCloseWrapper = styled.div`
  width: 100%;
`;

const TimelineFilterCreateModalClose = styled.div`
  position: absolute;
  left: 10px;
  top: 10px;
  font-size: 20px;
  font-weight: bold;
  padding: 6px 10px;
  border:0;
  border-radius: 40px;
  border-color: white;
  outline: 0;
  background-color: rgb(22 24 28);
  color: rgb(231, 233, 234);
  &:hover {
    color: white;
  	cursor: pointer;
  }
`


const TimelineFilterCreateModalSelectContainer = styled.div`
  width: 500px;
  display: flex;
  flex-direction: column;
  margin: 0 10%;
`


const TimelineFilterSave = styled.div`
  position: absolute;
  right: 10px;
  bottom: 10px;
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
  width: 100%;
  border:0;
  border-radius: 4px;
  border-color: hsl(0, 0%, 80%);
  border-width: 1px;
  border-style: solid;
  outline: 0;
  height: 38px;
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

  const infiniteScrollerParentRef = useRef(null);
  const createFilterModalNameRef = useRef(null);
  const createFilterModalAnnotationsRef = useRef(null);
  const createFilterModalUsernamesRef = useRef(null);

  useEffect(() => {
    if (loginStatus === "authenticated") {
      if (!pollingTimeline) pollTimeline();
      fetchFollowing().then(setFollowing).catch(console.error)
    }
  }, [loginStatus])

  const clearCreateFilterModal = () => {
    setCurrentFilterName("");
    setCurrentSelectedUsersInFilter([]);
    setCurrentSelectedCtxAnnotationsInFilter([]);

    // @ts-ignore 
    createFilterModalAnnotationsRef?.current?.clearValue();
    // @ts-ignore 
    createFilterModalUsernamesRef?.current?.clearValue();
  };

  const handleFilterSave = useCallback(() => {
    // TODO: more validatation logic
    if (currentFilterName.length > 0 && currentSelectedUsersInFilter.length > 0 && currentSelectedCtxAnnotationsInFilter.length > 0) {
      addFilter({
        name: currentFilterName, 
        userNames: currentSelectedUsersInFilter,
        contextAnnotationIds: currentSelectedCtxAnnotationsInFilter
      })
      setFilterModalOpen(false)
  
      clearCreateFilterModal();
    } else {
      console.log("YOu gotta add something my dude")
    }

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

  return <>
  <Main>
    <TimelinesWrapper>
        <div style={{ height: "60px", backgroundColor: "black" }}></div>
      <Timelines>
        <TimelinesListItem onClick={() => handleTimelineClick("Home")}>Home</TimelinesListItem>
        { savedFilters.map(f => <TimelinesListItem key={f.name} onClick={() => handleTimelineClick(f.name)} >{f.name}</TimelinesListItem>) }
      </Timelines>
    </TimelinesWrapper>
    <TimelineTweetsWrapper>
      <Header>
        <SelectedTimeline>
          <SelectedTimelineText>{'>'} {selectedTimeline}</SelectedTimelineText>
        </SelectedTimeline>
      </Header>
      <TimelineTweets ref={infiniteScrollerParentRef}>
        <InfiniteTweetScroll parentRef={infiniteScrollerParentRef} timeline={timeline.filter(t => !tweedTheTweet(t.tweet))} hasMoreTweetsToFetch={timelineHasMoreTweets} isFetchingTweets={pollingTimeline} pollNextTweetSet={pollTimeline} moveToTop={shouldScrollerRefresh} setMoveToTop={setShouldScrollerRefresh}/>
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
            <TimelineFilterSpecText>This filter is weeding out tweets about</TimelineFilterSpecText>
            <TimelineFilterSpecText>{currentSelectedFilter.contextAnnotationIds
                .map(caId => <TimelineFilterSpecTags>{annotations.find(a => a.id === caId)?.name}</TimelineFilterSpecTags>)
              } </TimelineFilterSpecText>
            <TimelineFilterSpecText>from</TimelineFilterSpecText> 
            <TimelineFilterSpecText>{currentSelectedFilter.userNames
                .map(un => <TimelineFilterSpecTags>{following.find(f => f.id === un)?.username}</TimelineFilterSpecTags>)
              }</TimelineFilterSpecText>
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
      <TimelineFilterCreateModalCloseWrapper>
        <TimelineFilterCreateModalClose onClick={
          () => { 
            setFilterModalOpen(false);
            clearCreateFilterModal();
          }
          }>{"✕"}</TimelineFilterCreateModalClose>
      </TimelineFilterCreateModalCloseWrapper>
      <TimelineFilterCreateModalSelectContainer>
        <ModalInputsContainer>
          <ModalInputsContainerLabel>Filter</ModalInputsContainerLabel>
          <CreateFilterInput ref={createFilterModalNameRef} onChange={(e) => setCurrentFilterName(e.target.value)} value={currentFilterName}/>
        </ModalInputsContainer>
        <ModalInputsContainer>
          <ModalInputsContainerLabel>will weed out tweets about</ModalInputsContainerLabel>
            <Select
              isMulti
              name="ctxAnnotation"
              ref={createFilterModalAnnotationsRef}
              placeholder="Domains..."
              options={annotations.map(f => ({ label: f.name, value: f.id }))}
              // className="basic-multi-select"
              // classNamePrefix="select"
              closeMenuOnSelect={false}
              onChange={(newV) => {
                setCurrentSelectedCtxAnnotationsInFilter(newV.map(v => v.value));
              }}
            />
        </ModalInputsContainer>
        <ModalInputsContainer>
          <ModalInputsContainerLabel>authored by</ModalInputsContainerLabel>
            <Select
              isMulti
              name="following"
              ref={createFilterModalUsernamesRef}
              placeholder="Following..."
              options={following.map(f => ({ label: f.username, value: f.id }))}
              // className="basic-multi-select"
              // classNamePrefix="select"
              closeMenuOnSelect={false}
              onChange={(newV) => {
                setCurrentSelectedUsersInFilter(newV.map(v => v.value));
              }}
            />

        </ModalInputsContainer>
        <TimelineFilterSave onClick={handleFilterSave}>Save Filter</TimelineFilterSave>
      </TimelineFilterCreateModalSelectContainer>
    </TimelineFilterCreateModalContent>
  </TimelineFilterCreateModal>
  </>

}

export default Dashboard
