import React from "react"
import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import styled from "styled-components"
import theme from "../constants/theme.json"
import Button from "../components/Button"
import Track from "../components/Track"
import content from "../content/tracks.json"
import workshops from "../content/workshops/workshops.json"
import SpeakerCard from "../components/speakerCard"
import talkpic from "../images/icons/talk.svg"
import talks from "../content/talks/talks.json"
import speakers from "../content/talks/speakers.json"
import mentors from "../content/ideathon/mentors.json"
import trainers from "../content/workshops/trainers.json"
// TODO : Add Speakers section

const MentorsData = mentors.map(mbr => (
  <SpeakerCard
    key={mbr.name}
    picture={require(`../images/mentors/${mbr.picture}`)}
    name={mbr.name}
    role={mbr.role}
    detail={mbr.detail}
    linkedin={mbr.linkedin}
    facebook={mbr.facebook}
    twitter={mbr.twitter}
  />
))
const SpeakersData = speakers.map(mbr => (
  <SpeakerCard
    key={mbr.name}
    picture={require(`../images/mentors/${mbr.img}`)}
    name={mbr.name}
    role={mbr.role}
    detail={mbr.detail}
    linkedin={mbr.linkedin}
    facebook={mbr.facebook}
    twitter={mbr.twitter}
  />
))
const TrainersData = trainers.map(mbr => (
  <SpeakerCard
    key={mbr.name}
    picture={require(`../images/mentors/${mbr.img}`)}
    name={mbr.name}
    role={mbr.role}
    detail={mbr.detail}
    linkedin={mbr.linkedin}
    facebook={mbr.facebook}
    twitter={mbr.twitter}
  />
))

const StyleadHead = styled.div`
  height: 40vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background: ${theme.light_mode.colors.dark};
  h1 {
    font-family: sans-serif;
    color: white;
    font-weight: 400;
    margin: 0 5%;
  }
`

const DetailContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 64px;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    padding: 20px;
  }
