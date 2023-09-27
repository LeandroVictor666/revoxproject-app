import MonthsEnum from "../../Types/Months.enum";

const RenderMonthsComponent = (): JSX.Element => {
  const monthEnumsObject = Object.values(MonthsEnum);
  const monthsArray: JSX.Element[] = [];

  monthEnumsObject.map((el, key) => {
    monthsArray.push(
      <option value={el} key={key}>
        {el}
      </option>
    );
  });
  return <>{monthsArray}</>;
};

export default RenderMonthsComponent;
