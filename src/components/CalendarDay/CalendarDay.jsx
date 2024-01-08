import { DayWrapper, Day, DayPercent } from './CalendarDay.styled';

export const CalendarDay = ({
  idx,
  handleClick,
  completedDays,
  monthWater,
}) => {
  const dayNumber = idx + 1;
  const isCompleted = completedDays.includes(dayNumber);

  const dayData = monthWater.find(data => data.dayNumber === dayNumber);
  const percent = dayData ? Math.round(dayData.percent) : 0;

  return (
    <DayWrapper onClick={handleClick} id={idx}>
      <Day
        style={{
          border: isCompleted ? '1px solid var(--secondary-orange)' : '',
        }}
      >
        {idx + 1}
      </Day>
      <DayPercent>{percent}%</DayPercent>
    </DayWrapper>
  );
};
