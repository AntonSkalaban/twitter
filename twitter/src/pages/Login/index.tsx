import { ChangeEvent, FC, FormEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";

import { getUserByField } from "api/fireStoreApi";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Button, H2, Input } from "styled";
import { setUser } from "store/slices";
import { auth } from "constants/index";
import TwitterIcon from "assets/images/svg/twitter-logo.svg?react";

import { LoginForm, LoginWrapper } from "./styled";

export const Login: FC = () => {
  const [emailOrNumber, setEmailOrNumber] = useState({ value: "", error: "" });
  const [password, setPassword] = useState({ value: "", error: "" });

  const dispath = useDispatch();

  const navigate = useNavigate();

  const hanldeEmailOrNumberChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmailOrNumber((prev) => ({ ...prev, value }));
  };

  const hanldePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPassword((prev) => ({ ...prev, value }));
  };

  const hanldeSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const isPhoneNumber = /^\d+$/.test(emailOrNumber.value);

    let email = emailOrNumber.value;

    if (isPhoneNumber) {
      email = (await getUserByField("phone", emailOrNumber.value)).email;
    }
    const { user } = await signInWithEmailAndPassword(auth, email, password.value);
    if (user)
      dispath(
        setUser({
          id: user.uid,
          name: user.displayName || "",
          email: user.email || "",
          phone: user.phoneNumber,
          image: user.photoURL,
        }),
      );
    navigate("/profile");
  };

  return (
    <LoginWrapper>
      <TwitterIcon />
      <H2>Log in to Twitter</H2>
      <LoginForm onSubmit={hanldeSubmit}>
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
