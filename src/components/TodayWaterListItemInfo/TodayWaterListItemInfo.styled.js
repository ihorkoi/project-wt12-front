import styled from 'styled-components';

export const ListItem = styled.li`
  display: flex;
  border-bottom: 1px solid #d7e3ff;
  justify-content: space-around;
`;

export const WrapperForParagrapher = styled.div`
  display: flex;
  gap: 16px;
  padding: 6px;
  margin-right: 38px;
  align-items: center;
  @media screen and (min-width: 768px) {
    margin-right: 390px;
  }

  @media screen and (min-width: 1440px) {
    margin-right: 278px;
  }
`;

export const PagagrapherForAmount = styled.p`
  width: 60px;
  color: #407bff;
  font-family: Roboto;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.33;
`;

export const PagagrapherForTime = styled.p`
  color: #2f2f2f;
  font-family: Roboto;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 2;
`;

export const BTN = styled.button`
  background: none;
  border: none;
`;

export const ButtonWrappper = styled.div`
  display: flex;
`;
