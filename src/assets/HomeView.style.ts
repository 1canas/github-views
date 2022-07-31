import styled from "styled-components"
import { colorConstants } from "./constants"

export const Link = styled.a`
    position: fixed;
    margin: 1.5%;

    & svg {
        width: 5rem;
        height: 5rem;
        
        color: ${colorConstants.darkGreen}
    }
`

export const Layout = styled.section`
    height: 100vh;

    display: flex;
    justify-content: center;
`