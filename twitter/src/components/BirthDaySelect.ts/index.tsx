import { FC, useMemo } from "react";

import { Select } from "components";
import { Option } from "types";

import { daysInMonth, monthsOptions } from "./constants";
import { getDaysOptions, getYearsOptions } from "./helpers";
import { SelectsContainer } from "./styled";

interface BitrhDaySelectProps {
  value: { month: string; day: string; year: string };
  onSelect: (value: { month?: string; day?: string; year?: string }) => void;
}

export const BitrhDaySelect: FC<BitrhDaySelectProps> = ({ value, onSelect }) => {
  const daysInSelectMonth = daysInMonth[value.month];

  const daysOtions = useMemo(() => getDaysOptions(daysInSelectMonth || 31), [daysInSelectMonth]);

  const yearsOtions = useMemo(() => {
    const year = new Date().getFullYear();
    const isFebruary29 = value.month === "February" && +value.day === 29;

    return getYearsOptions(year, year - 99, isFebruary29);
  }, [value.month, value.day]);

  const hanldeMonthSelect = (month: Option) => {
    if (daysInSelectMonth !== daysInMonth[month.value]) onSelect({ day: "" });
    onSelect({ month: String(month.value) });
  };

  const hanldeDaySelect = (day: Option) => {
    onSelect({ day: String(day.value) });
  };

  const hanldeYearSelect = (year: Option) => {
    if (value.month === "February" && +value.day === 29) {
      onSelect({ month: "", day: "" });
    }
    onSelect({ year: String(year.value) });
  };

  return (
    <SelectsContainer>
      <Select title={value.month || "Month"} options={monthsOptions} onSelect={hanldeMonthSelect} />
      <Select title={value.day || "Day"} options={daysOtions} onSelect={hanldeDaySelect} />
      <Select title={value.year || "Year"} options={yearsOtions} onSelect={hanldeYearSelect} />
    </SelectsContainer>
  );
};
