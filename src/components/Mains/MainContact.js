import React from "react"
import styled, { css } from "styled-components"
import { MainWrapper as Wrapper } from "../Container"
import ContactInfo from "../ContactInfo"
import ContactFrom from "../ContactFrom"
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
              main: "ESI , Ouedsmar algiers",
              snd: "Come visit anytime",
            }}
          ></ContactInfo>
          <ContactInfo
            contact={{
              icon: email,
              main: "wtm-algiers@esi.dz",
              snd: "send us an email",
            }}
          ></ContactInfo>
        </Contacts>
        <ContactFrom></ContactFrom>
      </Contact>

      <Position>
        <Title>Where Are we ?</Title>
      </Position>
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
  flex-direction: column;
  justify-content: space-around;
  min-height: 70vh;
`
const Position = styled(Landing)`
  background: #3f3d56;
`
const Contact = styled.section`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 80%;
  margin: auto;
  min-height: 50vh;
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
    justify-content: space-around;
    height: 52vh;
  }
`
