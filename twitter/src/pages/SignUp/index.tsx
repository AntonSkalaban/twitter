import { ChangeEvent, FC, FormEvent, useMemo, useState } from "react";
import { NavLink } from "react-router-dom";

import { Button } from "styled";
import { Select } from "components";
import { Option } from "types";
import { daysInMonth, months } from "./constants";
import { SelectsContainer, SignUpInput, SignUpTitle } from "./styled";

const getYearsOptions = (startYear: number, endYear: number, isFebruary29: boolean): Option[] => {
  const years = [];

  for (let year = startYear; year >= endYear; year--) {
    if (isFebruary29 && !isLeapYear(year)) continue;
    years.push({ name: year, value: year });
  }
  return years;
};

function isLeapYear(year: number) {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

interface YearInputProps {
  value: { month: string; day: string; year: string };
  onSelect: (value: { month?: string; day?: string; year?: string }) => void;
}
export const YearInput: FC<YearInputProps> = ({ value, onSelect }) => {
  const daysInSelectMonth = useMemo(() => {
    return daysInMonth[value.month];
  }, [value.month]);

  const daysOtions = useMemo(() => {
    return Array.from({ length: daysInSelectMonth || 31 }).map((_, i) => {
      const day = i + 1;
      return { name: day, value: day } as Option;
    });
  }, [daysInSelectMonth]);

  const yearsOtions = useMemo(() => {
    const date = new Date();
    const startDate = date.getFullYear();
    const endDate = date.getFullYear() - 99;

    const isFebruary29 = value.month === "February" && +value.day === 29;

    return getYearsOptions(startDate, endDate, isFebruary29);
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
      <Select title={value.month || "Month"} options={months} onSelect={hanldeMonthSelect} />
      <Select title={value.day || "Day"} options={daysOtions} onSelect={hanldeDaySelect} />
      <Select title={value.year || "Year"} options={yearsOtions} onSelect={hanldeYearSelect} />
    </SelectsContainer>
  );
};

export const SignUp: FC = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const [dateOfBirth, setDateOfBirth] = useState({ month: "", day: "", year: "" });

  const hanldeNumberChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, "");
    if (value.length > 11) return;
    setPhone(value);
  };

  const hanldeNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.trim();
    setName(value);
  };

  const hanldeEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.trim();
    setEmail(value);
  };

  const hanldeDateOfBithChanhe = (value: { month?: string; day?: string; year?: string }) => {
    setDateOfBirth((prev) => ({ ...prev, ...value }));
  };

  return (
    <main>
      <form
        style={{ width: "750px", padding: "40px" }}
        onSubmit={(e: FormEvent) => e.preventDefault()}
      >
        <SignUpTitle>Create an account</SignUpTitle>

        <SignUpInput placeholder="Name" value={name} onChange={hanldeNameChange} />
        <SignUpInput
          type="tel"
          placeholder="Phone number"
          value={phone}
          onChange={hanldeNumberChange}
        />

        <SignUpInput type="email" placeholder="Email" value={email} onChange={hanldeEmailChange} />

        <NavLink to={"/"}>Use email</NavLink>

        <YearInput value={dateOfBirth} onSelect={hanldeDateOfBithChanhe} />

        <Button $color="blue">Next</Button>
      </form>
    </main>
  );
};
