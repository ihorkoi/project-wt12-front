import styled from 'styled-components';
import '../../css/styles.css';
import '../../css/fonts.css';
import { ReactComponent as CircleSvg } from '../../img/icons/Ellipse.svg';

export const InfoWrapper = styled.div`
  width: 280px;
  min-height: 384px;
  background-color: var(--secondary-verylightblue);
  padding: 24px 16px;
  border-radius: 10px;
  box-shadow: 0px 4px 14px 0px rgba(64, 123, 255, 0.3);
  @media screen and (min-width: 768px) {
    width: 494px;
    min-height: 0;
  }
  @media screen and (min-width: 1440px) {
    margin-top: auto;
    height: 332px;
    width: 535px;
    padding: 32px 24px;
    min-height: 0;
  }
`;

export const InfoTitle = styled.h3`
  font-family: 'Roboto-Bold', sans-serif;
  color: var(--primary-black);
  font-size: 18px;
  line-height: 1.11;
  margin-bottom: 12px;
`;

export const InfoList = styled.ul`
  gap: 16px;
`;

export const InfoItem = styled.li`
  display: flex;
  margin-bottom: 16px;
  &:nth-child(7) {
    margin-bottom: 0;
  }
`;

export const InfoIconsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const InfoItemText = styled.p`
  font-family: 'Roboto-Regular', sans-serif;
  color: var(--primary-black);
  font-size: 16px;
  line-height: 1.25;
  font-weight: 400;
  font-style: normal;
`;

export const CircleIcon = styled(CircleSvg)`
  margin-right: 8px;
`;
