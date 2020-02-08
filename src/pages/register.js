import React from "react"
import Layout from "../components/layout/baseLayout"
import SEO from "../components/seo"

export default function register() {
  return (
    <Layout>
      <SEO title="Register"></SEO>
      <div style={{ height: "90vh" }}>
        <iframe
          id="typeform-full"
          width="100%"
          title="register form"
          height="100%"
          frameborder="0"
          src="https://nassim780857.typeform.com/to/dxD0Pq"
        ></iframe>
      </div>
    </Layout>
  )
}
