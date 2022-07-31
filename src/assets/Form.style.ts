import styled from "styled-components"
import { colorConstants, borderRadius } from "./constants"

export const FormContainer = styled.form`
    width: 65%;
    margin: 0;
    padding: 3% 2%;
    border-radius: ${borderRadius};

    display: flex;
    flex-direction: column;
    align-items: flex-end;
    
    background-color: ${colorConstants.gray};
`

export const UserInput = styled.input.attrs(() => ({
    placeholder: "Enter your user",
}))

`
    width: 100%;
    padding: 3.5% 5%;
    margin-bottom: 1.5%;
    border: 0;
    border-radius: ${borderRadius};

    background-color: ${colorConstants.lightGreen};
    color: ${colorConstants.darkGreen};
    font-size: 1rem;
    font-weight: bolder;

    &::placeholder {
        color: inherit;
        opacity: .6;
        font-size: .9rem;
        font-weight: 700;
    }

    &:focus {
        outline: 0;
    }
`

export const SubmitButton = styled.button.attrs(() => ({
    type: 'submit'
}))

`
    padding: 3.5% 15%;
    border: 0;
    border-radius: ${borderRadius};

    cursor: pointer;

    background-color: ${colorConstants.green};
    color: ${colorConstants.white};
    font-size: .9rem;
    font-weight: 700;
`

export const Required = styled.span`
    width: 100%;
    font-size: .8rem;
    
    color: red;
`