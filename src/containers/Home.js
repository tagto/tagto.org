import React from 'react'
import { Link, withSiteData, Head } from 'react-static'
import styled from 'styled-components'

import Bubbles from '../components/Bubbles'
import MainOutLinks from '../components/Home/MainOutLinks'
import ProfileCards from '../components/Home/ProfileCards'
import EmailSignup from '../components/Home/EmailSignup'

import logoImg from '../logo.svg'

const MainBlock = styled.div`
  max-width: 100%;
`

export default withSiteData(() => (
  <MainBlock>
    <Head>
      <title>TagTO | Analytics and Data Consulting Services</title>
      <meta name="description" content="On the forefront of practical data analytics for business. Reach out today for consulting services or software build requests! Based in Toronto, ON." />
    </Head>
    <div>
      <img className="header-image" src={logoImg} alt=""/>
    </div>
    <h1 style={{ textAlign: 'center' }}>Data Science and Analytics Consulting</h1>
    <br/>
      <MainOutLinks />
    <br/>
    <div>
      <ProfileCards />
      <EmailSignup />
    </div>
    <Bubbles />
  </MainBlock>
))
