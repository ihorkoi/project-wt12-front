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

export const SettingContainerStyled = styled.div`
    position: fixed;
    z-index: 11;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 100%;
    max-width: 1008px;
    max-height: 592px;
    background-color: var(--primary-white);
    border-radius: 10px;
    padding: 32px 24px;
    >div {
        display: flex;
        align-items: center;
        margin-bottom: 24px;
        p {
        font-weight: 500;
        font-size: 26px;
        line-height: 32px;
        } 
        svg {
            margin-left: auto;
            cursor: pointer;
            &:hover path, &:active path {
                stroke: var(--secondary-orange);
            }
        }
    }
    form {
        > p {
            font-size: 18px;
            font-weight: 500;
            line-height: 20px;
            margin-bottom: 8px;
        }
        .photo-container{
            display: flex;
            align-items: center;
            
               img {
                display: block;
                border-radius: 50%;
                margin-right: 8px;
                object-fit: cover;
                object-position: center;
                height: 80px;
                } 
            
            
            .label-file {
                display: flex;
                cursor: pointer;
                p {
                color: var(--primary-color);
                font-size: 14px;
                line-height: 18px;
                }
                svg {
                margin-right: 8px;
                }
                &:hover p, &:active p{
                    color: var(--secondary-orange)
                }
                &:hover path, &:active path{
                    stroke: var(--secondary-orange)
                }
            }
        }   
    } 
`

