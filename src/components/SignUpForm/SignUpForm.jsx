import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signUp } from '../../redux/auth/operations.js';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
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
    NavLinkStyle,
    ErrorsMess
} from "./SignUpForm.styled";
import eyeSlash from "../../img/icons/eye-slash.svg";
import eye from "../../img/icons/eye.svg";

export const registrationSchema = yup
  .object()
  .shape({
    email: yup.string().email('Invalid email').required('Email is required'),
    password: yup
      .string()
      .min(8, 'Password must be at least 8 characters long')
          .required('Password is required'),
    passwordConfirmation: yup.string()
     .oneOf([yup.ref('password'), null], 'Passwords must match')
  })
  .required();



export function SignUpForm() {  
      const dispatch = useDispatch();

      const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: { email: '', password: '', passwordConfirmation:'' },
    resolver: yupResolver(registrationSchema),
  });

  const onSubmit = ({  email, password, passwordConfirmation}) => {
    dispatch(signUp({  email, password, passwordConfirmation }))
      .unwrap()
      .then(() => alert('Account successfully created!'))
      .catch(e =>
        e === 'Request failed with status code 400'
          ? alert(
              'This user already exist! Use Log In button'
            )
          : alert('Something went wrong, try one nore time!')
      );
  };
    
    
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
                <FormWrapper>
                    <Paragrapher>Sign Up</Paragrapher>
                    <Form onSubmit={handleSubmit(onSubmit)}>
                        <Label>Enter your email</Label>
                    <Input {...register('email')} type="text" id='email' placeholder='E-mail' />
                            <ErrorsMess>{errors.email?.message}</ErrorsMess>
                        <Label>Enter your password</Label>
                        <PasswordContainer>
                        <Input
                            {...register('password')}
                            type={showPassword ? 'text' : 'password'}
                            id="password"
                            name="password"
                            placeholder='Password'
                        />
                        <TogglePassword onClick={togglePasswordVisibility}>
                            {showPassword ? (
                                <Img src={eye} alt="eye-icon" />) :
                                (<Img src={eyeSlash} alt="eye-slash-icon" />)}
                        </TogglePassword>
                                <ErrorsMess>{errors.password?.message}</ErrorsMess>
                            </PasswordContainer>
                        <Label>Repeat password</Label>
                        <PasswordContainer>
                        <Input
                            {...register('passwordConfirmation')}
                            type={showConfigPassword ? 'text' : 'password'}
                            id='passwordConfirmation'
                            name='passwordConfirmation'
                            placeholder='Repeat password'
                        />
                        <TogglePassword onClick={togglePasswordConfirmationVisibility}>
                            {showConfigPassword ? (
                                <Img src={eye} alt="eye-icon" />) :
                                (<Img src={eyeSlash} alt="eye-slash-icon" />)}
                        </TogglePassword>
                        <ErrorsMess>{errors.passwordConfirmation?.message}</ErrorsMess>
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
  



