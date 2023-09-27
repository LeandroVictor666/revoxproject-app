import * as AccountRules from "../../Rules/AccountRules";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const renderYearsComponent = (): JSX.Element[] => {
  const yearsArray: JSX.Element[] = [];

  for (
    let i = AccountRules.BIRTHDAY_MAX_YEAR;
    i <= AccountRules.BIRTHDAY_ACTUAL_YEAR;
    i++
  ) {
    yearsArray.push(<option>{i}</option>);
  }

  return yearsArray;
};
export default renderYearsComponent;
