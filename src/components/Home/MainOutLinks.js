import React from 'react'
import { Link } from 'react-static'
import styled from 'styled-components'

const Cards = styled.div`
  display: flex;
  flex-align: stretch;
  justify-content: stretch;
  flex-wrap: wrap;
  width: 800px;
  max-width: 95%;
`

const Card = styled(Link)`
  flex: 1 1 150px;
  border: 2px solid rgba(0, 0, 0, 1);
  background: ${props => props.background};
  color: white;
  border-radius: 5px;
  padding: 2vh 2vw;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin: 1rem;
  font-weight: bold;
  font-size: 1.5rem;
  cursor: pointer;
  transition: 0.1s ease-out;
  white-space: nowrap;
  :hover {
    transform: translate(3px, 0px);
    box-shadow: 6px 10px 10px rgba(0, 0, 0, 0.2);
  }
`

const InnerCard = styled.div`
  width: 100%;
  height: 100%
`

class MainOutLinks extends React.Component {
  githubClick() {
    var dataLayerObj = {
      "event": "interaction",
      "interactionName": "home-tagto-github-click"
    };
    window.dataLayer.push(dataLayerObj);
  }
  mediumClick() {
    var dataLayerObj = {
      "event": "interaction",
      "interactionName": "home-tagto-medium-click"
    };
    window.dataLayer.push(dataLayerObj);
  }
  render() {
    return (
      <div>
        <Cards style={{ margin: 'auto' }}>
            <Card to="https://github.com/tagto" target="_blank" background="rgba(0, 0, 0, 0.7)" onClick={this.githubClick}>
              <InnerCard onClick={this.githubClick}>GitHub</InnerCard>
            </Card>
            <Card to="https://medium.com/@galea" target="_blank" background="rgba(70, 196, 81, 0.7)" onClick={this.mediumClick}>
              <InnerCard onClick={this.mediumClick}>Medium</InnerCard>
            </Card>
            <Card to="/dataviz/crypto-monetary-base" target="_blank" background="rgb(255, 48, 48, 0.7)" >
              <InnerCard>Crypto Monetary Base Charts</InnerCard>
            </Card>
        </Cards>
      </div>
    );
  }
}

export default MainOutLinks;