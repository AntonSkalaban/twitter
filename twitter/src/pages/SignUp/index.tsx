import { ChangeEvent, FC, FormEvent, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

import { addUser } from "api/fireStoreApi";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { Button, Input } from "styled";
import { BitrhDaySelect } from "components/BirthDaySelect.ts";
import { auth } from "constants/index";
import TwitterIcon from "assets/images/svg/twitter-logo.svg?react";

import { birthdayText } from "./constansts";
import {
  BirthdayContainer,
  SignUpForm,
  SignUpH3,
  SignUpH4,
  SignUpInpitsContainer,
  SignUpP,
  SignUpWrapper,
} from "./styled";

export const SignUp: FC = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [dateOfBirth, setDateOfBirth] = useState({ month: "", day: "", year: "" });

  const navigate = useNavigate();
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

  const hanldePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.trim();
    setPassword(value);
  };

  const hanldeSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const birth = new Date(+dateOfBirth.year, +dateOfBirth.month, +dateOfBirth.day).toISOString();
    if (name && password && phone && email && birth) {
      const { user } = await createUserWithEmailAndPassword(auth, email, password);

      addUser({ id: user.uid, name, email, phone, birth, image: null });
      navigate("/profile");
    }
  };

  return (
    <SignUpWrapper>
      <TwitterIcon />
      <SignUpH3>Create an account</SignUpH3>

      <SignUpForm onSubmit={hanldeSubmit}>
        <SignUpInpitsContainer>
          <Input placeholder="Name" value={name} onChange={hanldeNameChange} />
          <Input
            type="tel"
            placeholder="Phone number"
            value={phone}
            onChange={hanldeNumberChange}
          />
          <Input type="email" placeholder="Email" value={email} onChange={hanldeEmailChange} />
          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={hanldePasswordChange}
          />
        </SignUpInpitsContainer>

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
