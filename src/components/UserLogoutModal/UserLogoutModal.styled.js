import styled from 'styled-components';

export const BackDropStyled = styled.div`
position: fixed;
top: 0;
left: 0;
width: 100vw;
height: 100vh;
background-color: rgba(0, 0, 0, 0.8);
z-index: 10;
`;

export const LogoutContainerStyled = styled.div`
    font-family: 'Roboto-medium';
    position: fixed;
    z-index: 11;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 100%;
    max-width: 592px;
    max-height: 208px;
    background-color: var(--primary-white);
    border-radius: 10px;
    padding: 32px 24px;
    .title-container{
        display: flex;
        align-items: center;
        margin-bottom: 24px;
        svg {
            margin-left: auto;
            cursor: pointer;
            &:hover path, &:active path {
                stroke: var(--secondary-orange);
            }
        }
    }
    .title{
        font-size: 26px;
        line-height: 32px;
    }
    .question{
        font-size: 18px;
        line-height: 20px;
        margin-bottom: 24px;
    }
    .btn-container{
        display: flex;
        gap: 24px;
    }
    .cancel-btn{
        display: flex;
        align-items: center;
        justify-content: center;
        height: 44px;
        width: 160px;
        background-color: #D7E3FF;
        border-radius: 10px;
        color: var(--primary-color);
    }
    .logout-btn{
        display: flex;
        align-items: center;
        justify-content: center;
        height: 44px;
        width: 160px;
        border-radius: 10px;
        background-color: var(--secondary-red);
        box-shadow: 0 4px 8px rgba(64, 123, 255, 0.2);
        &:hover{
            box-shadow: none;
        }
    }
    @media screen and (max-width: 1024px) {
            top: 200px;
            transform: translate(-50%, 0);
            .btn-container {
                justify-content: end;
            }
        } 
    @media screen and (max-width: 767px) {
            top: 80px;
            max-width: 280px;
            max-height: 260px;
            .btn-container {
                flex-direction: column;
            }
            .logout-btn, .cancel-btn{
                width: 100%;
            }
        }
`