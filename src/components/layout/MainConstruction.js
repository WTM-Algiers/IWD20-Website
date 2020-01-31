import SC from "../SiteContstruction"
import Container from "../Container"
import React from "react"

export default function MainConstruction({ title }) {
  return (
    <Container>
      <SC title={title}></SC>
    </Container>
  )
}
