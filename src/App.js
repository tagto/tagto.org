import React from 'react'
import { Router, Link } from 'react-static'
import styled, { injectGlobal } from 'styled-components'
import { hot } from 'react-hot-loader'

import Routes from 'react-static-routes'

  // html { 
  //   background: url(${bgImg}) no-repeat center center fixed; 
  //   -webkit-background-size: cover;
  //   -moz-background-size: cover;
  //   -o-background-size: cover;
  //   background-size: cover;
  // }

injectGlobal`
  html {
    background: #FF5F6D;
    background: -webkit-linear-gradient(-45deg, #FF5F6D , #FFC371);
    background: linear-gradient(-45deg, #FF5F6D , #FFC371);
    background-size: fixed;
    min-height: 100%;
  }

  body {
    font-family: 'HelveticaNeue-Light', 'Helvetica Neue Light', 'Helvetica Neue', Helvetica, Arial,
      'Lucida Grande', sans-serif;
    font-weight: 300;
    font-size: 24px;
  }
`

const AppStyles = styled.div`
  a {
    text-decoration: none;
    font-weight: bold;
  }

  nav {
    width: 100%;
    background: rgb(255, 255, 255, 0.5);
    // border-bottom: 2px solid black;
    border: 2px rgb(255, 255, 255, 0.7);
    border-radius: 5px;


    a {
      color: black;
      padding: 1rem;
      display: inline-block;
    }
  }

  .content {
    padding: 1rem;
  }

  img {
    max-width: 100%;
  }
  .header-image {
    max-width: 400px;
    width: 100%;
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-top: 80px;
  }

  .pannel-container {
    width: 100%;
    height: 100%;
  }

  .person-card-contents-1 {
    font-weight: 500;
    font-size: 1.5rem;
  }

  .person-card-pic {
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 100%;
    max-width: 400px;
    height: auto;
    vertical-align: bottom;
    text-align: middle;
    border-radius: 5px;
  }
  
  @media only screen and (max-width: 800px) {
    .left-person-card-pannel {
      max-width: 100%;
    }
    .right-person-card-pannel {
      max-width: 100%;
      float: center;
      margin-top: 15px
    } 
  }

`

const App = () => (
  <Router>
    <AppStyles>
      <nav>
        <Link exact to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/dataviz">Data Viz</Link>
      </nav>
      <div className="content">
        <Routes />
      </div>
    </AppStyles>
  </Router>
)

export default hot(module)(App)

