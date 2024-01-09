import { AddWaterModal } from 'components/AddWater/AddWater';
import {
  Button,
  CircleIcon,
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
import { Resizable } from 'react-resizable';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { getTodayWater } from '../../redux/water/waterOperations';

const RatioSize = [
  {
    width: '391px',
    height: '8px',
  },
];

export const WaterRatioPanel = () => {
  const [ratio, setRatio] = useState(RatioSize);
  // const [activePercentage, setActivePercentage] = useState(0);

  const normaPercentage = useSelector(getTodayWater);

  const scaleWidth = (normaPercentage / 100) * ratio.width;

  const onResize = (event, { size }) => {
    setRatio({
      width: size.width,
      height: size.height,
    });
  };

  return (
    <>
      <ContainerTodayWater>
        <RangeWrapper>
          <TodayRange>Today</TodayRange>
          <Resizable
            width={ratio.width}
            height={ratio.height}
            onResize={onResize}
          >
            <Range>
              {normaPercentage > 0 ? (
                <CircleIcon width={`${scaleWidth}px`} />
              ) : (
                <CircleIcon width="0" />
              )}
              <RangeList>
                {[0, 50, 100].map(percentage => (
                  <RangeItem
                    key={percentage}
                    className={percentage === normaPercentage ? 'active' : ''}
                  >
                    {percentage}%
                  </RangeItem>
                ))}
              </RangeList>
            </Range>
          </Resizable>
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
