import React from "react"
import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import styled from "styled-components"
import { Link } from "gatsby" 

import Button from "../components/Button"
// TODO : Implement Page
// TODO : Add Description of IWD
// TODO : Add past editions timeline
// TODO : Add Ideathon , Confs , Workshops Sections
// TODO : Add Speakers section

const StyleadHead = styled.div`
  height: 40vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-image: linear-gradient(
    to right top,
    #051937,
    #17213f,
    #252a46,
    #32334e,
    #3f3d56
  );
  h1{
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
`

const ImgContainer = styled.div`
  width: 40%;
  img{
    max-width: 100%;
    max-height: 100%;

    min-width: 100%;
    min-width: 100;

    object-fit:contain;
  }
`

const Content = styled.div`
  width: 40%;
  font-family: sans-serif;
  h1{
    margin-top: 2%;
    font-weight: 500;
  }
  h5 {
    font-weight: 500;
    color: #626263;
  }
`
const SelebrationContent = styled(Content)`
  width: 100%;
  padding: 64px;
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
          <img src={require("../images/home_about.png")} alt="about IWD"/>
        </ImgContainer>
        <Content>
          <h5>ABOUT THE EVENT</h5>
          <h1>International Women's Day 2020</h1>
          <p>
            International Women’s Day (IWD) is marked on March 8th every year. In different regions, the focus 
            of celebrations ranges from general respect and appreciation for women to a celebration of women’s 
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
            From Ada Lovelace to Grace Hopper (and thousands of Googlers), we’re proud of the contributions 
            women in technology make across our industry and across our company. Google supports and celebrates 
            women in technology through numerous initiatives, including the Small Business Supplier Diversity 
            and Accelerate with Google programs, the Google Cultural Institute, our Women@ employee resource 
            group, and more. International Women’s Day is an important moment to recognize how women have 
            influenced the tech industry and beyond.
          </p>
      </SelebrationContent>
    </Layout>
  )
}
