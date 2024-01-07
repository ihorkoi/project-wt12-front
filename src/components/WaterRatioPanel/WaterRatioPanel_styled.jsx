import styled from 'styled-components';
import { ReactComponent as PlusCircle } from '../../img/icons/plus-circle.svg';

export const ContainerTodayWater = styled.div`
  display: flex;
`;

export const RangeWrapper = styled.div`
  display: block;
  flex-direction: row;
  align-items: flex-start;
  gap: 16px;
  width: 391px;
  height: 90px;
`;

export const TodayRange = styled.h3`
  color: var(--primary-color);
  text-align: start;
  font-family: Roboto;
  font-size: 18px;
  font-weight: 400;
  line-height: 1.33;
`;

export const Range = styled.div`
  display: flex;
  flex-direction: row;
  width: 360px;
  height: 8px;
  /* transform: rotate(90deg); */
  flex-shrink: 0;
  border-radius: 10px;
  background: var(--secondary-lighblue);
  margin-top: 16px;
  margin-top: 0;
  margin-bottom: 0;
`;

export const RangeList = styled.ul`
  display: flex;
  gap: 125px;
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
  display: inline-flex;
  height: 44px;
  padding: 10px 30px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 10px;
  background: var(--primary-color);
  box-shadow: 0px 4px 8px 0px rgba(64, 123, 255, 0.34);
`;

export const SpanText = styled.span`
  color: var(--primary-white);
  text-align: center;
  font-family: Roboto;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.33;
`;

export const Plus = styled(PlusCircle)`
  width: 24px;
  height: 24px;
  stroke: var(--primary-white);
  color: #fff;
  background-color: transparent;
`;
