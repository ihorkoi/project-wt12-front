import styled from 'styled-components';

export const UserLogoModalStyled = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  width: 120px;
  height: 88px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(64, 123, 255, 0.2);
  background-color: var(--primary-white);
  button {
    padding: 0;
    border: none;
    background-color: transparent;
    display: flex;
    align-items: center;
    position: relative;
    height: 20px;
    p {
      color: var(--primary-color);
      font-size: 16px;
      line-height: 20px;
    }
    svg {
      margin-right: 8px;
    }
     &:hover p, &:active p{
        color: var(--secondary-orange);
      }
      &:hover path, &:active path{
        stroke: var(--secondary-orange);
      }
  }
`;
