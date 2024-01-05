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
    <div>
      <button onClick={prevMonth}>prev</button>
      <div>{newDate.toLocaleString('en-GB', { month: 'long' })}</div>
      <button onClick={nextMonth}>next</button>
    </div>
  );
};
