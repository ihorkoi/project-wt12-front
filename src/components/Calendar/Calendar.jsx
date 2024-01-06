import { useState, useEffect } from 'react';
import {
  CalendarTitle,
  PickerWrapper,
  DaysList,
  DayWrapper,
  Day,
  DayPercent,
} from './Calendar.styled';
import { WaterPanel } from 'components/WaterPanel/WaterPanel';
import { useDispatch, useSelector } from 'react-redux';
import { getMonthWater } from '../../redux/water/waterOperations';

import { selectMonthRecords } from '../../redux/selectors.js';
import data from './data-exp.json';
import { MonthPicker } from 'components/MonthPicker/MonthPicker';

export const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [isActiveDayModal, setIsActiveDayModal] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      getMonthWater({
        date: currentDate,
      })
    );
  }, [dispatch, currentDate]);

  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth() + 1;

  const getDaysInMonth = (year, month) => {
    return Array.from(
      { length: new Date(year, month, 0).getDate() },
      (v, i) => i
    );
  };

  const handleClick = evt => {
    console.log('click');
    console.log(evt.currentTarget.getAttribute('id'));
    setIsActiveDayModal(!isActiveDayModal);
  };

  return (
    <WaterPanel>
      <PickerWrapper>
        <CalendarTitle>Month</CalendarTitle>
        <MonthPicker
          currentDate={currentDate}
          setCurrentDate={setCurrentDate}
        />
      </PickerWrapper>
      <DaysList>
        {/* {data.map((day, idx) => {
          const completed = day.percent >= 100;
          return (
            <DayWrapper key={day.cratedAt}>
              <Day
                style={
                  completed
                    ? {}
                    : { border: '1px solid var(--secondary-orange)' }
                }
              >
                {idx + 1}
              </Day>
              <DayPercent>{day.percent}%</DayPercent>
            </DayWrapper>
          );
        })} */}
        {getDaysInMonth(currentYear, currentMonth).map((day, idx) => {
          return (
            <DayWrapper key={idx} onClick={handleClick} id={idx}>
              <Day>{idx + 1}</Day>
              <DayPercent>{0}%</DayPercent>
            </DayWrapper>
          );
        })}
      </DaysList>
    </WaterPanel>
  );
};
