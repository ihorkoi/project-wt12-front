import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import { Wrapper, CalendarGlobalStyles } from './Datepicker_styled';

export const TimeChange = ({
  startDate,
  setStartDate,
  setIsTimeChanged,
  time,
}) => {
  const handleTimeChange = date => {
    setStartDate(date);
    setIsTimeChanged(true);
  };
  const oldTime = time
    ? new Date().setHours(time.split(':')[0], time.split(':')[1])
    : '';

  return (
    <Wrapper>
      <DatePicker
        selected={oldTime ? oldTime : startDate}
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
