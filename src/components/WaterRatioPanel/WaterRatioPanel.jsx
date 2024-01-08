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
  WrapperTextBtn,
} from './WaterRatioPanel_styled';

const Scale = ({ minValue, maxValue, step, value }) => {
  const scaleItems = [];

  for (let i = minValue; i <= maxValue; i += step) {
    scaleItems.push(
      <div key={i} className={`scale-item ${i === value ? 'active' : ''}`}>
        {i}
      </div>
    );
  }
};

export const WaterRatioPanel = () => {
  return (
    <>
      <ContainerTodayWater>
        <RangeWrapper>
          <TodayRange>Today</TodayRange>
          {/* <Range></Range> */}
          {/* <div className="scale">{scaleItems}</div> */}
          <RangeList>
            <RangeItem>0%</RangeItem>
            <RangeItem>50%</RangeItem>
            <RangeItem>100%</RangeItem>
          </RangeList>
        </RangeWrapper>
        <Button>
          <WrapperTextBtn>
            <Plus />
            <SpanText>{<AddWaterModal />}</SpanText>
          </WrapperTextBtn>
        </Button>
      </ContainerTodayWater>
    </>
  );
};
