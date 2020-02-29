import React from "react"
import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import styled from "styled-components"
import { Link } from "gatsby"
import theme from "../constants/theme.json"
import Button from "../components/Button"
import Track from "../components/Track"

import gatsby from "../images/workshops/gatsby.svg"
import flutter from "../images/workshops/flutter.svg"
import ML from "../images/workshops/ML.svg"
import CS from "../images/workshops/cs.svg"
import SpeakerCard from "../components/speakerCard"

// TODO : Implement Page
// TODO : Add Description of IWD
// TODO : Add past editions timeline
// TODO : Add Ideathon , Confs , Workshops Sections
// TODO : Add Speakers section

const SpeakersList = [
  {
    picture: require("../images/speakers/amel.jpg"),
    name: "Fayçal ZEMMOUR",
    role: "Engineer",
    detail: "Orange Application for business",
    linkedin:
      "https://www.linkedin.com/in/fay%C3%A7al-zemmour-908680aa/?originalSubdomain=dz",
    facebook:
      "https://web.facebook.com/people/Fay%C3%A7al-Zemmour/100010969845387?_rdc=1&_rdr",
    twitter: "https://twitter.com/faycal_zemmour?s=20",
  },
  {
    picture: require("../images/speakers/amel.jpg"),
    name: "Walid FELLAH",
    role: "User Experience Designer",
    detail: "BEYN beyn.io",
    linkedin: "https://www.linkedin.com/in/walid-fellah/?originalSubdomain=dz",
    facebook: "https://web.facebook.com/walidweb7?_rdc=1&_rdr",
    twitter: "https://twitter.com/",
  },
  {
    picture: require("../images/speakers/amel.jpg"),
    name: "Feriel OUCIF",
    role: "Digital Strategist",
    detail: "IONE Company",
    linkedin:
      "https://www.linkedin.com/in/ferial-oucif-635a6016b/?originalSubdomain=dz",
    facebook:
      "https://web.facebook.com/Hisabatic.ione?__tn__=lC-R&eid=ARCeYiZ-fKOYqrXF4E4mcIpG6khfp2cU2E6ONxyLhpmL4DcYzs7MFiXm4j6-PuCnHyRGhNjxXDRXc8an&hc_ref=ARQTxUrVqj1Sg5CQxDWfPpFthALoo1dNVl2UHA883lqevLNst320qUB04XO-j8MZJ6c&ref=nf_target",
    twitter: "https://twitter.com/",
  },
  {
    picture: require("../images/speakers/amel.jpg"),
    name: "Ikram Loubna Nour",
    role: "Marketer",
    detail: "ICONE Consultancy Agency",
    linkedin:
      "https://www.linkedin.com/in/ikram-loubna-nour-b36b81106/?originalSubdomain=dz",
    facebook: "https://web.facebook.com/ikramloubnanour",
    twitter: "https://twitter.com/",
  },
  {
    picture: require("../images/speakers/amel.jpg"),
    name: "Ikram Loubna Nour",
    role: "Former Project Manager",
    detail: "EADN",
    linkedin:
      "https://www.linkedin.com/in/ikram-loubna-nour-b36b81106/?originalSubdomain=dz",
    facebook: "https://web.facebook.com/ikramloubnanour",
    twitter: "https://twitter.com/",
  },
  {
    picture: require("../images/speakers/amel.jpg"),
    name: "Amel DELLI",
    role: "Former Project Manager",
    detail: "EADN",
    linkedin: "https://www.linkedin.com/in/ameldelli/?originalSubdomain=dz",
    facebook: "https://web.facebook.com/",
    twitter: "https://twitter.com/Amel_DELLI?s=20",
  },
  {
    picture: require("../images/speakers/amel.jpg"),
    name: "Leila BENYOUCEF",
    role: "",
    detail: "",
    linkedin:
      "https://www.linkedin.com/in/leila-benyoucef/?originalSubdomain=dz",
    facebook: "https://web.facebook.com/",
    twitter: "https://twitter.com/",
  },
]

