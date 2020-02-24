import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const StyltedCArd = styled.div`
  position: relative;
  background: white;
  width: 265px;
  padding: 10px;
  padding-bottom: 16px;
  border-radius: 5px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  margin: 1rem;

  img {
    position: absolute;
    width: 93%;
    object-fit: contain;
  }

  h1,
  h2 {
    font-size: 16px !important;
    font-weight: 600;
    margin: 0;
  }

  h1 {
    color: black;
    padding: 16px 0 0 0;
  }
  h2 {
    color: #6c63ff;
  }
  p {
    color: black;
    font-size: 14px;
    padding: 4px 16px;
    font-weight: 300;
  }
  @media (min-width: 48.1em) and (max-width: 76.7em) {
    width: auto;
    margin: 10px;
  }

  @media (max-width: 48em) {
    width: 100%;
    margin: 20px 10px;
    img {
      width: 97%;
      height: 80px;
      object-fit: cover;
    }
  }
`

const ProfilePic = styled.div`
  max-width: 120px;
  max-height: 120px;
  min-width: 120px;
  min-height: 120px;

  border-radius: 50%;
  margin-top: 10px;
  padding: 5px;
  background: white;
  position: relative;
  img {
    position: relative;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
  }
`

const SocialMedia = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`

const IconContainer = styled.div`
  width: 32px;
  height: 32px;
  background: lightgray;
  margin: 5px;
  padding: 5px;
  transition: 0.5s ease;
  :hover {
    cursor: pointer;
    background: #3f3d56;
  }

  img {
    position: relative;
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`

const SpeakerCard = ({ picture, name, role, detail, linkedin, facebook }) => (
  <StyltedCArd>
    {/*
       <img
      src={require("../images/speakers/speaker-bg.png")}
      alt="member background"
    />
      */}

    <ProfilePic>
      <img src={picture} alt="profiles" />
    </ProfilePic>
    <h1> {name} </h1>
    <h2> {role} </h2>
    <p> {detail} </p>
    <SocialMedia>
      <IconContainer>
        <Link to={linkedin}>
          <img
            src={require("../images/logos/linkedin-icon-white.png")}
            alt="LinkedIn"
          />
        </Link>
      </IconContainer>
      <IconContainer>
        <Link to={facebook}>
          <img
            src={require("../images/logos/facebook-icon-white.png")}
            alt="facebook"
          />
        </Link>
      </IconContainer>
    </SocialMedia>
  </StyltedCArd>
)

export default SpeakerCard
