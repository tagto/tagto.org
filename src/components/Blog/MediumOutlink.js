import React from 'react'
import { Link } from 'react-static'
import styled from 'styled-components'

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
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
`

class MediumOutlink extends React.Component {
  blogMediumClick() {
    var dataLayerObj = {
      "event": "interaction",
      "interactionName": "blog-tagto-medium-click"
    };
    window.dataLayer.push(dataLayerObj);
  }
  render() {
    return (
      <Card to="https://medium.com/@galea" target="_blank" background="rgba(70, 196, 81, 0.7)">
        <InnerCard onClick={this.blogMediumClick}>Medium Blog</InnerCard>
      </Card>
    );
  }
}

export default MediumOutlink;