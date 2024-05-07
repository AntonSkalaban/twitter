import { ChangeEvent, FC, useState } from "react";
import { NavLink } from "react-router-dom";

import { Button, H2, Input } from "styled";
import TwitterIcon from "assets/images/svg/twitter-logo.svg?react";

import { LoginForm, LoginWrapper } from "./styled";

export const Login: FC = () => {
  const [emailOrNumber, setEmailOrNumber] = useState({ value: "", error: "" });
  const [password, setPassword] = useState({ value: "", error: "" });

  const hanldeEmailOrNumberChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmailOrNumber((prev) => ({ ...prev, value }));
  };

  const hanldePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPassword((prev) => ({ ...prev, value }));
  };

  return (
    <LoginWrapper>
      <TwitterIcon />
      <H2>Log in to Twitter</H2>
      <LoginForm>
        <Input
          placeholder="Name"
          value={emailOrNumber.value}
          onChange={hanldeEmailOrNumberChange}
        />
        <Input
          type="password"
          placeholder="Password"
          value={password.value}
          onChange={hanldePasswordChange}
        />
        <Button $color="blue">Log in</Button>
      </LoginForm>
      <NavLink to={"/sign-up"} style={{ textAlign: "end" }}>
        Sign up to Twitter
      </NavLink>
    </LoginWrapper>
  );
};
