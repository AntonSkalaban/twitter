import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useMemo } from "react";
import { Controller, useWatch } from "react-hook-form";
import { FormSelect } from "components";
import { monthsOptions } from "./constants";
import { getDaysInMonth, getDaysOptions, getYearsOptions } from "./helpers";
import { SelectsContainer } from "./styled";
export const DateSelect = ({ control }) => {
    const { month, day, year } = useWatch({
        name: "birthday",
        control,
    });
    const monthName = useMemo(() => monthsOptions.find(({ value }) => value === +month)?.name, [month]);
    const daysInSelectMonth = useMemo(() => getDaysInMonth(+month, +year), [month, year]);
    const daysOtions = useMemo(() => getDaysOptions(daysInSelectMonth || 31), [daysInSelectMonth]);
    const yearsOptions = useMemo(() => {
        const year = new Date().getFullYear();
        const isFebruary29 = +month === 1 && +day === 29;
        return getYearsOptions(year, year - 99, isFebruary29);
    }, [month, day]);
    return (_jsxs(SelectsContainer, { children: [_jsx(Controller, { control: control, name: "birthday.month", render: ({ field, formState: { errors } }) => (_jsx(FormSelect, { title: month ? monthName : "Month", options: monthsOptions, onChange: (value) => field.onChange(value), error: errors.birthday?.month?.message })) }), _jsx(Controller, { control: control, name: "birthday.day", render: ({ field, formState: { errors } }) => (_jsx(FormSelect, { ...field, title: day || "Day", options: daysOtions, onChange: (value) => field.onChange(value), error: errors.birthday?.day?.message })) }), _jsx(Controller, { control: control, name: "birthday.year", render: ({ field, formState: { errors } }) => (_jsx(FormSelect, { title: year || "Year", options: yearsOptions, onChange: (value) => field.onChange(value), error: errors.birthday?.year?.message })) })] }));
};
