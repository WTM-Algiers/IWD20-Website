import React from "react"
import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import styled from "styled-components"
import { Link } from "gatsby"
import theme from "../constants/theme.json"
import Button from "../components/Button"
import SpeakerCard from "../components/speakerCard"
import EditionCard from "../components/editionCard"
import ReverseEditionCard from "../components/ReverseEditionCard"
// TODO : Implement Page
// TODO : Add Description of IWD
// TODO : Add past editions timeline
// TODO : Add Ideathon , Confs , Workshops Sections
// TODO : Add Speakers section

const SpeakersList = [
  {
    picture: require("../images/speakers/amel.jpg"),
    name: "Amel AZZI",
    role: "Engineer",
    detail: "Orange Application for business",
    linkedin: "https://www.linkedin.com/in/try-ajitiono/",
    facebook: "https://www.linkedin.com/in/try-ajitiono/",
  },
  {
    picture: require("../images/speakers/amel.jpg"),
    name: "Amel AZZI",
    role: "Engineer",
    detail: "Orange Application for business",
    linkedin: "https://www.linkedin.com/in/try-ajitiono/",
    facebook: "https://www.linkedin.com/in/try-ajitiono/",
  },
  {
    picture: require("../images/speakers/amel.jpg"),
    name: "Amel AZZI",
    role: "Engineer",
    detail: "Orange Application for business",
    linkedin: "https://www.linkedin.com/in/try-ajitiono/",
    facebook: "https://www.linkedin.com/in/try-ajitiono/",
  },
  {
    picture: require("../images/speakers/amel.jpg"),
    name: "Amel AZZI",
    role: "Engineer",
    detail: "Orange Application for business",
    linkedin: "https://www.linkedin.com/in/try-ajitiono/",
    facebook: "https://www.linkedin.com/in/try-ajitiono/",
  },
  {
    picture: require("../images/speakers/amel.jpg"),
    name: "Amel AZZI",
    role: "Engineer",
    detail: "Orange Application for business",
    linkedin: "https://www.linkedin.com/in/try-ajitiono/",
    facebook: "https://www.linkedin.com/in/try-ajitiono/",
  },
  {
    picture: require("../images/speakers/amel.jpg"),
    name: "Amel AZZI",
    role: "Engineer",
    detail: "Orange Application for business",
    linkedin: "https://www.linkedin.com/in/try-ajitiono/",
    facebook: "https://www.linkedin.com/in/try-ajitiono/",
  },
  {
    picture: require("../images/speakers/amel.jpg"),
    name: "Amel AZZI",
    role: "Engineer",
    detail: "Orange Application for business",
    linkedin: "https://www.linkedin.com/in/try-ajitiono/",
    facebook: "https://www.linkedin.com/in/try-ajitiono/",
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
  @media screen and (max-width: 768px) {
    text-align: center;
  }
`

const EditionsContainer = styled.div`
  padding: 64px;
  padding-top: 0px;
  padding-bottom: 192px;
  display: flex;
  flex-direction: column;
  align-items: center;
  h1 {
    font-size: 48px;
    margin-top: 2%;
    font-weight: 500;
  }
`

const SpeakersContainer = styled.div`
  background-color: #f5f5f5;
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 64px;
  h1 {
    font-size: 48px;
    margin-top: 2%;
    font-weight: 500;
  }
`

const Editions = styled.div`
  margin-top: 64px;
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
          <Button as={Link} to="/contact">
            Contact Us
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
      <SpeakersContainer>
        <h1> Our Speakers </h1>
        <Speakers>{Speaker}</Speakers>
      </SpeakersContainer>
    </Layout>
  )
}
