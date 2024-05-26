import { Option } from "types";

export const isLeapYear = (year: number) => {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
};

export const getDaysInMonth = (month: number, year: number) => {
  if (month === 3 || month === 5 || month === 8 || month === 10) {
    return 30;
  }

  if (month == 1) {
    if (isLeapYear(year)) {
      return 29;
    }
    return 28;
  }

  return 31;
};

export const getYearsOptions = (
  startYear: number,
  endYear: number,
  isFebruary29: boolean,
): Option[] => {
  const years = [];
  for (let year = startYear; year >= endYear; year--) {
    if (isFebruary29 && !isLeapYear(year)) continue;
    years.push({ name: year, value: year });
  }
  return years;
};

export const getDaysOptions = (daysInSelectMonth: number) => {
  return Array.from({ length: daysInSelectMonth }).map((_, i) => {
    const day = i + 1;
    return { name: day, value: day } as Option;
  });
};
