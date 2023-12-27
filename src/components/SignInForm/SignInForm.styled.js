import styled, { css } from 'styled-components';
import { NavLink } from 'react-router-dom';

// export const Wrapper = styled.div`
//   display: flex;
//   flex-direction: column;
//   padding: 0;
//   @media screen and (max-width: 768px) {
//     margin-top: 24px;
//   }
// `;

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
  margin-top: 24px;

  @media screen and (min-width: 768px) {
    justify-content: flex-start;
    margin-top: 40px;
  }
  @media screen and (min-width: 1440px) {
    margin-top: 0;
    justify-content: flex-end;
    padding-top: 148px;
    padding-left: 722px;
    padding-bottom: 156px;
    padding-right: 198px;
  }
`;

export const Form = styled.form`
  @media screen and (min-width: 768px) {
    width: 336px;
  }
  @media screen and (min-width: 1440px) {
    width: 384px;
  }
`;

export const ErrorsMess = styled.p`
  color: var(--secondary-red);
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.29;
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

export const Input = styled.input.attrs(props => ({
  haserror: props.haserror,
}))`

  width: 100%;
  height: 44px;
  border-radius: 6px;
  border: 1px solid #d7e3ff;
  padding: 12px 36px 12px 10px;
  background-color: #ffffff;
  margin-bottom: 16px;
  color: var(--primary-color);
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.25;
  outline: none;
  @media screen and (min-width: 1440px) {
    width: 384px;
  }

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

  ${props =>
    props.haserror &&
    css`
      border-color: red;
    `}
`;

export const PasswordContainer = styled.div`
  position: relative;
`;

export const TogglePassword = styled.span`
  position: absolute;
  right: 10px;
  top: 30%;
  transform: translateY(-30%);
  

  @media screen and (min-width: 768px) {
    right: 10px;
  }
  @media screen and (min-width: 1440px) {
    right: 10px;
    top: 25%;
    transform: translateY(-25%);
  }
`;

export const Img = styled.img`
  width: 16px;
`;

export const BTN = styled.button`

  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
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
  @media screen and (min-width: 1440px) {
    width: 384px;
  }
`;

export const NavLinkStyle = styled(NavLink)`
  margin-bottom: 184px;
  color: var(--primary-color);
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.25;
  margin-top: 16px;
  @media screen and (min-width: 768px) {
    margin-bottom: 70px;
  }
  @media screen and (min-width: 1440px) {
    margin-bottom: 0;
    color: var(--primary-color);
    font-family: Roboto;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 1.25;
    margin-top: 16px;
  }
`;