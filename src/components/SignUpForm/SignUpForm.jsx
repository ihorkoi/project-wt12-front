import React, { useState } from 'react';
import botle from "../../img/desktop/bottle-sign-in.png";
import {
    Wrapper,
    Paragrapher,
    FormWrapper,
    Form,
    Label,
    Input,
    PasswordContainer,
    TogglePassword,
    Img,
    BTN,
    NavLinkStyle
} from "./SignUpForm.styled";
import eyeSlash from "../../img/icons/eye-slash.svg";
import eye from "../../img/icons/eye.svg"
    ;
export function SignUpForm() {  
    const [showPassword, setShowPassword] = useState(false);
    const [showConfigPassword, setShowConfigPassword] = useState(false)

        const togglePasswordVisibility = () => {
            setShowPassword(!showPassword);
        };
        const togglePasswordConfirmationVisibility = () => {
            setShowConfigPassword(!showConfigPassword);
        };



    return (
        <Wrapper>
            <div>
                <img src={botle} alt="botle" />
            </div>
                <FormWrapper>
                    <Paragrapher>Sign Up</Paragrapher>
                    <Form>
                        <Label>Enter your email</Label>
                        <Input type="text" id='email' />
                        <Label>Enter your password</Label>
                        <PasswordContainer>
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
                        <Label>Repeat password</Label>
                        <PasswordContainer>
                        <Input
                            type={showConfigPassword ? 'text' : 'password'}
                            id='passwordConfirmation'
                            name='passwordConfirmation'
                        />
                        <TogglePassword onClick={togglePasswordConfirmationVisibility}>
                            {showConfigPassword ? (
                                <Img src={eye} alt="eye-icon" />) :
                                (<Img src={eyeSlash} alt="eye-slash-icon" />)}
                            </TogglePassword>
                            </PasswordContainer>
                        <BTN type="submit">Sign Up</BTN>
                </Form>
                <NavLinkStyle to="/signin">
                    Sign In
                </NavLinkStyle>
                    </FormWrapper>
        </Wrapper>
    )
    }
  



