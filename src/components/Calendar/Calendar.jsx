import { useState } from 'react';
import {
  CalendarTitle,
  PickerWrapper,
  DaysList,
  DayWrapper,
  Day,
  DayPercent,
} from './Calendar.styled';
import { WaterPanel } from 'components/WaterPanel/WaterPanel';
import { selectMonthRecords } from '../../redux/selectors.js';
import data from './data-exp.json';
import { MonthPicker } from 'components/MonthPicker/MonthPicker';

export const Calendar = () => {
  const [newDate, setNewDate] = useState(new Date());
  return (
    <WaterPanel>
      <PickerWrapper>
        <CalendarTitle>Month</CalendarTitle>
        <MonthPicker newDate={newDate} setNewDate={setNewDate} />
      </PickerWrapper>
      <DaysList>
        {/* {selectMonthRecords.map(data => (
          <li key={''}></li>
        ))} */}
        {data.map((day, idx) => {
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
        })}
      </DaysList>
    </WaterPanel>
  );
};
