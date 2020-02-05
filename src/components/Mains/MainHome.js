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
        <CustomImg src={homeAbout} alt="HomeHead"></CustomImg>
        <Content>
          <h5>ABOUT THE EVENT</h5>
          <Title>International Women's Day 2020</Title>
          <p>
            Higher School of Computer Science ESI ex INI<br></br>
            March 6th-7th 2020
          </p>
          <Button as={Link} to="/about">
            View full details
          </Button>
        </Content>
      </Section2>
      <Section3>
        <Title>EVENT CONTENT</Title>
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
        <ul style={{ margin: 0 }}>
          <li>
            <Record record={3} title="Editions" />
          </li>
          <li>
            <Record record={290} title="Happy participants" />
          </li>
          <li>
            <Record record={350} title="Registrations" />
          </li>
        </ul>
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
  padding: 1rem;
  width: 100%;
  min-height: 33%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(240, 240, 240, 0.5);
  @media screen and (max-width: 768px) {
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;
  }
`
const Content = styled.div`
  font-family: sans-serif;
  display: flex;
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
/// Section 2
const Section2 = styled(Section)`
  margin-top: 5%;
  background-color: #fff;
  justify-content: space-around;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`
/// Section 3
const Section3 = styled(Section2)`
  flex-direction: column;
`
/// Section 4
const Section4 = styled(Section3)`
  margin-top: 0;
  background-color: rgb(54, 49, 158);
  * {
    font-weight: 500;
  }
  h1 {
    margin-top: 2%;
  }
  ul {
    margin-top: 20px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 80%;
    list-style-type: none;
    li {
      width: 20%;
      padding: 4em 2em;
      text-align: center;
    }
    @media screen and (max-width: 768px) {
      flex-direction: column;
      width: 100%;
      li {
        width: 50%;
      }
    }
  }
`
const Section5 = styled(Section3)`
  margin-top: 0;
  background-color: rgb(164, 100, 252);
  height: 20vh;
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
