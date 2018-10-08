import React from 'react'
import { withSiteData, Link, Head } from 'react-static'
import styled from 'styled-components'

import MediumOutlink from '../components/Blog/MediumOutlink'
import EmailSignup from '../components/Blog/EmailSignup'

const CenterDiv = styled.div`
  margin: auto;
  text-align: center;
`

const Cards = styled.div`
  display: flex;
  flex-align: stretch;
  justify-content: stretch;
  flex-wrap: wrap;
  width: 800px;
  max-width: 95%;
  margin: auto
`

export default withSiteData(() => (
  <div>
    <Head>
      <title>TagTO Blog | Analytics and Data Consulting Services</title>
      <meta name="description" content="Check out our latest content. We write about Python and share data-driven analysis on cryptocurrencies." />
    </Head>
    <Cards>
      <CenterDiv>
        <h1>We blog about our projects on Medium.</h1>
      </CenterDiv>
      <br />
      <MediumOutlink />
      <EmailSignup />
    </Cards>
  </div>
))
