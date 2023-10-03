import MonthsEnum from "../../Types/Months.enum";

export default class DateController {
  getMonthNumber = (month: MonthsEnum) => {
    switch (month) {
      case MonthsEnum.January: {
        return 0;
      }
      case MonthsEnum.February: {
        return 1;
      }
      case MonthsEnum.March: {
        return 2;
      }
      case MonthsEnum.April: {
        return 3;
      }
      case MonthsEnum.May: {
        return 4;
      }
      case MonthsEnum.June: {
        return 5;
      }
      case MonthsEnum.July: {
        return 6;
      }
      case MonthsEnum.August: {
        return 7;
      }
      case MonthsEnum.September: {
        return 8;
      }
      case MonthsEnum.October: {
        return 9;
      }
      case MonthsEnum.November: {
        return 10;
      }
      case MonthsEnum.December: {
        return 11;
      }
    }
  };
}
