import React from "react"

import Layout from "../components/layout/layout"

import SEO from "../components/seo"

import Main from "../components/Mains/MainHome"
const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Main></Main>
  </Layout>
)

export default IndexPage
