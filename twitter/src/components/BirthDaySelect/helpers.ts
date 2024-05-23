import { Option } from "types";

const isLeapYear = (year: number) => {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
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
