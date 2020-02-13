import React from "react"
import styled from 'styled-components'

const StyledEditionCard = styled.div`
    display: flex;
    flex-direction: row-reverse;
    justify-content: flex-start;
    margin-right: 19rem !important;
    @media screen and (max-width: 768px)  {
        flex-direction: row;
        margin-left: 3rem;
        margin-right: 0 !important;
    }
`

const Divider = styled.div`
    width: 0.3rem;
    height: 16rem;
    background: #F5F5F5;
    position: absolute;
    border-radius: 8px;
    z-index: 1;
`

const BackgroundEclipse = styled.div`
    width: 1.5rem;
    height: 1.5rem;
    background: #F5F5F5;
    border-radius: 100%;
    position: absolute;
    margin-left: -0.6rem;
    margin-top: 7rem;
    z-index: 2;
`
const FrontEclipse = styled.div`
    width: 0.8rem;
    height: 0.8rem;
    background: #6C63FF;
    border-radius: 100%;
    position: absolute;
    margin-left: -0.3rem;
    margin-top: 7.35rem;
    z-index: 3;
`

const StyledCard = styled.div`
    width: 16rem;
    height: 8.5rem;
    box-shadow: 0 10px 27px 3px rgba(204,204,204,.2);
    padding: 24px 32px;
    margin-top: 3.5rem;
    margin-right: 3rem;
    h4{
        text-align: center;
        margin-bottom: 12px;
    }
    @media screen and (max-width: 768px)  {
        margin-left: 3rem;
    }
`

const PlaceSection = styled.div`
    display: flex;
    flex-direction: row;
    jystify-content: flex-start;
    margin-bottom: -18px;
    margin-left: 4px;
    p{
        font-size: 12px;
        margin-left: 12px;
        line-height: 16pt;
    }
`

const DateSection = styled(PlaceSection)`
    margin-left: 0px;
    p{
        margin-left: 8px;
    }
`

const IconContainer = styled.div`
    width: 1.2rem;
    height: 1.2rem;
    img{
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
`

const editionCard = ({year, venue, date}) => (
    <StyledEditionCard>
        <div>
            <Divider/>
            <BackgroundEclipse/>
            <FrontEclipse/>
        </div>
        <StyledCard>
            <h4> IWD'{year} </h4>
            <PlaceSection>
                <IconContainer>
                    <img src={require("../images/icons/placeholder.png")} alt="placeholder"/>
                </IconContainer>
                <p>{venue}</p>
            </PlaceSection>
            <DateSection>
                <IconContainer>
                    <img src={require("../images/icons/calendar.png")} alt="calendar"/>
                </IconContainer>
                <p>{date}</p>
            </DateSection>
        </StyledCard>
    </StyledEditionCard>
)

export default editionCard