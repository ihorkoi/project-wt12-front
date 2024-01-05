import { useState } from 'react';
import {
  CalendarTitle,
  PickerWrapper,
  DaysList,
  DayWrapper,
  Day,
  DayPercent,
} from './Calendar.styled';
// import { selectMonthRecords } from 'redux/selectors';
import data from './data-exp.json';
import { MonthPicker } from 'components/MonthPicker/MonthPicker';

export const Calendar = () => {
  const [newDate, setNewDate] = useState(new Date());
  return (
    <div style={{ backgroundColor: 'var(--secondary-verylightblue' }}>
      <PickerWrapper>
        <CalendarTitle>Month</CalendarTitle>
        <MonthPicker newDate={newDate} setNewDate={setNewDate} />
      </PickerWrapper>
      <DaysList>
        {/* {selectMonthRecords.map(data => (
          <li key={''}></li>
        ))} */}
        {data.map((day, idx) => {
          return (
            <DayWrapper key={day.cratedAt}>
              <Day>{idx + 1}</Day>
              <DayPercent>{day.percent}%</DayPercent>
            </DayWrapper>
          );
        })}
      </DaysList>
    </div>
  );
};
