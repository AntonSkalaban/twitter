import { FC, useMemo } from "react";
import { Controller, useWatch } from "react-hook-form";

import { FormSelect } from "components";

import { monthsOptions } from "./constants";
import { getDaysInMonth, getDaysOptions, getYearsOptions } from "./helpers";
import { DateSelectProps } from "./types";
import { SelectsContainer } from "./styled";

export const DateSelect: FC<DateSelectProps> = ({ control }) => {
  const { month, day, year } = useWatch({
    name: "birthday",
    control,
  });

  const monthName = useMemo(
    () => monthsOptions.find(({ value }) => value === +month)?.name as string,
    [month],
  );
  const daysInSelectMonth = useMemo(() => getDaysInMonth(+month, +year), [month, year]);

  const daysOtions = useMemo(() => getDaysOptions(daysInSelectMonth || 31), [daysInSelectMonth]);

  const yearsOptions = useMemo(() => {
    const year = new Date().getFullYear();
    const isFebruary29 = +month === 1 && +day === 29;
    return getYearsOptions(year, year - 99, isFebruary29);
  }, [month, day]);

  return (
    <SelectsContainer>
      <Controller
        control={control}
        name="birthday.month"
        render={({ field, formState: { errors } }) => (
          <FormSelect
            title={month ? monthName : "Month"}
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
          <FormSelect
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
          <FormSelect
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
