import React, { SetStateAction } from "react"

// style
import { FormContainer, UserInput, SubmitButton, Required } from "../assets/Form.style"

// hooks
import { useForm } from "react-hook-form"

interface IProps {
    setUser: React.Dispatch<SetStateAction<string>>
}

export default function Form (props: IProps ) {    
    const { register, handleSubmit, formState: { errors } } = useForm()
    const onSubmit = handleSubmit(data => props.setUser(data.user))

    return (
        <FormContainer onSubmit={onSubmit}>
            <UserInput {...register('user', { required: true })}/>
            {errors.user && <Required>This field is required</Required>}
            <SubmitButton>Enviar</SubmitButton>
        </FormContainer>
    )
}