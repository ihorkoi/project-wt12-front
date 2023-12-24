import React, { useState } from 'react';
import {
    Wrapper,
    FormWrapper,
    Form, Label,
    Input, BTN, Paragrapher,
    NavLinkStyle,
    PasswordContainer, TogglePassword, Img
} from "./SignInForm.styled";

import eyeSlash from "../../img/icons/eye-slash.svg";
import eye from "../../img/icons/eye.svg";



export function SignInForm() {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
    
    

    return (
         <Wrapper>
                <FormWrapper>
                    <Paragrapher>Sign In</Paragrapher>
                        <Form>
                        <Label>Enter your email</Label>
                        <Input type="text" id='email' />
                        <PasswordContainer>
                            <Label>Enter your password</Label>
                            <Input
                            type={showPassword ? 'text' : 'password'}
                            id="password"
                            name="password" />
                        <TogglePassword onClick={togglePasswordVisibility}>
                            {showPassword ? (
                                <Img src={eye} alt="eye-icon" />) :
                                (<Img src={eyeSlash} alt="eye-slash-icon" />)}
                        </TogglePassword>
                    </PasswordContainer>
                        <BTN type="submit">Sign In</BTN>
                    </Form>
                    <NavLinkStyle to="/signup">
                        Sign Up
                    </NavLinkStyle>
                </FormWrapper>
            </Wrapper>
        )
}
