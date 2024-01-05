import { Picker, PickerButton, PickerMonthName } from './MonthPicker.styled';
import { ReactComponent as LeftArr } from '../../img/icons/chevron-left.svg';
import { ReactComponent as RightArr } from '../../img/icons/chevron-right.svg';

export const MonthPicker = ({ newDate, setNewDate }) => {
  const nextMonth = () => {
    const dateCopy = new Date(newDate);
    dateCopy.setMonth(dateCopy.getMonth() + 1);
    setNewDate(dateCopy);
  };

  const prevMonth = () => {
    const dateCopy = new Date(newDate);
    dateCopy.setMonth(dateCopy.getMonth() - 1);
    setNewDate(dateCopy);
  };

  return (
    <Picker>
      <PickerButton onClick={prevMonth}>
        <LeftArr />
      </PickerButton>
      <PickerMonthName>
        {newDate.toLocaleString('en-GB', { month: 'long' })}
      </PickerMonthName>
      <PickerButton onClick={nextMonth}>
        <RightArr />
      </PickerButton>
    </Picker>
  );
};
