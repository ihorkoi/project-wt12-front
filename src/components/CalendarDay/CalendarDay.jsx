import { CalendarModal } from 'components/CalendarModal/CalendarModal';
import { DayWrapper, Day, DayPercent } from './CalendarDay.styled';
import { useRef, useState } from 'react';

export const CalendarDay = ({
  idx,
  // completedDays,
  monthWater,
  currentMonth,
  currentYear,
  onClose,
}) => {
  const [isActiveDayModal, setIsActiveDayModal] = useState(false);
  const [selectedDay, setSelectedDay] = useState(null);

  const buttonRef = useRef();
  const handleClick = () => {
    setSelectedDay(dayNumber);
    setIsActiveDayModal(true);
  };

  const handleClose = () => {
    setSelectedDay(null);
    setIsActiveDayModal(false);
    onClose();
  };

  const dayNumber = idx + 1;
  const moreThanCurrentDate =
    new Date() > new Date(currentYear, currentMonth - 1, dayNumber);

  const dayData = monthWater.find(data => data.dayNumber === dayNumber);
  const percent = dayData ? Math.round(dayData.percent) : 0;
  return (
    <>
      <DayWrapper onClick={handleClick} id={idx}>
        <Day
          ref={buttonRef}
          style={{
            border:
              percent < 100 && moreThanCurrentDate
                ? '1px solid var(--secondary-orange)'
                : '',
          }}
        >
          {idx + 1}
        </Day>
        <DayPercent>{percent}%</DayPercent>
      </DayWrapper>
      <CalendarModal
        isOpen={isActiveDayModal}
        onClose={handleClose}
        selectedDay={dayNumber}
        selectedMonth={currentMonth}
        dayData={dayData}
        buttonRef={buttonRef}
      />
    </>
  );
};
