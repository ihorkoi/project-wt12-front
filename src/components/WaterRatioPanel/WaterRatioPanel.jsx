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
import { selectTodayWater } from '../../redux/selectors';
// import { Scale } from './Scale';

const RatioSize = [
  {
    width: '391px',
    height: '8px',
  },
];

export const WaterRatioPanel = () => {
  //   const [value, setValue] = useState();
  const [ratio, setRatio] = useState(RatioSize);
  const [activePercentage, setActivePercentage] = useState(0);

  const dailyNorma = useSelector(selectTodayWater);

  // const  =

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
            <Range
            //   style={{
            //     width: ratio.width + 'px',
            //     height: ratio.height + 'px',
            //   }}
            >
              {activePercentage ? <CircleIcon /> : null}

              {/* <RangeList>
                <RangeItem>0%</RangeItem>
                <RangeItem>50%</RangeItem>
                <RangeItem>100%</RangeItem>
              </RangeList> */}

              <RangeList>
                {[0, 50, 100].map(percentage => (
                  <RangeItem
                    key={percentage}
                    className={percentage === activePercentage ? 'active' : ''}
                  >
                    {percentage}%
                  </RangeItem>
                ))}
              </RangeList>
            </Range>
          </Resizable>
          {/* <Range>
            <Scale minValue={0} maxValue={100} step={50} value={setValue} />
          </Range> */}
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
