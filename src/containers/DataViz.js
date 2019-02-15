import React from 'react'
import { Link, withSiteData, Head } from 'react-static'
import styled from 'styled-components'

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
      <title>TagTO Data Viz | Interactive Data Visualizations</title>
      <meta name="description" content="Interactive data visualization charts, made with JavaScript d3 and Python." />
    </Head>
    <MainBlock>
      <div>
        <CenterDiv>
          <h1>Data Visualizations</h1>
        </CenterDiv>
        <div>
          <ul>
            <li>
              <a href="/dataviz/crypto-monetary-base">Cryptocurrency Moneatry Base Comparison</a> (multi-line time series)
            </li>
          </ul>
        </div>
        <EmailCTA />
      </div>
    </MainBlock>
  </div>
  )
});
