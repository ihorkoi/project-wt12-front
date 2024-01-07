import styled from 'styled-components';
import { ReactComponent as PlusCircle } from '../../img/icons/plus-circle.svg';

export const ContainerTodayWater = styled.div`
  display: block;

  @media (min-width: 768px) {
    display: flex;
    gap: 32px;
  }

  @media (min-width: 1440px) {
    gap: 43px;
  }
`;

export const RangeWrapper = styled.div`
  display: block;
  align-items: flex-start;
  width: 280px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 16px;

  @media (min-width: 768px) {
    gap: 16px;
    width: 356px;
    margin-left: 32px;
    margin-right: 0;
  }

  @media (min-width: 1440px) {
    width: 391px;
    margin-left: 112px;
  }
`;

export const TodayRange = styled.h3`
  color: var(--primary-color);
  text-align: start;
  font-family: Roboto;
  font-size: 18px;
  font-weight: 400;
  line-height: 1.33;
  margin-bottom: 8px;

  @media (min-width: 768px) {
    margin-bottom: 16px;
  }
`;

export const Range = styled.div`
  display: flex;
  flex-direction: row;
  height: 8px;
  flex-shrink: 0;
  border-radius: 10px;
  background: var(--secondary-lighblue);
  margin-top: 16px;
  margin-bottom: 16px;
`;

export const RangeList = styled.ul`
  display: flex;
  width: 280px;
  /* margin-left: 20px;
  margin-right: 20px; */
  justify-content: space-between;
  margin-top: 16px;

  @media (min-width: 768px) {
    width: 356px;
  }

  @media (min-width: 1440px) {
    width: 391px;
  }
`;

export const RangeItem = styled.li`
  color: var(--primary-color);
  text-align: center;
  font-family: Roboto;
  font-size: 12px;
  font-weight: 400;
  line-height: 1.33;
`;

export const Button = styled.button`
  display: block;
  padding: 6px 76px;
  width: 280px;
  /* height: 44px; */
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 10px;
  background: var(--primary-color);
  box-shadow: 0px 4px 8px 0px rgba(64, 123, 255, 0.34);
  margin-left: auto;
  margin-right: auto;

  @media (min-width: 768px) {
    display: inline-flex;
    margin: auto 0;
    width: 336px;
  }

  @media (min-width: 1440px) {
    padding: 10px 30px;
    width: 178px;
  }
`;

export const WrapperTextBtn = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
`;

export const SpanText = styled.span`
  color: var(--primary-white);
  text-align: center;
  font-family: Roboto;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.33;
  width: 128px;

  @media (min-width: 768px) {
    width: 94px;
  }
`;

export const Plus = styled(PlusCircle)`
  width: 24px;
  height: 24px;
  margin-top: auto;
  margin-bottom: auto;
  margin-right: 10px;
  stroke: var(--primary-white);
  color: #fff;
  background-color: transparent;
`;
