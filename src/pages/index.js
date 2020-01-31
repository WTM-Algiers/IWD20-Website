import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout/layout"

import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Link to="/register">Register</Link>
  </Layout>
)

export default IndexPage
