import React,{useState} from 'react'
import {links} from './navbar'

import styled from 'styled-components'
const  RegisterLayout = ({children})=> {
    return (
        <>
        <RegisterHeader>
            
        <RegisterNavbar>
                {links}    
            </RegisterNavbar> 
                    
        </RegisterHeader>
                  <main>
            {children}
        </main>  
        </>
    )
}
//* Styled Components 


const RegisterHeader = styled.header`
    display : flex;
    height : 10vh;
    width : 100%;
    position : absolute;
    justify-content : flex-start;
    background-color : transparent;
    align-items : center ;
    z-index :999;
`;
const RegisterNavbar = styled.nav`
    display : flex;
    margin-left : auto;
    width:50%;
    justify-content : space-around;
    align-items : center ;
    font-family : sans-serif;
    @media screen and (max-width : 768px) {
        width : 100%
    }
    a {
        text-decoration : none;
        font-size : 1rem;
        color: rgb(10,10,10);
        opacity : 0.5;
        &:hover{
            opacity : 0.75;
            color : royalblue 
            }
        &:active{
            opacity: 1;
            text-decoration : underline;
            
        }
    }
`;

export default RegisterLayout;