import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import React, { FC, ReactNode, useEffect } from "react";
import styled from "styled-components";
import { useTwitterContext } from "../providers/TwitterContext";

const Container = styled.div`
width: 100%;
height: 200px;
position: relative
`

const TweetDiv: FC<{ text: string, id: string }> = ({ text, id }) => {

  return <Container>
    <>{id}</>
    <>{text}</>
  </Container>
}

export default TweetDiv;