import { useState, useEffect } from 'react';
import { CalendarTitle, PickerWrapper, DaysList } from './Calendar.styled';
import { useDispatch, useSelector } from 'react-redux';
import { getMonthWater } from '../../redux/water/waterOperations';

import {
  dailyWaterRequirement,
  selectMonthRecords,
  selectTodayWater,
} from '../../redux/selectors.js';
import { MonthPicker } from 'components/MonthPicker/MonthPicker';
import { CalendarModal } from 'components/CalendarModal/CalendarModal';
import { CalendarDay } from 'components/CalendarDay/CalendarDay';

export const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [isActiveDayModal, setIsActiveDayModal] = useState(false);
  const [selectedDay, setSelectedDay] = useState(null);

  const todayWater = useSelector(selectTodayWater);
  const monthWater = useSelector(selectMonthRecords);
  const dailyNorm = useSelector(dailyWaterRequirement);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      getMonthWater(
        currentDate.getFullYear() + '-' + (currentDate.getMonth() + 1)
      )
    );
  }, [dispatch, currentDate, todayWater, dailyNorm]);

  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth() + 1;

  const getDaysInMonth = (year, month) => {
    return Array.from(
      { length: new Date(year, month, 0).getDate() },
      (v, i) => i
    );
  };

  const findSelectedDay = idx => {
    return monthWater.filter(data => data.dayNumber === Number(idx) + 1);
  };

  const getCompletedDays = () => {
    const completedDays = monthWater.filter(data => data.percent < 100);
    return completedDays.map(day => day.dayNumber);
  };

  const handleClick = evt => {
    setSelectedDay(findSelectedDay(evt.currentTarget.getAttribute('id')));
    setIsActiveDayModal(!isActiveDayModal);
  };
  const completedDays = getCompletedDays();

  return (
    <>
      <PickerWrapper>
        <CalendarTitle>Month</CalendarTitle>
        <MonthPicker
          currentDate={currentDate}
          setCurrentDate={setCurrentDate}
        />
      </PickerWrapper>
      <DaysList>
        {getDaysInMonth(currentYear, currentMonth).map((day, idx) => {
          return (
            <CalendarDay
              key={idx}
              idx={idx}
              handleClick={handleClick}
              completedDays={completedDays}
              monthWater={monthWater}
              currentYear={currentYear}
              currentMonth={currentMonth}
            />
          );
        })}
      </DaysList>
    </>
  );
};
