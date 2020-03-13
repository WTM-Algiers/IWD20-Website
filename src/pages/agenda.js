import React from "react"
import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import styled from "styled-components"
import theme from "../constants/theme.json"
import { MainWrapper as Wrapper } from "../components/Container"
import Loading from "../components/Loading"
import LazyLoad from "react-lazyload"
import agendapic from "../images/agenda-svg.svg"
// TODO : Implement Page
// TODO : Add Agenda to the page ( the actual agenda)

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
const Agenda = styled.img`
  width: 100%;
  padding-top: 5%;
  @media screen and (max-width: 768px) {
  }
`
export default function agenda() {
  return (
    <Layout>
      <SEO title="Agenda"></SEO>
      <Wrapper>
        <LazyLoad key="agenda" placeholder={<Loading></Loading>}>
          <Agenda src={agendapic} alt="agenda of event"></Agenda>
        </LazyLoad>
      </Wrapper>
    </Layout>
  )
}
