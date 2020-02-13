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

const lorem =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel orci libero. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Sed ut elit nunc. Nam fermentum placerat malesuada. Vivamus ornare suscipit elit, quis tempor metus venenatis quis. Quisque et urna nunc. Curabitur rutrum, dui quis varius feugiat, mauris nunc dapibus lacus, quis fermentum nunc sem quis eros. Cras mi leo, venenatis eu ultrices eget, ullamcorper sit amet mauris. Aenean arcu sem, vulputate quis dictum sed, dapibus semper mauris."
export default function MainHome() {
  return (
    <Wrapper>
      <Section>
        <Content>
          <h5>WOMEN TECHMAKERS ALGIERS 2020</h5>
          <Title>IWD 20</Title>
          <p>
            Higher School of Computer Science ESI ex INI<br></br>
            March 6th-7th 2020
          </p>
          <Button as={Link} to="/register">
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
            International Women’s Day (IWD) is marked on March 8th every year. In different regions, the focus 
            of celebrations ranges from general respect and appreciation for women to a celebration of women’s 
            economic, political, and social achievements.
          </p>
          <Button as={Link} to="/about">
            View full details
          </Button>
        </Content>
      </Section2>
      <Section3>
        <Title>Event Content</Title>
        <Tracks>
          <TrackItem>
            <Track
              imgsource={talkpic}
              altimg="Talks and panels"
              title="Talks & panels"
              content={lorem}
            ></Track>
          </TrackItem>
          <TrackItem>
            <Track
              imgsource={workshoppic}
              altimg="workshops"
              title="Workshops"
              content={lorem}
            ></Track>
          </TrackItem>
          <TrackItem>
            <Track
              imgsource={ideathonpic}
              altimg="Ideathon"
              title="Ideathon"
              content={lorem}
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
        <Title style={{ color: "white" }}>Our Partners</Title>
        <Partners>
          <LogoContainer>
            <a href="https://www.google.com/">
              <img src={require("../../images/logos/google-icon-white.png")}/>
            </a>
          </LogoContainer>
          <LogoContainer>
            <a href="https://www.google.com/">
              <img src={require("../../images/logos/google-icon-white.png")}/>
            </a>
          </LogoContainer>
          <LogoContainer>
            <a href="https://www.google.com/">
              <img src={require("../../images/logos/google-icon-white.png")}/>
            </a>
          </LogoContainer>
          <LogoContainer>
            <a href="https://www.google.com/">
              <img src={require("../../images/logos/google-icon-white.png")}/>
            </a>
          </LogoContainer>
        </Partners>
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
  padding:  0px 64px;
  width: 100%;
  min-height: 33%;
  height: 100vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: rgba(240, 240, 240, 0.5);
  @media screen and (max-width: 768px) {
    flex-direction: column-reverse;
    justify-content: center;
    height: 90vh;
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
    align-items: center;
    text-align: center;
  }
  h5 {
    font-weight: 500;
    color: #626263;
  }
`
const CustomImg = styled.img`
  width: 50%;
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
  width: 40%;
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
  justify-content: space-between;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    height: 90vh;
  }
`
/// Section 3
const Section3 = styled(Section2)`
  flex-direction: column;
  height: auto;
  padding: 48px 6px;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    min-height: 90vh;
    height: auto;
  }
`
/// Section 4
const Section4 = styled(Section3)`
  display: flex;
  flex-direction: row;
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
  height: 60vh;
`

const Partners = styled.div`
  width: 96%;
  display: flex;
  flex-direction: row; 
  justify-content: space-around;
`

const LogoContainer = styled.div`
    width: 220px;
    height: 140px;
    img{
      width: 100%;
      height: 100%;
      object-fit: contain;
      opacity: 0.7;
      :hover{
        opacity: 1;
        cursor: pointer;
      }
    }
`

const Tracks = styled.ul`
  width: 100%;
  margin-top: 5%;
  margin-left: 0;
  list-style: none;
  display: flex;
  justify-content: space-around;
  align-items: center;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`
const TrackItem = styled.li`
  display: flex;
  justify-content: center;
  min-width: 33%;
`

const Title = styled.h1`
  font-family: sans-serif;
  color: #3e3c55;
`
