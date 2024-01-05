import { AddWater } from 'components/AddWater/AddWater';
import {
  Range,
  RangeList,
  RangeWrapper,
  TodayRange,
} from './TodayRangeWater_styled';

export const TodayRangeWater = () => {
  return (
    <>
      <RangeWrapper>
        <TodayRange>Today</TodayRange>
        <Range></Range>
        <RangeList>
          <li>0%</li>
          <li>50%</li>
          <li>100%</li>
        </RangeList>
      </RangeWrapper>
      {<AddWater />}
    </>
  );
};
