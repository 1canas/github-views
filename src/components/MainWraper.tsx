import React, { SetStateAction } from "react"

// components
import Form from "./Form"

// style
import { Wrapper, Title, SubTitle, Footer } from "../assets/MainWrapper.style"

interface IProps {
    setUser: React.Dispatch<SetStateAction<string>>
}

export default function Main (props: IProps) {
    return (
        <>
            <Wrapper>
                <Title>Github Stats ✨</Title>
                <SubTitle>See your github user stats.</SubTitle>

                <Form setUser={props.setUser}/>
                <Footer>Made by canas</Footer>
            </Wrapper>
        </>
    )
}