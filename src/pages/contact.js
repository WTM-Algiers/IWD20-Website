import React from "react"
import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import MainConstruction from "../components/layout/MainConstruction" /// this must be removed after main area is built and integrated
//TODO: Implement Page
//TODO : Add maps api to location
// TODO : Add contact and messaging form

export default function contact() {
  return (
    <Layout>
      <SEO title="Contact Us"></SEO>
      <MainConstruction title="Contact"></MainConstruction>
    </Layout>
  )
}
