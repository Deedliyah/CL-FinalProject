import React from 'react'
import { Container, Form, FormButton, FormContent, FormH1, FormInput, FormLabel, FormWrap, Icon, Text } from './LoginElements'

const LogIn = () => {
    return (
        <>
            <Container>
                <FormWrap>
                    <Icon to="/">HomeFun</Icon>
                    <FormContent>
                        <Form action="#">
                            <FormH1>Zaloguj się</FormH1>
                            <FormLabel htmlFor='for'>e-mail</FormLabel>
                            <FormInput type='email' required />
                            <FormLabel htmlFor='for'>hasło</FormLabel>
                            <FormInput type='password' required />
                            <FormButton type='submit'>Zaloguj</FormButton>
                            <Text>Zapomniałeś hasła?</Text>
                        </Form>
                    </FormContent>
                </FormWrap>
            </Container>
        </>
    )
}

export default LogIn;
