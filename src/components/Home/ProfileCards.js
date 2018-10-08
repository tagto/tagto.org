import React from 'react'
import { Link } from 'react-static'
import styled from 'styled-components'

import alexPic from '../../alex.jpg'
import andrewPic from '../../andrew.jpg'

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

const InnerCard = styled.div`
  width: 100%;
  height: 100%
`

class ProfileCards extends React.Component {
  tanGithubClick() {
    var dataLayerObj = {
      "event": "interaction",
      "interactionName": "home-tan-github-click"
    };
    window.dataLayer.push(dataLayerObj);
  }
  tanLinkedinClick() {
    var dataLayerObj = {
      "event": "interaction",
      "interactionName": "home-tan-medium-click"
    };
    window.dataLayer.push(dataLayerObj);
  }
  alexGithubClick() {
    var dataLayerObj = {
      "event": "interaction",
      "interactionName": "home-alex-github-click"
    };
    window.dataLayer.push(dataLayerObj);
  }
  alexMediumClick() {
    var dataLayerObj = {
      "event": "interaction",
      "interactionName": "home-alex-medium-click"
    };
    window.dataLayer.push(dataLayerObj);
  }
  alexLinkedinClick() {
    var dataLayerObj = {
      "event": "interaction",
      "interactionName": "home-alex-linkedin-click"
    };
    window.dataLayer.push(dataLayerObj);
  }
  render() {
    return (
      <div>
        <Cards style={{ margin: 'auto' }}>
          <PersonCard background="rgba(255, 255, 255, 0.7)" style={{ maxWidth: "400px" }}>
            <div className="person-card-contents-1">Andrew Tan</div>
            <div className="person-card-contents-2">Software Engineer</div>
            <div className="person-card-contents-3"><i>M.Sc Engineering Physics</i></div>
            <div className="person-card-contents-4">
            <br/>
              Experienced at building custom applications to query large datasets (petabytes) and train neural networks for Natural Language Processing (NLP) applications. Proficient in C++ and Python.
            </div>
            <Card to="https://github.com/andtan91" target="_blank" background="rgba(0, 0, 0, 0.7)">
              <InnerCard  onClick={this.tanGithubClick}>GitHub</InnerCard>
            </Card>
            <Card to="https://www.linkedin.com/in/andrewtan91/" target="_blank" background="rgb(7, 95, 237, 0.7)">
              <InnerCard  onClick={this.tanLinkedinClick}>Linkedin</InnerCard>
            </Card>
            <img className="person-card-pic" src={andrewPic} alt=""/>
          </PersonCard>
          <PersonCard background="rgba(255, 255, 255, 0.7)">
            <div className="person-card-contents-1">Alex Galea</div>
            <div className="person-card-contents-2">Senior Data Analyst</div>
            <div className="person-card-contents-3"><i>M.Sc Theoretical Physics</i></div>
            <div className="person-card-contents-4">
            <br/>
              Web-analytics expert and Python developer. Proficient with Jupyter Notebooks, data collection, exploration, visualization and predictive analytics. Courseware author and teacher.
            </div>
            <Card to="https://github.com/agalea91" target="_blank" background="rgba(0, 0, 0, 0.7)">
              <InnerCard  onClick={this.alexGithubClick}>GitHub</InnerCard>
            </Card>
            <Card to="https://medium.com/@galea" target="_blank" background="rgba(70, 196, 81, 0.7)">
              <InnerCard  onClick={this.alexMediumClick}>Medium</InnerCard>
            </Card>
            <Card to="https://www.linkedin.com/in/alex-galea/" target="_blank" background="rgb(7, 95, 237, 0.7)">
              <InnerCard  onClick={this.alexLinkedinClick}>Linkedin</InnerCard>
            </Card>
            <img className="person-card-pic" src={alexPic} alt=""/>
          </PersonCard>
        </Cards>
      </div>
    );
  }
}

export default ProfileCards;