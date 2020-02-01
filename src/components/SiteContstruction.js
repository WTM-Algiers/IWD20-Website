import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import image from "../images/site_construction.png"

/**
 * This component is Used in order to display a temporary component that is under construction(a page in this context)
 * @param {title} title
 */
const SiteContstruction = ({ title }) => {
  return (
    <Container>
      <img src={image} alt="construction"></img>
      <h1> {title} page is under construction , see soon :D </h1>
      <Button>
        <Link to="/register">Register Now</Link>
      </Button>
    </Container>
  )
}

//* Styled components :

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  img {
    width: 20em;
  }
  h1 {
    color: rgba(229, 128, 175, 1);
    font-size: 2em;
    font-weight: 500;
    margin: 0 10%;
    text-align: center;
  }
  @media screen and (max-width: 768px) {
    img {
      width: 60%;
    }
    h1 {
      font-size: 1em;
    }
  }
  @media screen and (max-width: 568px) {
    img {
      width: 50%;
    }
    font-size: 1em;
  }
`
const Button = styled.button`
  padding: 1rem;
  margin-top: 2rem;
  border-radius: 3px;
  background: transparent;
  border: 3px solid #6bb5fb;
  a {
    color: #6bb5fb;
    text-decoration: none;
    font-family: sans-serif;
  }
`

export default SiteContstruction
