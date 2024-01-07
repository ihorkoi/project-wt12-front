import { AddWaterModal } from 'components/AddWater/AddWater';
import {
  Button,
  ContainerTodayWater,
  Plus,
  Range,
  RangeItem,
  RangeList,
  RangeWrapper,
  SpanText,
  TodayRange,
} from './WaterRatioPanel_styled';

export const WaterRatioPanel = (isOpen, children) => {
  return (
    <>
      <ContainerTodayWater>
        <RangeWrapper>
          <TodayRange>Today</TodayRange>
          <Range></Range>
          <RangeList>
            <RangeItem>0%</RangeItem>
            <RangeItem>50%</RangeItem>
            <RangeItem>100%</RangeItem>
          </RangeList>
        </RangeWrapper>
        <Button onClick={() => isOpen}>
          <Plus />
          <SpanText>Add Water</SpanText>
        </Button>
      </ContainerTodayWater>
      <AddWaterModal />
    </>
  );
};
