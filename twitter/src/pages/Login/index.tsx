import { FC } from "react";
import { Controller, useForm } from "react-hook-form";
import { NavLink } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";

import { H2, StyledForm } from "styled";
import { FormInput } from "components/Form/FormInput";
import { FormButton } from "components/index";
import { ErrorMessage } from "components/UI/ErrorMessage";
import TwitterIcon from "assets/images/svg/twitter-logo.svg?react";

import { defaultValues, schema } from "./constants";
import { useLogin } from "./hooks";
import { FormValues } from "./types";
import { LoginWrapper } from "./styled";

export const Login: FC = () => {
  const { login, isFetching, error } = useLogin();

  const { control, handleSubmit } = useForm<FormValues>({
    resolver: yupResolver(schema),
    defaultValues,
    mode: "onSubmit",
  });

  const onSubmit = (data: FormValues) => {
    login(data);
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
              data-testid="emailOrPhone"
              error={formState.errors.emailOrPhone?.message}
              placeholder="Email of phone"
            />
          )}
        />
        <Controller
          control={control}
          name="password"
          render={({ field, formState }) => (
            <FormInput
              {...field}
              data-testid="password"
              type="password"
              error={formState.errors.password?.message}
              placeholder="Password"
            />
          )}
        />

        <ErrorMessage error={error} />
        <FormButton title="Log in" isFetching={isFetching} />
      </StyledForm>
      <NavLink to={"/sign-up"} style={{ textAlign: "end" }}>
        Sign up to Twitter
      </NavLink>
    </LoginWrapper>
  );
};
