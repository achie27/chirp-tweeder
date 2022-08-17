import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/router";
import { useTwitterContext } from "../providers/TwitterContext";
import styled from "styled-components";
import { useEffect, useState } from "react";
import TextTransition, { presets } from "react-text-transition";

const headers = [
  "Had enough of sports updates from your adrenaline-spiked friend for today?",
  "Don't want that content creator shoving brand-sponsored tweets in your timeline?",
  "Too many political tweets from that domain expert you respect(ed)?",
  "Not feeling particularly happy on seeing Happy New Year tweets?",
];

const Main = styled.div`
  width: 100vw;
  height: 100vh;
`;

const MainContainer = styled.div`
  width: 60%;
  margin: auto;
`;

const TweederDesc = styled.div`
  position: relative;
  float: left;
  width: 70%;
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-top: 15%;
  padding: 10px;
`;

const TweederHeadline = styled.div`
  font-size: 50px;
  font-weight: bolder;
`;

const TweederSubHeadline = styled.div`
  text-align: left;
  font-size: 25px;
  color: rgb(22 24 28);
  margin: 20px 0;
`;

const TweederLogin = styled.div`
  position: relative;
  float: right;
  width: 30%;
  display: flex;
  flex-direction: column;
  padding: 10px;
  margin-top: 15%;
`;

const TweederLoginBox = styled.div`
  width: 300px;
  padding: 30px;
  border: 0;
  border-radius: 20px;
  border-color: white;
  outline: 0;
  background-color: rgb(22 24 28);
  color: white;
`;

const TweederLoginHeaderContainer = styled.div``;

const TweederLoginHeader = styled.div`
  font-size: 50px;
  font-weight: 200;
`;

const TweederLoginSubHeader = styled.div``;

const TweederLoginButtonContainer = styled.div`
  margin-top: 30px;
`;

const TweederLoginButton = styled.div`
  text-align: center;
  padding: 20px;
  text-decoration: none;
  background-color: #1d9bf0;
  border: 0;
  border-radius: 40px;
  border-color: white;
  outline: 0;
  color: white;
  font-weight: bold;
  &:hover {
    cursor: pointer;
  }
`;

const Home: NextPage = () => {
  const { loginStatus } = useTwitterContext();
  const router = useRouter();

  const [headerIdx, setHeaderIdx] = useState(0);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setHeaderIdx(h => (h + 1) % headers.length);
    }, 7 * 1000);

    return () => clearInterval(intervalId);
  }, []);

  if (loginStatus === "authenticated") {
    router.push("/dashboard");
    return <></>;
  }

  return (
    <>
      <Main>
        <MainContainer>
          <TweederDesc>
            <TweederHeadline>
              <TextTransition className={"auto-height"} springConfig={presets.slow}>
                  {headers[headerIdx]}
              </TextTransition>
            </TweederHeadline>
            <TweederSubHeadline>
              Use Tweeder to weed out tweets on certain domains made by certain
              authors from your timeline
            </TweederSubHeadline>
          </TweederDesc>
          <TweederLogin>
            <TweederLoginBox>
              <TweederLoginHeaderContainer>
                <TweederLoginHeader>Tweeder</TweederLoginHeader>
                <TweederLoginSubHeader>
                  Tend to your Twitter timeline
                </TweederLoginSubHeader>
              </TweederLoginHeaderContainer>
              <TweederLoginButtonContainer>
                {loginStatus === "unauthenticated" ? (
                  <TweederLoginButton
                    onClick={() => signIn("twitter", { redirect: false })}
                  >
                    Sign in with Twitter
                  </TweederLoginButton>
                ) : (
                  <TweederLoginButton>
                    Checking your session ...
                  </TweederLoginButton>
                )}
              </TweederLoginButtonContainer>
            </TweederLoginBox>
          </TweederLogin>
        </MainContainer>
      </Main>
    </>
  );
};

export default Home;
