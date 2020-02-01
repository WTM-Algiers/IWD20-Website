import React from "react"

import styled from "styled-components"
import facebook from "../images/icons/facebook.svg"
import github from "../images/icons/github.svg"
import twitter from "../images/icons/twitter.svg"
import linkedin from "../images/icons/linkedin.svg"
const SocialMedia = () => {
  return (
    <Container>
      <Link href="#">
        {" "}
        <img src={facebook}></img>
      </Link>
      <Link href="#">
        <img src={twitter}></img>
      </Link>
      <Link href="#">
        <img src={github}></img>
      </Link>
      <Link href="#">
        <img src={linkedin}></img>
      </Link>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`
const Link = styled.a`
  img {
    width: 100%;
  }
`

export default SocialMedia
