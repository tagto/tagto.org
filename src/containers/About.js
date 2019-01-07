import React from 'react'
import { Link, withSiteData, Head } from 'react-static'
import styled from 'styled-components'

import AboutTextBlock from '../components/About/AboutTextBlock'
import EmailCTA from '../components/About/EmailCTA'

const MainBlock = styled.div`
  width: 800px;
  max-width: 95%;
  margin: auto;
`

const CenterDiv = styled.div`
  margin: auto;
  text-align: center;
`

export default withSiteData(() => {
  return (
    <div >
    <Head>
      <title>TagTO About | Analytics and Data Consulting Services</title>
      <meta name="description" content="Let us help with your next data project. We offer global consulations and analytics services, from Toronto ON." />
    </Head>
    <MainBlock>
      <div>
        <CenterDiv>
          <h1>Why hire us?</h1>
        </CenterDiv>
        <AboutTextBlock />
        <EmailCTA />
      </div>
    </MainBlock>
  </div>
  )
});
