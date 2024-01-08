import { Picker, PickerButton, PickerMonthName } from './MonthPicker.styled';
import { ReactComponent as LeftArr } from '../../img/icons/chevron-left.svg';
import { ReactComponent as RightArr } from '../../img/icons/chevron-right.svg';

export const MonthPicker = ({ currentDate, setCurrentDate }) => {
  const nextMonth = () => {
    const dateCopy = new Date(currentDate);
    dateCopy.setMonth(dateCopy.getMonth() + 1);
    setCurrentDate(dateCopy);
  };

  const prevMonth = () => {
    const dateCopy = new Date(currentDate);
    dateCopy.setMonth(dateCopy.getMonth() - 1);
    setCurrentDate(dateCopy);
  };

  return (
    <Picker>
      <PickerButton onClick={prevMonth}>
        <LeftArr />
      </PickerButton>
      <PickerMonthName>
        {currentDate.toLocaleString('en-GB', { month: 'long' })},{' '}
        {currentDate.getFullYear()}
      </PickerMonthName>
      <PickerButton onClick={nextMonth}>
        <RightArr />
      </PickerButton>
    </Picker>
  );
};
