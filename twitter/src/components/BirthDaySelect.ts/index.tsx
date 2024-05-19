import { FC, useMemo } from "react";
import { Controller, useWatch } from "react-hook-form";

import { Select } from "components";

import { daysInMonth, monthsOptions } from "./constants";
import { getDaysOptions, getYearsOptions } from "./helpers";
import { BitrhDaySelectProps } from "./types";
import { SelectsContainer } from "./styled";

export const BitrhDaySelect: FC<BitrhDaySelectProps> = ({ control }) => {
  const { month, day, year } = useWatch({
    name: "birthday",
    control,
  });

  const daysInSelectMonth = daysInMonth[month];

  const daysOtions = useMemo(() => getDaysOptions(daysInSelectMonth || 31), [daysInSelectMonth]);

  const yearsOptions = useMemo(() => {
    const year = new Date().getFullYear();
    const isFebruary29 = +month === 10 && +day === 29;

    return getYearsOptions(year, year - 99, isFebruary29);
  }, [month, day]);

  return (
    <SelectsContainer>
      <Controller
        control={control}
        name="birthday.month"
        render={({ field, formState: { errors } }) => (
          <Select
            title={month ? monthsOptions[+month].name : "Month"}
            options={monthsOptions}
            onChange={(value: string) => field.onChange(value)}
            error={errors.birthday?.month?.message}
          />
        )}
      />

      <Controller
        control={control}
        name="birthday.day"
        render={({ field, formState: { errors } }) => (
          <Select
            {...field}
            title={day || "Day"}
            options={daysOtions}
            onChange={(value: string) => field.onChange(value)}
            error={errors.birthday?.day?.message}
          />
        )}
      />

      <Controller
        control={control}
        name="birthday.year"
        render={({ field, formState: { errors } }) => (
          <Select
            title={year || "Year"}
            options={yearsOptions}
            onChange={(value: string) => field.onChange(value)}
            error={errors.birthday?.year?.message}
          />
        )}
      />
    </SelectsContainer>
  );
};
