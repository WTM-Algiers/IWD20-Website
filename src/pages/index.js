import React from "react"

import Layout from "../components/layout/layout"

import SEO from "../components/seo"

import MainConstruction from "../components/layout/MainConstruction"
const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <MainConstruction title="Home"></MainConstruction>
  </Layout>
)

export default IndexPage
