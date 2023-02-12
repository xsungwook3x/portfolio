
import { CustomHead } from '../components/custom-head'
import React from 'react'
import styled from "styled-components"
import { H3, P } from '../components/typography';

const Header = styled.header`
  margin-top: var(--nav-height);
  padding-top: calc(120px - 22px);
  max-width: 60%;
  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

export default function Home() {
  return (
    <>
      <CustomHead 
      title='김성욱 - 소프트웨어 엔지니어'
      description='소프트웨어 엔지니어 & 개발자 입니다. 지속해서 성장하고 함께 성장을 추구합니다.'
      ></CustomHead>
      <Header>
        <H3>안녕하세요 김성욱입니다.</H3>
        <P>저는 지속해서 성장하고 함께 성장하며 나아가는 것을 추구합니다.</P>
      </Header>
      <main style={{marginTop: "140px" }}>
        
      </main>
    </>
  )
}
