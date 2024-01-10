import styled from "styled-components";

export const Overlay = styled.div `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;
    `

export const Modal = styled.div`
  position: absolute;
  height: 188px;
  width: 292px;
  background: #ffffff;
  padding: 24px 16px;
  border-radius: 10px;
  box-shadow: 0px 4px 4px 0px rgba(64, 123, 255, 0.3);
`;

export const CloseIcon = styled.div `
cursor: pointer;
position:absolute;
top:24px;
right:16px;
// display: flex;
// justify-content: end;
`
export const StyledP = styled.p`
margin-bottom: 16px;
`

export const StyledData = styled.p`
color: var(--primary-color);
font-size: 16px;
font-weight: 400;
line-height: 1.25;
margin-bottom: 16px;
`
export const StyledSpan = styled.span   `
color: var(--primary-color);
font-size: 18px;
font-style: normal;
font-weight: 500;
line-height: 1.33;
`