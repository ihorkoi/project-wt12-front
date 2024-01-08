import styled from 'styled-components';

export const ScaleWr = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 16px;
  width: 280px;

  @media (min-width: 768px) {
    width: 356px;
  }

  @media (min-width: 1440px) {
    width: 391px;
  }
`;

export const ScaleItem = styled.ul`
  color: var(--primary-color);
  text-align: center;
  font-family: Roboto;
  font-size: 12px;
  font-weight: 400;
  line-height: 1.33;

  &.active {
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 1.25;
  }
`;
