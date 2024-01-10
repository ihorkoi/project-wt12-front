import { DayWrapper, Day, DayPercent } from './CalendarDay.styled';

export const CalendarDay = ({
  idx,
  handleClick,
  monthWater,
  currentMonth,
  currentYear,
}) => {
  const dayNumber = idx + 1;
  const moreThanCurrentDate =
    new Date() > new Date(currentYear, currentMonth - 1, dayNumber);

  const dayData = monthWater.find(data => data.dayNumber === dayNumber);
  const percent = dayData ? Math.round(dayData.percent) : 0;

  return (
    <DayWrapper onClick={handleClick} id={idx}>
      <Day
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
  );
};
