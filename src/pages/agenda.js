import React from "react"
import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import styled from "styled-components"
// TODO : Implement Page
// TODO : Add Agenda to the page ( the actual agenda)


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


export default function agenda() {
  return (
    <Layout>
      <SEO title="Agenda"></SEO>
      <StyleadHead>
        <h1> IWD'20 Agenda & Speakers </h1>
      </StyleadHead>
    </Layout>
  )
}
