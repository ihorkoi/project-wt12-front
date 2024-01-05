import styled from 'styled-components';

export const RangeWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 16px;
  width: 391px;
  height: 90px;
`;

export const TodayRange = styled.h3`
  color: var(--primary-color);
  text-align: center;
  font-family: Roboto;
  font-size: 18px;
  font-weight: 400;
  line-height: 1.33;
`;

export const Range = styled.div`
  width: 8px;
  height: 360px;
  transform: rotate(90deg);
  flex-shrink: 0;
  border-radius: 10px;
  background: var(--secondary-lighblue);
  margin-top: 16px;
`;

export const RangeList = styled.ul`
  display: flex;
`;
