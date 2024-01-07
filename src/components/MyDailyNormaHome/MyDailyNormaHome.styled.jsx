import styled from 'styled-components';
import '../../css/styles.css';
import '../../css/fonts.css';

export const Container = styled.div`
  width: 164px;
  padding: 8px 20px 8px 20px;
  border-radius: 10px;
  border: 1px solid var(--secondary-textcolor);
  display: flex;
  flex-direction: column;
  gap: 12px;
  box-shadow: 0px 4px 8px 4px rgba(158, 187, 255, 0.12);
`;

export const Button = styled.button`
  font-size: 16px;
  line-height: 20px;
  letter-spacing: 0em;
  text-align: left;
  border: none;
  background-color: transparent;
  color: var(--secondary-textcolor);
`;

export const Header = styled.p`
  font-size: 18px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
`;
export const WaterAmountWrapper = styled.div`
  display: flex;
  gap: 12px;
`;

export const WaterAmount = styled.p`
  font-size: 24px;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
  color: var(--primary-color);
`;
