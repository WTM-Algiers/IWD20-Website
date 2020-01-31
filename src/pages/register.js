import React from "react"
import Layout from "../components/layout/registerLayout"
import SEO from "../components/seo"

// TODO : Implement the Page
// TODO : Add Typeforms integration
import { ReactTypeformEmbed } from "react-typeform-embed"

export default function register() {
  return (
    <Layout>
      <SEO title="Register"></SEO>

      <ReactTypeformEmbed url="https://nassim780857.typeform.com/to/dxD0Pq"></ReactTypeformEmbed>
    </Layout>
  )
}
