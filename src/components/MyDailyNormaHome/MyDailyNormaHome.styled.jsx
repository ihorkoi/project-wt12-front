import styled from 'styled-components';
import '../../css/styles.css';
import '../../css/fonts.css';

export const Container = styled.div`
  width: 166px;
  padding: 8px 20px 8px 20px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  background-color: var(--primary-white);
  border: 1px solid var(--secondary-verylightblue);
  box-shadow: 0px 4px 8px 4px rgba(158, 187, 255, 0.12);
`;

export const Button = styled.button`
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 125%;
  letter-spacing: 0em;
  text-align: left;
  border: none;
  background-color: transparent;
  color: var(--secondary-textcolor);
`;

export const Header = styled.p`
  letter-spacing: 0em;
  text-align: left;
  font-family: Roboto;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 133.333%;
`;
export const WaterAmountWrapper = styled.div`
  display: flex;
  gap: 12px;
`;

export const WaterAmount = styled.p`
  font-family: Roboto;
  font-size: 22px;
  font-style: normal;
  font-weight: 700;
  line-height: 100%;
  color: var(--primary-color);

  @media screen and (min-width: 767px) {
    font-size: 24px;
    font-weight: 700;
    line-height: 24px;
    letter-spacing: 0em;
    text-align: left;
  }
`;
