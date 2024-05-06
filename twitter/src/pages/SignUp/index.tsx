import { ChangeEvent, FC, FormEvent, useState } from "react";
import { NavLink } from "react-router-dom";

import { Button } from "styled";
import { BitrhDaySelect } from "components/BirthDaySelect.ts";
import TwitterIcon from "assets/images/svg/twitter-logo.svg?react";

import { birthdayText } from "./constansts";
import {
  BirthdayContainer,
  SignUpForm,
  SignUpH3,
  SignUpH4,
  SignUpInput,
  SignUpP,
  SignUpWrapper,
} from "./styled";

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
    <SignUpWrapper>
      <TwitterIcon />
      <SignUpH3>Create an account</SignUpH3>

      <SignUpForm onSubmit={(e: FormEvent) => e.preventDefault()}>
        <SignUpInput placeholder="Name" value={name} onChange={hanldeNameChange} />
        <SignUpInput
          type="tel"
          placeholder="Phone number"
          value={phone}
          onChange={hanldeNumberChange}
        />
        <SignUpInput type="email" placeholder="Email" value={email} onChange={hanldeEmailChange} />
        <NavLink to={"/"}>Use email</NavLink>

        <BirthdayContainer>
          <SignUpH4>Date of birth</SignUpH4>

          <SignUpP>{birthdayText}</SignUpP>

          <BitrhDaySelect value={dateOfBirth} onSelect={hanldeDateOfBithChanhe} />
        </BirthdayContainer>

        <Button $color="blue">Next</Button>
      </SignUpForm>
    </SignUpWrapper>
  );
};
