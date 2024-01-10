import { AddWaterModal } from 'components/AddWater/AddWater';
import {
  Button,
  CircleIcon,
  ContainerTodayWater,
  Plus,
  Range,
  Range1,
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
import { useMediaQuery } from 'react-responsive';

export const WaterRatioPanel = () => {
  const [, setActiveWidth] = useState('');

  const dayPercent = useSelector(selectTodayWater);

  const dailyNorm = useSelector(state => state.user.dailyWaterRequirement);

  const calculatePercentage = dayPercent => {
    const sum = dayPercent.reduce(
      (accumulator, record) => accumulator + Number(record.waterAmount),
      0
    );
    return (sum / dailyNorm) * 100;
  };
  const percent = calculatePercentage(dayPercent);

  const onResize = (event, { node, size, handle }) => {
    setActiveWidth(size.width);
  };

  const isPhone = useMediaQuery({ query: '(max-width: 767px)' });
  const isTablet = useMediaQuery({
    query: '(min-width: 768px) and (max-width: 1439px)',
  });

  const marginPhone = {
    marginLeft: `${(percent / 100) * 280}px`,
  };
  const marginTab = {
    marginLeft: `${(percent / 100) * 356}px`,
  };
  const marginDesk = {
    marginLeft: `${(percent / 100) * 391}px`,
  };

  const style = isPhone ? marginPhone : isTablet ? marginTab : marginDesk;

  const filledStylePhone = {
    background: 'var(--secondary-textcolor)',
    width: style.marginLeft,
    maxWidth: '280px',
  };
  const filledStyleTab = {
    background: 'var(--secondary-textcolor)',
    width: style.marginLeft,
    maxWidth: '356px',
  };
  const filledStyleDesk = {
    background: 'var(--secondary-textcolor)',
    width: style.marginLeft,
    maxWidth: '391px',
  };

  const filledStyle = isPhone
    ? filledStylePhone
    : isTablet
    ? filledStyleTab
    : filledStyleDesk;

  return (
    <>
      <ContainerTodayWater>
        <RangeWrapper>
          <TodayRange>Today</TodayRange>
          <Resizable onResize={onResize} height={8} width={10}>
            <Range1>
              <CircleIcon style={style} />
              <Range style={filledStyle}>
                <div>
                  <RangeList>
                    {[0, 50, 100].map(percentage => (
                      <RangeItem
                        key={percentage}
                        className={percentage === percent ? 'active' : ''}
                      >
                        {percentage}%
                      </RangeItem>
                    ))}
                  </RangeList>
                </div>
              </Range>
            </Range1>
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
