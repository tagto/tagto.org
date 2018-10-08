import React from 'react'
import styled from 'styled-components'

const PersonCard = styled.div`
  flex: 1 1 150px;
  background: ${props => props.background};
  color: black;
  border-radius: 5px;
  padding: 2vh 2vw;
  align-items: left;
  justify-content: left;
  text-align: left;
  margin: 1rem;
  font-weight: bold;
  font-size: 1.0rem;
`

const Frame = styled.iframe`
  width: 100%;
  maxWidth: 800px;
  margin: 0 auto
`

class EmailSignup extends React.Component {
  render() {
    return (
      <PersonCard background="rgba(255, 255, 255, 1.0)">
        <Frame src="https://upscri.be/8f7672?as_embed" height="300" frameBorder="0" />
      </PersonCard>
    );
  }
}

export default EmailSignup;