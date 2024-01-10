import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import { Wrapper, CalendarGlobalStyles } from './Datepicker_styled';

export const TimeChange = ({ startDate, setStartDate, setIsTimeChanged }) => {
  const handleTimeChange = date => {
    setStartDate(date);
    setIsTimeChanged(true);
  };
  return (
    <Wrapper>
      <DatePicker
        selected={startDate}
        onChange={handleTimeChange}
        showTimeSelect
        showTimeSelectOnly
        timeIntervals={5}
        timeCaption="time"
        dateFormat="HH:mm"
        timeFormat="HH:mm"
        isClearable={true}
      />
      <CalendarGlobalStyles />
    </Wrapper>
  );
};
