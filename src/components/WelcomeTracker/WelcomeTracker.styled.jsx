import styled from 'styled-components';
import '../../css/styles.css';
import '../../css/fonts.css';
import { NavLink } from 'react-router-dom';
import { ReactComponent as CalendarSvg } from '../../img/icons/calendar-days.svg';
import { ReactComponent as ChartbarSvg } from '../../img/icons/presentation-chart-bar.svg';
import { ReactComponent as ScrewdriverSvg } from '../../img/icons/wrench-screwdriver.svg';

export const WelcomeTrackerWrapper = styled.div`
  width: 280px;
  min-height: 384px;
  margin-bottom: 40px;
  @media screen and (min-width: 768px) {
    width: 704px;
    min-height: 254px;
  }
  @media screen and (min-width: 1440px) {
    width: 495px;
    margin-bottom: 0;
  }
`;

export const WelcomeTrackerTitle = styled.h1`
  font-family: 'Roboto-Bold', sans-serif;

  font-size: 28px;
  line-height: 1.14;
  margin-bottom: 16px;
  color: var(--primary-black);

  @media screen and (min-width: 768px) {
    font-size: 36px;
    line-height: 1.16;
  }
`;

export const WelcomeTrackerSubTitle = styled.h2`
  font-family: 'Roboto-Medium', sans-serif;
  font-weight: 400;

  margin-bottom: 24px;
  color: var(--primary-black);
  font-size: 24px;
  line-height: 1.25;

  @media screen and (min-width: 768px) {
    font-size: 26px;
    line-height: 1.23;
  }
`;

export const BenefitsTitle = styled.h3`
  font-family: 'Roboto-Bold', sans-serif;

  margin-bottom: 12px;
  color: var(--primary-black);
  font-size: 18px;
  line-height: 1.11;
`;

export const BenefitsList = styled.ul`
  list-style: none;
  padding-bottom: 24px;
  @media screen and (min-width: 768px) {
    display: flex;
    gap: 16px;
  }
  @media screen and (min-width: 1440px) {
    flex-direction: column;
  }
`;

export const BenefitsItem = styled.li`
  display: flex;
  &:nth-child(3) {
    margin-bottom: 0;
  }
  gap: 6px;
  width: 216px;
  margin-bottom: 16px;

  @media screen and (min-width: 768px) {
    width: 224px;
    margin-bottom: 0;
  }
  @media screen and (min-width: 1440px) {
    margin-bottom: 16px;
  }
`;

export const BenefitsInfo = styled.p`
  font-family: 'Roboto-Regular', sans-serif;
  font-weight: 400;

  font-size: 16px;
  line-height: 1.25;
  padding-top: 6px;
  padding-bottom: 6px;

  @media screen and (min-width: 768px) {
    padding-top: 10px;
    padding-bottom: 10px;
  }
`;

export const TryTrackerBtn = styled.button`
  width: 100%;
  padding: 8px 30px 8px 30px;
  background-color: var(--primary-color);
  box-shadow: 0px 4px 8px 0px rgba(64, 123, 255, 0.34);
  border-radius: 10px;
  border: none;

  @media screen and (min-width: 768px) {
    padding: 10px 30px 10px 30px;
    max-width: 276px;
  }

  //   @media screen and (min-width: 768px) {
  //     max-width: 324px;
  //   }
`;

export const TryTrackerLink = styled(NavLink)`
  font-family: 'Roboto-Regular', sans-serif;

  text-align: center;
  font-size: 16px;
  line-height: 1.25;
  color: var(--primary-white);
  text-decoration: none;
  @media screen and (min-width: 768px) {
    padding: 10px 30px 10px 30px;
    font-size: 18px;
    line-height: 1.33;
  }
`;

export const IconsWrapper = styled.div`
  width: 32px;
  height: 32px;
  @media screen and (min-width: 768px) {
    width: 40px;
    height: 40px;
  }
`;

export const CalendarIcon = styled(CalendarSvg)`
  margin-right: 8px;
  @media only screen and (max-width: 767px) {
    height: 32px;
  }
`;
export const ChartbarIcon = styled(ChartbarSvg)`
  margin-right: 8px;
  @media only screen and (max-width: 767px) {
    height: 32px;
  }
`;
export const ScrewdriverIcon = styled(ScrewdriverSvg)`
  margin-right: 8px;
  @media only screen and (max-width: 767px) {
    height: 32px;
  }
`;
