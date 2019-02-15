import React from 'react'
import styled from 'styled-components'

const Cards = styled.div`
  display: flex;
  flex-align: stretch;
  justify-content: stretch;
  flex-wrap: wrap;
  width: 800px;
  max-width: 95%;
`
const PersonCard = styled.div`
flex: 1 1 150px;
  background: ${props => props.background};
  color: black;
  border-radius: 5px;
  padding: 2vh 2vw;
  align-items: left;
  justify-content: left;
  align-self: flex-start;
  text-align: left;
  margin: 1rem;
  font-weight: bold;
  font-size: 1.0rem;
`

const Frame = styled.iframe`
  width: 100%;
  max-width: 800px;
  margin: 0 auto
`

class EmailSignup extends React.Component {
  render() {
    return (
      <Cards style={{ margin: 'auto' }}>
        <PersonCard background="rgba(255, 255, 255, 1.0)">
          <Frame src="https://upscri.be/8f7672?as_embed" height="300" frameBorder="0" />
        </PersonCard>
      </Cards>
    );
  }
}

export default EmailSignup;