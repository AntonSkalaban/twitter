import { ChangeEvent, FC, useState } from "react";
import { Control, Controller, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { FirebaseError } from "firebase/app";
import { createUserWithEmailAndPassword } from "firebase/auth";

import { StyledForm } from "styled";
import { DateSelect } from "components/DateSelect";
import { FormInput } from "components/Form/FormInput";
import { FormButton } from "components/index";
import { Modal } from "components/Modal";
import { PasswordForm } from "components/PasswordForm";
import { updateUser } from "store/slices";
import { auth } from "constants/index";
import TwitterIcon from "assets/images/svg/twitter-logo.svg?react";

import { birthdayText, defaultValues, schema } from "./constansts";
import { FormValues } from "./types";
import {
  BirthdayContainer,
  SignUpH3,
  SignUpH4,
  SignUpInpitsContainer,
  SignUpP,
  SignUpWrapper,
} from "./styled";

export const SignUp: FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { control, watch, handleSubmit } = useForm<FormValues>({
    resolver: yupResolver(schema),
    defaultValues,
    mode: "onSubmit",
  });

  const [isPasswordOpen, setIsPasswordOpen] = useState(false);

  const watchEmail = watch("email");

  const onSubmit = async (data: FormValues) => {
    const {
      name,
      email,
      phone,
      birthday: { month, day, year },
    } = data;

    const date = new Date(+year, +month, +day).toISOString();

    dispatch(updateUser({ name, email, phone, image: null, birth: date }));
    setIsPasswordOpen(true);
  };

  const closePasswordForm = () => setIsPasswordOpen(false);

  const hanldePasswordSubmit = async (password: string) => {
    try {
      const { user } = await createUserWithEmailAndPassword(auth, watchEmail, password);
      if (!user) return;
      dispatch(updateUser({ id: user.uid }));

      closePasswordForm();
      navigate("/profile");
    } catch (e) {
      if (e instanceof FirebaseError) {
        return e.message;
      }
      return "Произошла неизвестная ошибка. Пожалуйста, попробуйте еще раз.";
    }
  };

  return (
    <SignUpWrapper>
      {isPasswordOpen && (
        <Modal close={closePasswordForm}>
          <PasswordForm onSubmit={hanldePasswordSubmit} />
        </Modal>
      )}

      <TwitterIcon />
      <SignUpH3>Create an account</SignUpH3>

      <StyledForm onSubmit={handleSubmit(onSubmit)} noValidate>
        <SignUpInpitsContainer>
          <Controller
            control={control}
            name="name"
            render={({ field, formState }) => (
              <FormInput {...field} error={formState.errors.name?.message} placeholder="Name" />
            )}
          />

          <Controller
            control={control}
            name="email"
            render={({ field, formState }) => (
              <FormInput {...field} error={formState.errors.email?.message} placeholder="Email" />
            )}
          />

          <Controller
            control={control}
            name="phone"
            render={({ field, formState }) => (
              <FormInput
                {...field}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  field.onChange(e.target.value.replace(/[^+\d]/g, ""))
                }
                error={formState.errors.phone?.message}
                maxLength={11}
                type="tel"
                placeholder="Phone (80XXYYYYYYY)"
              />
            )}
          />
        </SignUpInpitsContainer>

        <NavLink to={"/"}>Use email</NavLink>

        <BirthdayContainer>
          <SignUpH4>Date of birth</SignUpH4>

          <SignUpP>{birthdayText}</SignUpP>
          <DateSelect
            control={
              control as unknown as Control<{
                birthday: { month: string; year: string; day: string };
              }>
            }
          />
        </BirthdayContainer>

        <FormButton title="Next" />
      </StyledForm>
    </SignUpWrapper>
  );
};
