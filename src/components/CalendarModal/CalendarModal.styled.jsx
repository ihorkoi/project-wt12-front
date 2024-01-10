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

export const Modal = styled.div `
position: absolute;
height: 188px;
width: 292px;
background: #FFFFFF;
padding: 24px 16px;

`

export const CloseIcon = styled.div `
cursor: pointer;
display: flex;
justify-content: end;
`
export const StyledP = styled.p`
     |&:nth-child():not(:last-child){
        margin-bottom: 16px;
     }
`