import React from "react"
import styled from "styled-components"
import { MainWrapper as Wrapper } from "../Container"
import ContactInfo from "../ContactInfo"
/// svgs :
import call from "../../images/icons/call.svg"
import email from "../../images/icons/email.svg"
import home from "../../images/icons/home.svg"

//TODO : ADD CONTACT FORM .
//TODO : ADD GOOGLE MAPS API to our location
export default function MainContact() {
  return (
    <Wrapper>
      <Landing>
        <Title>WTM Algiers Contacts</Title>
      </Landing>
      <Contact>
        <Contacts>
          <ContactInfo
            contact={{
              icon: call,
              main: "+21315513514",
              snd: "Call us anytime we will surely answer",
            }}
          ></ContactInfo>
          <ContactInfo
            contact={{
              icon: home,
              main: "ESI , OuedSmar algiers",
              snd: "Come visit anytime",
            }}
          ></ContactInfo>
          <ContactInfo
            contact={{
              icon: email,
              main: "Or hit us on email",
              snd: "send us a letter",
            }}
          ></ContactInfo>
        </Contacts>
        <div style={{ width: "100%" }}>
          <h2 style={{ textAlign: "center" }}>Contact Form...</h2>
        </div>
      </Contact>

      <Location>
        <Title>Where Are we ?</Title>
      </Location>
      <GoogleMaps>
        <Title>Google Maps API</Title>
      </GoogleMaps>
    </Wrapper>
  )
}

const Section = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`
const Landing = styled(Section)`
  text-align: center;
  background: #3f3d56;
  min-height: 30vh;
`
const Title = styled.h1`
  font-family: sans-serif;
  color: white;
  font-weight: 400;
  margin: 0 5%;
`
const GoogleMaps = styled(Section)`
  background: grey;
  min-height: 70vh;
`
const Location = styled(Landing)`
  background: #3f3d56;
`
const Contact = styled.section`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 80%;
  margin: auto;
  min-height: 70vh;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    margin-top: 5%;
  }
`
const Contacts = styled.div`
  display: flex;
  height: 100%;
  width: 35%;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  @media screen and (max-width: 768px) {
    width: 80%;
    margin: 0 auto;
    justify-content: center;
    height: 50%;
  }
`
