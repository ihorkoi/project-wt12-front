import DatePicker from 'react-datepicker';
import { Container } from './Datepicker_styled';

export const TimeChange = ({ startDate, setStartDate }) => {
  return (
    <Container>
      <DatePicker
        selected={startDate}
        onChange={date => setStartDate(date)}
        showTimeSelect
        showTimeSelectOnly
        timeIntervals={5}
        timeCaption="Time"
        dateFormat="h:mm"
        isClearable={true}
      />
    </Container>
  );
};
