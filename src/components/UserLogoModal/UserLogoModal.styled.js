import styled from 'styled-components';

export const UserLogoModalStyled = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  width: 118px;
  height: 88px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(64, 123, 255, 0.2);
  cursor: auto;
  button {
    padding: 0;
    border: none;
    background-color: transparent;
    display: flex;
    align-items: center;
    position: relative;
    width: 86px;
    height: 20px;
    p {
      color: var(--primary-color);
      font-size: 16px;
      line-height: 20px;
    }
    svg {
      outline: var(--primary-color);
      margin-right: 8px;
    }
  }
`;
