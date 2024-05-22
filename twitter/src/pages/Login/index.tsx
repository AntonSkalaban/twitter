import { FC } from "react";
import { Controller, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { signInWithEmailAndPassword } from "firebase/auth";

import { UserApi } from "api/UserApi";
import { H2, StyledForm } from "styled";
import { FormInput } from "components/Form/FormInput";
import { FormButton } from "components/index";
import { setUser } from "store/slices";
import { auth } from "constants/index";
import TwitterIcon from "assets/images/svg/twitter-logo.svg?react";

import { defaultValues, schema, telRegExp } from "./constants";
import { FormValues } from "./types";
import { LoginWrapper } from "./styled";

export const Login: FC = () => {
  const { control, handleSubmit } = useForm<FormValues>({
    resolver: yupResolver(schema),
    defaultValues,
    mode: "onSubmit",
  });

  const dispath = useDispatch();

  const navigate = useNavigate();

  const onSubmit = async (data: FormValues) => {
    const { emailOrPhone, password } = data;

    let userFromDB;
    let email = emailOrPhone;

    const isPhoneNumber = telRegExp.test(data.emailOrPhone);

    if (isPhoneNumber) {
      userFromDB = (await UserApi.getUsersDoc("phone", emailOrPhone))[0];
      if (!userFromDB) return;
      email = userFromDB.email;
    }

    const { user } = await signInWithEmailAndPassword(auth, email, password);
    if (!user) return;
    userFromDB ??= await UserApi.getUserDoc(user.uid);

    if (userFromDB) dispath(setUser(userFromDB));
    navigate("/profile");
  };

  return (
    <LoginWrapper>
      <TwitterIcon />
      <H2>Log in to Twitter</H2>

      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <Controller
          control={control}
          name="emailOrPhone"
          render={({ field, formState }) => (
            <FormInput
              {...field}
              error={formState.errors.emailOrPhone?.message}
              placeholder="Email of phone"
              maxLength={11}
            />
          )}
        />
        <Controller
          control={control}
          name="password"
          render={({ field, formState }) => (
            <FormInput
              type="password"
              {...field}
              error={formState.errors.password?.message}
              placeholder="Password"
            />
          )}
        />

        <FormButton title="Log in" />
      </StyledForm>
      <NavLink to={"/sign-up"} style={{ textAlign: "end" }}>
        Sign up to Twitter
      </NavLink>
    </LoginWrapper>
  );
};