const Speaker = SpeakersList.map(mbr => (
  <SpeakerCard
    key={mbr.name}
    picture={mbr.picture}
    name={mbr.name}
    role={mbr.role}
    detail={mbr.detail}
    linkedin={mbr.linkedin}
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

const Title = styled.h1`
  font-family: sans-serif;
  color: ${theme.light_mode.colors.title_dark};
`

const content = {
  talks:
    "Acquiring technical skills only never could be enough so we are having series of both technical and soft talks. Moreover, multiple panels will be held by stellar women who are going to share their successful stories in several fields.",
  workshops:
    "Since celebration could never be done without having some tech snacks, we are giving you , technology passionates, the opportunity to explore more about web development, mobile development and AI through fruitful workshops. As well as for no programmers, a special track is waiting to you.",
  ideathon: `An ideathon is a moderated idea marathon that helps people address some of the most pressing challenges of our time. IWD Ideathon main goal is to help the community evolve, by attempting to solve problems related to a specific theme.Participants will work in teams and use design thinking and innovative learning practices to ideate and collaborate on possible solutions under mentorship of experienced coaches.`,
}

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
  background-color: #f5f5f5;
  display: flex;
  align-items: center;
  flex-direction: column;
  text-align: center;
  padding: 20px;
  h1 {
    font-size: 48px;
    margin-top: 2%;
    font-weight: 500;
  }
`
const SpeakersContainer = styled(Container)``

const Ideathon = styled(Container)`
  p {
    margin-top: 5%;
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
  padding-bottom: 64px;
  p {
    margin-top: 5%;
    max-width: 80%;
    text-align: center;
  }
  h1 {
    color: #4285f4;
    position: relative;
    span {
      position: relative;
      img {
        position: relative;
        top: 10px;
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
      </Ideathon>
      {/**
       * <SpeakersContainer>
        <h1> Our Mentors </h1>
        <Speakers>{Speaker}</Speakers>
      </SpeakersContainer>
       * 
       */}

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
              width="70px"
              style={{
                margin: 0,
                paddingTop: 10,
              }}
            />
          </span>
        </h1>
        <p>{content.workshops}</p>
        <Tracks>
          <TrackItem>
            <Track
              imgsource={gatsby}
              altimg="Gatsby workshop"
              title="Web developement in Gatsby/React"
              content="Learn how how build your first site with the powerful framework Gatsby"
            ></Track>
            <Button
              as={link}
              href="https://www.gatsbyjs.org/"
              rel="noopener noreferrer"
              target="_blank"
            >
              Get Started
            </Button>
          </TrackItem>
          <TrackItem>
            <Track
              imgsource={flutter}
              altimg="Flutter workshop"
              title="Mobile developement in Flutter"
              content="Build cool looking apps in record times using Flutter"
            ></Track>
            <Button
              as={link}
              href="https://flutter.dev/"
              rel="noopener noreferrer"
              target="_blank"
            >
              Get Started
            </Button>
          </TrackItem>
          <TrackItem>
            <Track
              imgsource={ML}
              altimg="AI workshop"
              title="Artificiel Intelligence"
              content="Grasp the concepts behind intelligent apps and build one yourself"
            ></Track>
            <Button
              as={link}
              href="https://www.anaconda.com/distribution/"
              rel="noopener noreferrer"
              target="_blank"
            >
              Get Started
            </Button>
          </TrackItem>
          <TrackItem>
            <Track
              imgsource={CS}
              altimg="Basic Computer Science"
              title="Basic Computer Science"
              content="Discover a new field and some of its core concepts"
            ></Track>
            <Button
              as={link}
              href="https://en.wikipedia.org/wiki/Computer_science"
              rel="noopener noreferrer"
              target="_blank"
            >
              Learn more
            </Button>
          </TrackItem>
        </Tracks>
      </Workshops>
      {/**
       * <Container>
        <h1> Our Trainers </h1>
        <Speakers>{Speaker}</Speakers>
      </Container>
       * 
       */}
      {/**
          * <Talks></Talks>
       * <Container>
        <h1> Speakers </h1>
        <Speakers>{Speaker}</Speakers>
      </Container>
       * 
       */}
    </Layout>
  )
}
