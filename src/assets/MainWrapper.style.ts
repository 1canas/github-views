import styled from "styled-components"
import { colorConstants } from "./constants"

export const Wrapper = styled.article`
    width: 70%;
    float: left;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const Title = styled.h1`
    margin-bottom: 0;
    
    font-size: 4rem;
    color: ${colorConstants.darkGreen};
    font-weight: 700;
`

export const SubTitle = styled.h2`
    margin-top: .5%;
    margin-bottom: 3%;
    
    font-size: 2.5rem;
    color: ${colorConstants.green};
    font-weight: 500;
`

export const Footer = styled.footer`
    width: 100%;

    display: flex;
    align-items: flex-end;
    justify-content: center;
    
    color: ${colorConstants.green};
    font-size: .85rem;
`