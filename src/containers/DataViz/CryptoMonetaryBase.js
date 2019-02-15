import React from 'react'
import { Link, withSiteData, Head } from 'react-static'
import styled from 'styled-components'

import fetch from 'isomorphic-fetch'

const MainBlock = styled.div`
  width: 800px;
  max-width: 95%;
  margin: auto;
`

const CenterDiv = styled.div`
  margin: auto;
  text-align: center;
`

const Frame = styled.iframe`
  width: 100%;
  margin: 0 auto;

  // iframe dev
  border: 0;
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
`

const VizDiv = styled.div`
  width: 750px;
  height: 600px;
  max-width: 100%;
  background: rgba(255,255,255,0.85);
  border-radius: 3px;
  border: 2px solid rgba(0,0,0,1);
  // padding: 5px;
  margin: auto;
  margin-bottom: 10px;

  // iframe dev
  overflow: hidden;
  // padding-top: 56.25%;
  position: relative;
`

function renderViz() {
  fetch('https://api.github.com/repos/agalea91/crypto-monetary-base/contents/charts/relative_coin_supply_pct_estimates.html')
  .then(function(response) {
      return response.json();
  }).then(function(data) {
      var iframe = document.getElementById('viz-1');
      iframe.src = 'data:text/html;base64,' + encodeURIComponent(data['content']);
  });
  fetch('https://api.github.com/repos/agalea91/crypto-monetary-base/contents/charts/relative_coin_supply_pct_estimates_zoom.html')
  .then(function(response) {
      return response.json();
  }).then(function(data) {
      var iframe = document.getElementById('viz-2');
      iframe.src = 'data:text/html;base64,' + encodeURIComponent(data['content']);
  });
}

export default withSiteData(() => {
  return (
    <div >
    <Head>
      <title>TagTO Data Viz | Cryptocurrency Monetary Base Comparison</title>
      <meta name="description" content="Expected supply distributions for top cryptocurrencies." />
    </Head>
    <MainBlock>
      <CenterDiv>
        <h2>Cryptocurrency Monetary Base Comparison</h2>
      </CenterDiv>
      <div>
        <p>
          Estimated future monetary base charts for the top cryptocurrencies, 
          including Bitcoin, Ethereum, Ripple, Stellar, EOS, Litecoin, Cardano, 
          Monero, TRON, IOTA, Dash, Ethereum Classic, NEO, Dogecoin, Nano, and 
          BitShares.
          <br/><br/>
          Many cryptocurrencies are set to be forever inflationary. For the 
          purpose of comparison, we set the 100% mark of these cases at ~2140.
          This is the year when BTC max supply will be reached.
          <br/><br/>
          For a detailed explanation of these charts please see the <a href="https://medium.com/tagto/cypherpunk-central-planning-crypto-distribution-inflation-charts-36f666ebf16d" target="_blank">compendium blog post</a>.
          <br/><br/>
          The source code is available on <a href="https://github.com/agalea91/crypto-monetary-base/tree/master/jupyter-notebooks" target="_blank">GitHub</a>.
        </p>
      </div>
      <VizDiv>
        <Frame id="viz-1" src="" frameBorder="0" />
      </VizDiv>
      <VizDiv>
        <Frame id="viz-2" src="" frameBorder="0" />
      </VizDiv>
      <script dangerouslySetInnerHTML={renderViz()}/>
    </MainBlock>
  </div>
  )
});
