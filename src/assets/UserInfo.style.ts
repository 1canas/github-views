import styled from "styled-components"
import { colorConstants } from "./constants"

export const InfoWrapper = styled.article`
    width: 40%;
    float: left;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    background-color: ${colorConstants.green};
    color: ${colorConstants.white};

    animation: showUserInfo .4s;

    @keyframes showUserInfo {
        from {
            opacity: 0;
            width: 0;
        } to {
            opacity: 1;
            width: inherit
        }
    }
` 

export const InfoContainer = styled.div`
    width: 70%;
`

export const Avatar = styled.img`
    width: 55%;

    border-radius: 100%;
    background-color: ${colorConstants.white};
`

export const Name = styled.h3`
    margin: 3% 0 1% 0;
    font-size: 2rem;
    font-weight: bold;
`

export const Login = styled.h5`
    margin: 0;
    font-size: 1.35rem;
    font-weight: 500;
`
export const Bio = styled.p`
    text-align: center;
    font-size: 1.15rem;
`

export const List = styled.ul`
    display: flex;
    justify-content: space-between;

    list-style: none;

    margin: 0;
    padding: 0;
`