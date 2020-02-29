import React from "react"
import styled from "styled-components"
import { MainWrapper as Wrapper } from "../Container"
import Button from "../Button"
import Record from "../Record"
import { Link } from "gatsby"
import theme from "../../constants/theme.json"
/// pictures :
import homeHead from "../../images/super_woman.svg"
import homeAbout from "../../images/logo.svg"
import gdg from "../../images/partners/gdg_algiers.png"
import wtm from "../../images/partners/WTMAlgiersLogoDark.svg"
import github from "../../images/partners/github_education.svg"
import incubator from "../../images/partners/enp_incubator.svg"
import marker from "../../images/icons/marker.svg"
import event from "../../images/icons/event_icon.svg"
import EditionCard from "../../components/editionCard"
import ReverseEditionCard from "../../components/ReverseEditionCard"
import yassir from "../../images/partners/yassir-seeklogo.com.svg"
import techno from "../../images/partners/techno.png"
import soc from "../../images/partners/societe.png"
import sai from "../../images/partners/schoolai.png"
export default function MainHome() {
  return (
    <Wrapper>
      <Section
        style={{
          height: "90vh",
        }}
      >
        <Content
          style={{
            width: "fit-content",
          }}
        >
          <h5>WOMEN TECHMAKERS ALGIERS 2020</h5>
          <Title>IWD 20</Title>
          <p>
            <a href={enp} target="_blank" rel="noopener noreferrer">
              <span>
                <img src={marker} width="15px" alt="event location"></img>
              </span>{" "}
              Ecole Nationale Polytechniques Alger (ENP)
            </a>
            <br></br>
            <span>
              <img src={event} width="15px" alt="event date"></img>
            </span>{" "}
            March 6th-7th 2020
          </p>
          <Button as={Link} to="/register/iwd">
            Register
          </Button>
        </Content>
        <CustomImg src={homeHead} alt="Landing image"></CustomImg>
      </Section>
      <Section2>
        <CustomImg2 src={homeAbout} alt="Event Logo"></CustomImg2>
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
      <EditionsContainer>
        <h1> Our Editions </h1>
        <Editions>
          <EditionCard
            year="18"
            venue="Higher National School of Computer Science -ESI ex INI-"
            date="Marsh, 16th 2018"
          />
          <ReverseEditionCard
            year="19"
            venue="Centre Culturel Ali Maachi - Bordj El Bahri -"
            date="April, 27th 2019"
          />
        </Editions>
      </EditionsContainer>
      <Section4>
        <Record record={3} title="Editions" />
        <Record record={290} title="Happy participants" />
        <Record record={350} title="Registrations" />
      </Section4>
      <Section5>
        <Title
          style={{
            color: theme.light_mode.colors.title_dark,
            marginTop: "1.45rem",
          }}
        >
          ORGANIZERS
        </Title>
        <Partners>
          <div className="partner">
            <a
              href="https://wtm-algiers.tech/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <img src={wtm} alt="wtm-algiers"></img>
            </a>
          </div>
          <div className="partner">
            <a
              href="https://gdgalgiers.com/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <img src={gdg} alt="gdg-algiers"></img>
            </a>
          </div>
        </Partners>
      </Section5>
      <Section5
        style={{
          background: "#fafafa",
        }}
      >
        <Title
          style={{
            color: theme.light_mode.colors.title_dark,
          }}
        >
          OUR PARTNERS
        </Title>
        <Partners>
          <div className="partner">
            <a
              href="http://www.djezzy.dz/enpincubatorbydjezzy/#pourquoi-sinscrir"
              rel="noopener noreferrer"
              target="_blank"
            >
              <img
                src={incubator}
                alt="enp incubator by djezzy"
                width="50%"
              ></img>
            </a>
          </div>
          <div className="partner">
            <a
              href="https://www.linkedin.com/company/school-of-ai-algiers/?originalSubdomain=fr"
              rel="noopener noreferrer"
              target="_blank"
            >
              <img src={sai} alt="school of ai"></img>
            </a>
          </div>
        </Partners>
      </Section5>
      <Section5>
        <Title
          style={{
            color: theme.light_mode.colors.title_dark,
          }}
        >
          OUR SPONSORS
        </Title>
        <Partners>
          <div className="partner">
            <a
              href="https://yassir.io/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <img src={yassir} alt="yassir" width="50%"></img>
            </a>
          </div>
          <div className="partner">
            <a
              href="https://education.github.com/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <img src={github} alt="github education"></img>
            </a>
          </div>
          <div className="partner">
            <a
              href="http://techno-dz.org/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <img src={techno} alt="techno" width="70%"></img>
            </a>
          </div>
          <div className="partner">
            <a
              href="http://www.cgea-dz.org/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <img src={soc} alt="cgea"></img>
            </a>
          </div>
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
  padding-top: 5% 0;
  width: 100%;
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
    color: ${theme.light_mode.colors.subtitle_dark};
  }
  p a {
    text-decoration: none;
    opacity: 0.8;
    color: #00bfa5;
    &:hover {
      opacity: 1;
    }
    &:visited {
      color: #4285f4;
    }
  }
`
const CustomImg = styled.img`
  width: 30%;
  margin-left: 5%;
  @media screen and (max-width: 768px) {
    width: 80%;
  }
`

const CustomImg2 = styled.img`
  width: 20%;
  @media screen and (max-width: 1222px) {
    width: 20%;
  }
  @media screen and (max-width: 768px) {
    width: 50%;
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

const EditionsContainer = styled.div`
  padding: 64px;
  padding-top: 0px;
  margin-top: 64px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  h1 {
    font-size: 48px;
    margin-top: 2%;
    font-weight: 500;
  }
`

const Editions = styled.div`
  margin-top: 64px;
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
    #1ce9b6,
    #00d8db,
    #00c2fa,
    #00a7ff,
    #4285f4
  );
  h1 {
    margin-top: 2%;
    font-weight: 500;
  }
`
const Section5 = styled(Section3)`
  margin-top: 0;

  min-height: 50vh;
  @media screen and (max-width: 768px) {
    padding-top: 50px;
    justify-content: space-evenly;
  }
`

const Title = styled.h1`
  font-family: sans-serif;
  color: ${theme.light_mode.colors.title_dark};
`

const Partners = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  text-align: center;
  justify-content: space-around;
  align-items: center;
  margin: 0 5%;
  div.partner {
    flex: 1;
    min-width: 20%;
    max-width: 25%;
    max-height: 25%;
    cursor: pointer;
    margin: 0 20px;
    opacity: 0.8;
    transition: 0.5s ease;
    &:hover {
      opacity: 1;
    }
    text-align: center;
    img {
      max-height: 50%;
    }
    @media screen and (max-width: 768px) {
      width: 80%;
      max-width: 100%;
      max-height: 100%;
      img {
        margin: 10% 0;
      }
    }
  }
  @media screen and (max-width: 768px) {
    flex-direction: column;
    justify-content: space-between;
  }
`

const enp =
  "https://www.google.com/maps/place/Ecole+Nationale+Polytechnique/@36.7232318,3.1507596,15z/data=!4m2!3m1!1s0x0:0x2bb008bbddc747d3?sa=X&ved=2ahUKEwjB-dnypMrnAhWIsBQKHejSCNkQ_BIwFnoECAsQCA"
