import React from "react"
import styled from "styled-components"
import facebook from "../images/icons/facebook.svg"
import website from "../images/icons/website.svg"
import twitter from "../images/icons/twitter.svg"
import linkedin from "../images/icons/linkedin.svg"
const links = [
  {
    url: "#",
    icon: facebook,
    alt: "facebook icon",
  },
  {
    url: "#",
    icon: twitter,
    alt: "twitter icon",
  },
  {
    url: "#",
    icon: linkedin,
    alt: "linkedin icon",
  },
  {
    url: "#",
    icon: website,
    alt: "website icon",
  },
]
const SocialMedia = () => {
  return (
    <Container>
      {links.map(link => (
        <Link href={link.url} target="_blank">
          <Icon src={link.icon} alt={link.alt}></Icon>
        </Link>
      ))}
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 70%;
  a {
    padding: 0;
  }
  @media screen and (max-width: 768px) {
    justify-content: center;
    width: 70%;
    margin: 0 auto;
  }
`
const Link = styled.a`
  max-width: 25%;
`
const Icon = styled.img`
  margin-bottom: 0;
  width: 70%;
  max-width: 70px;
  opacity: 0.5;
  transition: 0.5s ease;
  &:hover {
    opacity: 1;
  }
  @media screen and (max-width: 768px) {
    margin-top: 1.45rem;
  }
`

export default SocialMedia
