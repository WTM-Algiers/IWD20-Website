import React from "react"
import styled from "styled-components"
import { MainWrapper as Wrapper } from "../Container"
import ContactInfo from "../ContactInfo"
import ContactFrom from "../ContactFrom"
import Location from "../Location"
import theme from "../../constants/theme.json"
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
              alt: "call",
              main: "+213 776 66 90 08",
              snd: "Call us anytime we will surely answer",
            }}
          ></ContactInfo>
          <ContactInfo
            contact={{
              icon: home,
              alt: "home",
              main: "ESI , Ouedsmar algiers",
              snd: "Come visit anytime",
            }}
          ></ContactInfo>
          <ContactInfo
            contact={{
              icon: email,
              alt: "email",
              main: "wtm.algiers@esi.dz",
              snd: "send us an email",
            }}
          ></ContactInfo>
        </Contacts>
        <ContactFrom></ContactFrom>
      </Contact>
      <GoogleMaps>
        <Location></Location>
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
  background: ${theme.light_mode.colors.dark};
  min-height: 40vh;
`
const Title = styled.h1`
  font-family: sans-serif;
  color: white;
  font-weight: 400;
  margin: 0 5%;
  @media screen and (max-width: 768px) {
    .emoji {
      display: block;
    }
  }
`
const GoogleMaps = styled(Section)`
  flex-direction: column;
  justify-content: space-around;
  height: 70vh;
`
const Contact = styled.section`
  padding: 64px;
  width: 100%;
  display: flex;
  justify-content: space-around;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    margin-top: 5%;
    padding-left: 0;
    padding-right: 0;
  }
`
const Contacts = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 768px) {
    width: 80%;
    margin: 0 auto;
    justify-content: space-around;
    height: 52vh;
  }
`
