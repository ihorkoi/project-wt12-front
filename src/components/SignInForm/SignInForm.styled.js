import styled from 'styled-components';
import { NavLink } from 'react-router-dom';


export const Wrapper = styled.div`
  display: flex;
  margin-top: 20px;
  justify-content: flex-end;
`;

export const Paragrapher = styled.h1`
  font-family: 'Roboto', sans-serif;
  font-size: 26px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.23;
  color: var(--primary-black);
  margin-bottom: 16px;
`;

export const FormWrapper = styled.div`
display: flex;
flex-direction: column;
margin: 113px 198px 157px 89px;
`

export const Form = styled.form`
  width: 320px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  color: var(--primary-black);
  font-family: Roboto;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.33;
  margin-bottom: 8px;
`;

export const Input = styled.input`
  width: 384px;
  height: 44px;
  border-radius: 6px;
  border: 1px solid #d7e3ff;
  padding: 12px 36px 12px 10px;
  background-color: #ffffff;
  box-shadow: 1px 2px 6px 0px rgba(33, 83, 60, 0.5);
  margin-bottom: 16px;
  color: var(--primary-color);
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.25;
  outline: none;

  &:focus {
    border-radius: 6px;
    border: 1px solid var(--secondary-lighblue);
  }

  &:active {
    border-radius: 6px;
    border: 1px solid var(--secondary-lighblue);
  }

  &::placeholder {
    color: var(--secondary-textcolor);
  }
`;

export const PasswordContainer = styled.div`
  position: relative;
`;

export const TogglePassword = styled.span`
  position: absolute;
  right: -50px;
  top: 50%;
`;

export const Img = styled.img`
width: 16px;
`

export const BTN = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 384px;
  border-radius: 10px;
  border: none;
  background-color: var(--primary-color);
  color: #ffffff;
  height: 44px;
  font-family: Roboto;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.33;
  margin-top: 16px;
`;


export const NavLinkStyle = styled(NavLink)`
  color: var(--primary-color);
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.25;
  margin-top: 16px;
`;