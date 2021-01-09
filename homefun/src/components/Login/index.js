import { Container, Form, FormButton, FormContent, FormH1, FormInput, FormLabel, FormWrap, Icon, Text } from './LoginElements'
import { Redirect, Route, Router, Switch } from 'react-router-dom'
import LearningApp from '../../pages/learningapp'
import { Component, useState } from 'react'

class LogIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            islogged: false,
            loginParams: {
                user_id: "",
                user_password: ""
            }
        };
    }
    handleFormChange = event => {
        let loginParamsNew = { ...this.state.loginParams };
        let val = event.target.value;
        loginParamsNew[event.target.name] = val;
        this.setState({
            loginParams: loginParamsNew
        });
    };

    login = event => {
        let user_id = this.state.loginParams.user_id;
        let user_password = this.state.loginParams.user_password;
        if (user_id === "admin@admin" && user_password === "123") {
            localStorage.setItem("token", "T");
            this.setState({
                islogged: true
            });
        }
        event.preventDefault();
    };
    render() {
        if (localStorage.getItem("token")) {
            return <Redirect to='../../pages/learningapp' component={LearningApp} />;
        }
        return (
            <>
                <Container>
                    <FormWrap>
                        <Icon to="/">HomeFun</Icon>
                        <FormContent>
                            <Form onSubmit={this.handleFormSubmit}>
                                <FormH1>Zaloguj się</FormH1>
                                <FormLabel htmlFor='for'>e-mail</FormLabel>
                                <FormInput type='email' required name="user_id"
                                    onChange={this.handleFormChange}
                                    placeholder="wpisz e-mail" />
                                <FormLabel htmlFor='for'>hasło</FormLabel>
                                <FormInput type='password' required name="user_password"
                                    onChange={this.handleFormChange}
                                    placeholder="Enter Password" />
                                <FormButton type="submit" value="Login" >;
        Zaloguj</FormButton>
                                <Text>Zapomniałeś hasła?</Text>
                            </Form>
                        </FormContent>
                    </FormWrap>
                </Container>
            </>
        )
    }
}

export default LogIn;
