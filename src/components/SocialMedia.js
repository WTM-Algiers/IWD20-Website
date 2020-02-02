import React from "react"

import styled from "styled-components"
import facebook from "../images/icons/facebook.svg"
import website from "../images/icons/website.svg"
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
        <img src={linkedin}></img>
      </Link>
      <Link href="#">
        <img src={website}></img>
      </Link>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: fit-content;
  a {
    padding: 0;
  }
  @media screen and (max-width: 768px) {
    justify-content: center;
    width: 100%;
  }
`
const Link = styled.a`
  img {
    max-width: 50%;
    width: 50%;
    opacity: 0.5;
    transition: 0.5s ease;
    &:hover {
      opacity: 1;
    }
    @media screen and (max-width: 768px) {
      margin-top: 1.45rem;
    }
  }
`

export default SocialMedia
