import React from "react"
import styled from "styled-components"
import { MainWrapper as Wrapper } from "../Container"
import Button from "../Button"
import Track from "../Track"
import Record from "../Record"
import { Link } from "gatsby"
/// pictures :
import homeHead from "../../images/home_head.png"
import homeAbout from "../../images/home_about.png"
import talkpic from "../../images/icons/001-lecture.png"
import workshoppic from "../../images/icons/002-code.png"
import ideathonpic from "../../images/icons/Solution.png"

export default function MainHome() {
  return (
    <Wrapper>
      <Section>
        <Content
          style={{
            width: "fit-content",
          }}
        >
          <h5>WOMEN TECHMAKERS ALGIERS 2020</h5>
          <Title>IWD 20</Title>
          <p>
            <a href={enp} target="_blank" rel="noopener noreferrer">
              Ecole Nationale Polytechniques Alger (ENP)
            </a>
            <br></br>
            March 6th-7th 2020
          </p>
          <Button as={Link} to="/register/iwd">
            Register
          </Button>
        </Content>
        <CustomImg src={homeHead} alt="HomeHead"></CustomImg>
      </Section>
      <Section2>
        <CustomImg2 src={homeAbout} alt="HomeHead"></CustomImg2>
        <Content>
          <h5>ABOUT THE EVENT</h5>
          <Title>International Women's Day 2020</Title>
          <p>
            International Women’s Day (IWD) is marked on March 8th every year.
            In different regions, the focus of celebrations ranges from general
            respect and appreciation for women to a celebration of women’s
            economic, political, and social achievements.
          </p>
          <Button as={Link} to="/about">
            View full details
          </Button>
        </Content>
      </Section2>
      <Section3
        style={{
          marginTop: "10vh",
        }}
      >
        <Title>EVENT CONTENT</Title>
        <Tracks>
          <TrackItem>
            <Track
              imgsource={talkpic}
              altimg="Talks and panels"
              title="Talks & panels"
              content={content.talks}
            ></Track>
          </TrackItem>
          <TrackItem>
            <Track
              imgsource={workshoppic}
              altimg="workshops"
              title="Workshops"
              content={content.workshops}
            ></Track>
          </TrackItem>
          <TrackItem>
            <Track
              imgsource={ideathonpic}
              altimg="Ideathon"
              title="Ideathon"
              content={content.ideathon}
            ></Track>
          </TrackItem>
        </Tracks>
      </Section3>
      <Section4>
        <Record record={3} title="Editions" />
        <Record record={290} title="Happy participants" />
        <Record record={350} title="Registrations" />
      </Section4>
      <Section5>
        <Title style={{ color: "white" }}>OUR PARTNERS</Title>
      </Section5>
    </Wrapper>
  )
}

//*styled Components

/// Section  component
const Section = styled.div`
  h1,
  h2,
  h3 {
    font-weight: 600;
  }
  padding-top: 5% 0;
  width: 100%;
  min-height: 33%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(240, 240, 240, 0.5);
  @media screen and (max-width: 768px) {
    flex-direction: column-reverse;
    justify-content: center;
    min-height: 90vh;
    align-items: center;
  }
`
const Content = styled.div`
  font-family: sans-serif;
  display: flex;
  width: 40%;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    width: 80%;
    align-items: center;
    text-align: center;
  }
  h5 {
    font-weight: 500;
    color: #626263;
  }
  p a {
    text-decoration: none;
    opacity: 0.8;
    &:hover {
      opacity: 1;
    }
    &:visited {
      color: black;
    }
  }
`
const CustomImg = styled.img`
  width: 30%;
  margin-left: 5%;
  @media screen and (max-width: 1222px) {
    width: 40%;
  }
  @media screen and (max-width: 768px) {
    width: 70%;
    margin: 0;
    margin-bottom: 10%;
    margin-right: 10%;
  }
`

const CustomImg2 = styled.img`
  width: 30%;
  @media screen and (max-width: 1222px) {
    width: 40%;
  }
  @media screen and (max-width: 768px) {
    width: 70%;
    margin: 0;
    margin-bottom: 10%;
    margin-right: 10%;
  }
`
/// Section 2
const Section2 = styled(Section)`
  background-color: #fff;
  margin-top: 5%;
  justify-content: space-evenly;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    min-height: 90vh;
  }
`
/// Section 3
const Section3 = styled(Section2)`
  flex-direction: column;
  height: auto;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    min-height: 90vh;

    height: auto;
    justify-content: space-around;
  }
`
/// Section 4
const Section4 = styled(Section3)`
  display: flex;
  flex-direction: row;
  padding: 10% 0;
  justify-content: space-around;
  background-image: linear-gradient(
    to right bottom,
    #4285f4,
    #3672dc,
    #295fc5,
    #1a4dae,
    #043c98
  );
  h1 {
    margin-top: 2%;
    font-weight: 500;
  }
`
const Section5 = styled(Section3)`
  margin-top: 0;
  background-image: linear-gradient(
    to right bottom,
    #1ce9b6,
    #00d8db,
    #00c2fa,
    #00a7ff,
    #4285f4
  );
  height: 40vh;
`

const Tracks = styled.ul`
  width: 100%;
  margin-top: 5%;
  margin-left: 0;
  list-style: none;
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`
const TrackItem = styled.li`
  display: flex;
  justify-content: center;
  min-width: 33%;
  @media screen and (max-width: 768px) {
    margin-bottom: 10%;
  }
`

const Title = styled.h1`
  font-family: sans-serif;
  color: #3e3c55;
`
const content = {
  talks:
    "Acquiring technical skills only never could be enough so we are having series of both technical and soft talks. Moreover, multiple panels will be held by stellar women who are going to share their successful stories in several fields.",
  workshops:
    "Since celebration could never be done without having some tech snacks, we are giving you , technology passionates, the opportunity to explore more about web development, mobile development and AI through fruitful workshops. As well as for no programmers, a special track is waiting to you.",
  ideathon: `An ideathon is a moderated idea marathon that helps people address some of the most pressing challenges of our time. IWD Ideathon main goal is to help the community evolve, by attempting to solve problems related to a specific theme.Participants will work in teams and use design thinking and innovative learning practices to ideate and collaborate on possible solutions under mentorship of experienced coaches.`,
}
const enp =
  "https://www.google.com/maps/place/Ecole+Nationale+Polytechnique/@36.7232318,3.1507596,15z/data=!4m2!3m1!1s0x0:0x2bb008bbddc747d3?sa=X&ved=2ahUKEwjB-dnypMrnAhWIsBQKHejSCNkQ_BIwFnoECAsQCA"
