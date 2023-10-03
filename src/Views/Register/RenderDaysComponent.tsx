const renderDaysComponent = (): JSX.Element[] => {
  const daysRow: JSX.Element[] = [];

  for (let i: number = 1; i <= 31; i++) {
    daysRow.push(
      <option value={i} key={i}>
        {i}
      </option>
    );
  }
  return daysRow;
};

export default renderDaysComponent;