`

const ImgContainer = styled.div`
  width: 40%;
  img {
    max-width: 100%;
    max-height: 100%;

    min-width: 100%;
    min-width: 100;

    object-fit: contain;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`

const Content = styled.div`
  width: 40%;
  font-family: sans-serif;

  h1 {
    margin-top: 2%;
    font-weight: 500;
    color: ${theme.light_mode.colors.title_dark};
  }
  h5 {
    font-weight: 500;
    color: #626263;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`
const SelebrationContent = styled(Content)`
  width: 100%;
  padding: 64px;
  text-align: center;
  p {
    width: 80%;
    margin: auto;
  }
  @media screen and (max-width: 768px) {
    text-align: center;
    padding: 20px;
  }
`

/// Section 3
const Section3 = styled.div`
  h1,
  h2,
  h3 {
    font-weight: 600;
  }
  padding-top: 5% 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 768px) {
    flex-direction: column-reverse;
    justify-content: center;
    min-height: 90vh;
    align-items: center;
  }
  flex-direction: column;
  height: auto;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    min-height: 90vh;

    height: auto;
    justify-content: space-around;
  }

  background-color: #fff;
  margin-top: 5%;
  justify-content: space-evenly;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    min-height: 90vh;
  }
`

const Tracks = styled.ul`
  width: 100%;
  margin-top: 5%;
  margin-left: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: flex-start;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`
const TrackItem = styled.li`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-width: 20%;
  a {
    min-width: 40%;
  }
  @media screen and (max-width: 768px) {
    margin-bottom: 10%;
    width: 100%;
  }
`

const Speakers = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 32px;
  @media (min-width: 48.1em) and (max-width: 76.7em) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media (max-width: 48em) {
    justify-content: center;
  }
`
const Container = styled.div`
  background-color: ${props => props.bg || theme.light_mode.colors.bg_grey};
  display: flex;
  align-items: center;
  flex-direction: column;
  text-align: center;
  padding: 20px;
  h1 {
    font-size: 48px;
    margin-top: 2%;
    font-weight: 500;
    color: ${theme.light_mode.colors.title_dark};
  }
`

const Ideathon = styled(Container)`
  p {
    margin-top: 5%;
    max-width: 80%;
    text-align: center;
  }
  h2.theme {
    color: ${theme.light_mode.colors.primary};
    font-weight: 400;
  }
  p.theme {
    margin-top: 0;
    max-width: 80%;
    text-align: center;
  }
  img {
    margin: auto;
    width: 300px;
  }
`
const Workshops = styled(Container)`
  background-color: #fafafa;

  min-height: 90vh;
  p {
    margin-top: 5%;
    max-width: 80%;
    text-align: center;
  }
  h1 {
    color: #4285f4;
    position: relative;
    span {
      display: inline;
      position: relative;
      img {
        position: relative;
        top: 10px;
        width: 70px;
        margin: 0px;
        padding-top: 10px;
      }
    }
  }
`
const Talks = styled(Workshops)`
  background-color: #f5f5f5;
`
const link = styled.a``
export default function about() {
  return (
    <Layout>
      <SEO title="About"></SEO>
      <StyleadHead>
        <h1> IWD'20 Details </h1>
      </StyleadHead>
      <DetailContent>
        <ImgContainer>
          <img src={require("../images/super_woman.svg")} alt="about IWD" />
        </ImgContainer>
        <Content>
          <h5>ABOUT THE EVENT</h5>
          <h1>International Women's Day 2020</h1>
          <p>
            International Women’s Day (IWD) is marked on March 8th every year.
            In different regions, the focus of celebrations ranges from general
            respect and appreciation for women to a celebration of women’s
            economic, political, and social achievements.
          </p>
          <Button
            as={link}
            href="https://www.internationalwomensday.com/"
            rel="noopener noreferrer"
            target="_blank"
          >
            Learn more
          </Button>
        </Content>
      </DetailContent>
      <SelebrationContent>
        <h1>Why Google Celebrate IWD?</h1>
        <p>
          From Ada Lovelace to Grace Hopper (and thousands of Googlers), we’re
          proud of the contributions women in technology make across our
          industry and across our company. Google supports and celebrates women
          in technology through numerous initiatives, including the Small
          Business Supplier Diversity and Accelerate with Google programs, the
          Google Cultural Institute, our Women@ employee resource group, and
          more. International Women’s Day is an important moment to recognize
          how women have influenced the tech industry and beyond.
        </p>
      </SelebrationContent>

      <Ideathon>
        <img
          src={require("../images/Artboard 3 copy.png")}
          alt="ideathon"
          width="20%"
        ></img>
        <p>{content.ideathon}</p>
        <h2 class="theme">This year's theme will be</h2>
        <p class="theme">
          <i>Women's online safety</i>
        </p>
      </Ideathon>

      <Container
        bg={theme.light_mode.colors.bg_grey}
        style={{
          paddingBottom: "64px",
        }}
      >
        <h1> Our Mentors </h1>
        <Speakers>{MentorsData}</Speakers>
      </Container>

      <Workshops>
        <h1>
          Workshops{" "}
          <span
            style={{
              display: "inline",
            }}
          >
            <img
              src={require("../images/workshops/learn.svg")}
              alt="learn workshops"
            />
          </span>
        </h1>
        <p>{content.workshops}</p>
        <Tracks>
          {workshops.map(workshop => (
            <TrackItem>
              <Track
                imgsource={require(`../images/workshops/${workshop.imgsource}`)}
                altimg={workshop.altimg}
                title={workshop.title}
                content={workshop.content}
              ></Track>
            </TrackItem>
          ))}
        </Tracks>
      </Workshops>
      <Container
        bg={theme.light_mode.colors.bg_grey_light}
        style={{
          paddingBottom: "64px",
        }}
      >
        <h1> Our Trainers </h1>
        <Speakers>{TrainersData}</Speakers>
      </Container>
      <Talks>
        <h1>
          Talks & Panel{" "}
          <span>
            <img src={talkpic} alt="Talks and panels" />
          </span>
        </h1>
        <p>{content.talks}</p>
        <Tracks>
          {talks.map(talk => (
            <TrackItem>
              <Track
                imgsource={require(`../images/talks/${talk.img}`)}
                altimg={talk.alt}
                title={talk.title}
                content={talk.content}
              ></Track>
            </TrackItem>
          ))}
        </Tracks>
      </Talks>
      <Container
        bg={theme.light_mode.colors.bg_grey}
        style={{
          paddingBottom: "64px",
        }}
      >
        <h1> Speakers </h1>
        <Speakers>{SpeakersData}</Speakers>
      </Container>
    </Layout>
  )
}
