import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form'
import {login} from '../../redux/auth/authOperations'
import {
    // Wrapper,
    FormWrapper,
    Form, Label,
    Input, BTN, Paragrapher,
    NavLinkStyle,
    PasswordContainer, TogglePassword, Img,
    ErrorsMess
} from "./SignInForm.styled";
import Notiflix from 'notiflix';



import eyeSlash from "../../img/icons/eye-slash.svg";
import eye from "../../img/icons/eye.svg";

 export const loginSchema = yup
  .object()
  .shape({
    email: yup.string().email('Invalid email').required('Email is required'),
    password: yup
      .string()
      .min(8, 'Password must be at least 8 characters long')
      .required('Password is required'),
  })
  .required();



export function SignInForm() {
      const dispatch = useDispatch();
 const {
    register,
    handleSubmit,
    formState: { errors, isDirty },
  } = useForm({
    defaultValues: { email: '', password: '' },
    resolver: yupResolver(loginSchema),
  });

  const onSubmit = ({ email, password }) => {
    dispatch(login({ email, password }))
      .unwrap()
      .then(resp => {
       Notiflix.Notify.success(`Successfully logged in `);
      })
      .catch(e => {
        e === 'Request failed with status code 400'
          ? Notiflix.Notify.warning('Wrong email or password')
          :Notiflix.Notify.failure('Something went wrong, try one nore time!');
      });
  };


    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
    
    

    return (
        //  <Wrapper>
                <FormWrapper>
                    <Paragrapher>Sign In</Paragrapher>
                        <Form onSubmit={handleSubmit(onSubmit)}>
                        <Label>Enter your email</Label>
                    <Input
                        {...register('email')}
                        type="text"
                        id='email'
                        placeholder='E-mail'
                        {...(isDirty && !!errors.email ? { haserror: "true" } : {})}
                    />
                            <ErrorsMess>{errors.email?.message}</ErrorsMess>
                        
                    <Label>Enter your password</Label>
                    <PasswordContainer>    
                        <Input
                            {...register('password')}
                            type={showPassword ? 'text' : 'password'}
                            id="password"
                            name="password"
                            placeholder='Password'
                            {...(isDirty && !!errors.password ? { haserror: "true" } : {})}
                        />
                        <TogglePassword onClick={togglePasswordVisibility}>
                            {showPassword ? (
                                <Img src={eye} alt="eye-icon" />) :
                                (<Img src={eyeSlash} alt="eye-slash-icon" />)}
                        </TogglePassword>
                                <ErrorsMess>{errors.password?.message}</ErrorsMess>
                    </PasswordContainer>
                        <BTN type="submit">Sign In</BTN>
                    </Form>
                    <NavLinkStyle to="/signup">
                        Sign Up
                    </NavLinkStyle>
                </FormWrapper>
            // </Wrapper>
        )
}
