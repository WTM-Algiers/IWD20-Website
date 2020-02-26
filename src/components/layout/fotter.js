import React,  { useState } from "react"
import styled from 'styled-components'
import { encode } from "../ContactFrom"

const StyledFooter = styled.div`
    background: #04091E;
    padding: 100px 70px;
    display: grid;
    grid-template-columns: 3fr 3fr 1fr;
    @media screen and (max-width: 768px) {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
      }
`;

const Content = styled.div`
    margin-right: 32px;
    h4{
        color: white;
        font-size: 18px;
        font-weight: 500;
        margin-bottom: 25px;
    }
    p{
        color: #707070;
        margin-top: 0;
        margin-bottom: 1rem;
        font-weight: 300;
        font-size: 14px;
        line-height: 1.5em;
    }
`;

const InputContainer = styled.div`
    display: flex;
    flex-direction: row;
    background: red;
    height: 2.4rem;
    justify-content: flex-start;
    @media screen and (max-width: 768px) {
        width: 110%;
        margin-top: -8px;
    }
`;

const StyledInput = styled.input`
    padding: 10px 18px;
    width: 100%;
    border: none;
    border-radius: 0;
    font-size: 14px;
    font-weight: 300;
    outline: 0;
`;

const BtnContainer = styled.button`
    background: #8490FF;
    width: 10%;
    border: none;
    outline: none;
    margin-left: 0;
    padding: 8px;
    :hover{
        cursor: pointer;
    }
    img{
        width: 70%;
        height: 60%;
        margin-top: 3px;
        object-fit: contain;
    }
    @media screen and (max-width: 768px) {
        width: 15%;
    }
`;

const SocialMediaContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    margin-top: 32px;
    @media screen and (max-width: 768px) {
        justify-content: flex-start;
        margin-top: -8px;
    }
`;

const SocialMedia = styled.div`
    align-self: center;
    width: 16px;
    height: 16px;
    :first-child{
        margin-left: -18px;
    }
    img{
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
    @media screen and (max-width: 768px) {
        margin-left: 18px;
        :first-child{
            margin-left: 0px;
        }
    }
`;

export default function Footer() {
    const [state, setState] = useState({})

    const handleSubmit = e => {
      e.preventDefault()
      const form = e.target
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({
          "form-name": form.getAttribute("name"),
          ...state,
        }),
      })
        .then(() => SavedEmail())
        .catch(error => alert(error))
    }
    const handleChange = e => {
      setState({ ...state, [e.target.name]: e.target.value })
    }
    const SavedEmail = () => {
      alert("Thank you for registering this email 😉" + state.email)
    }
    return(
        <StyledFooter>
            <Content>
                <h4> About Us </h4>
                <p> We have tested a number of registry fix and clean utilities and 
                    present our top 3 list on our site for your convenience. </p>
                <p> Copyright ©2020 All rights reserved | This website is made with 
                    <span role="img" aria-label="heart">
                        ❤️
                    </span>
                    by WTM Algiers </p>
            </Content>
            <Content>
                <h4> Newsletter </h4>
                <p> Stay up to date with our latest trends </p>
                <form name="newsletter" method="POST" onSubmit={handleSubmit} data-netlify={true}>
                    <InputContainer>
                        <StyledInput placeholder="Enter email address" 
                            name="email"
                            type="email"
                            onChange={handleChange}/>
                        <BtnContainer type="submit">
                            <img  src={require("../../images/right-arrow.png")} alt="send"/>
                        </BtnContainer>
                    </InputContainer>
                </form>
            </Content>
            <Content>
                <h4> Follow Us </h4>
                <p> Let us be social </p>
                <SocialMediaContainer>
                    <SocialMedia>
                        <a href="https://www.facebook.com/WomenTechmakersAlgiers/">
                            <img src={require("../../images/logos/facebook-icon-white.png")} alt="facebook"/>
                        </a>
                    </SocialMedia>
                    <SocialMedia>
                        <a href="https://twitter.com/AlgiersWTM">
                            <img src={require("../../images/logos/twitter-icon-white.png")} alt="twitter"/>
                        </a>
                    </SocialMedia>
                    <SocialMedia>
                        <a href="https://www.wtm-algiers.tech/">
                            <img src={require("../../images/icons/website.png")} alt="website"/>
                        </a>
                    </SocialMedia>
                    <SocialMedia>
                        <a href="https://www.linkedin.com/company/wtm-algiers/">
                            <img src={require("../../images/logos/linkedin-icon-white.png")} alt="linkedIn"/>
                        </a>
                    </SocialMedia>
                </SocialMediaContainer>
            </Content>
        </StyledFooter>
    )
}
