import { useState } from 'react';
// import { selectMonthRecords } from 'redux/selectors';
import { MonthPicker } from 'components/MonthPicker/MonthPicker';

export const Calendar = () => {
  const [newDate, setNewDate] = useState(new Date());
  return (
    <>
      <div>
        <h2>Month</h2>
        <MonthPicker newDate={newDate} setNewDate={setNewDate} />
      </div>
      <ul>
        {/* {selectMonthRecords.map(data => (
          <li key={''}></li>
        ))} */}
      </ul>
    </>
  );
};
