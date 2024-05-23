import { FC, MouseEvent, useRef, useState } from "react";
import { Control, Controller, useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { yupResolver } from "@hookform/resolvers/yup";

import { StyledForm, UserAvatar } from "styled/index";
import { BitrhDaySelect } from "components/BirthDaySelect";
import { FormButton } from "components/Form/FormButton";
import { FormImageInput } from "components/Form/FormImageInput";
import { FormInput } from "components/Form/FormInput";
import { ErrorMessage } from "components/UI/ErrorMessage";
import { getUser } from "store/slices";

import { schema } from "./constansts";
import { getDefaultValues } from "./helpers";
import { useEditUser } from "./hook";
import { FormValues } from "./types";
import { AvatarContainer } from "./styled";

export const EditProfile: FC = () => {
  const user = useSelector(getUser);

  const { isFetching, errorMessage, trigger } = useEditUser(user);

  const imageInputRef = useRef<HTMLInputElement>(null);

  const [base64String, setBase64String] = useState(user.image);

  const { control, handleSubmit } = useForm<FormValues>({
    resolver: yupResolver(schema),
    defaultValues: getDefaultValues(user),
  });

  const handleImageUpload = (e: MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    imageInputRef.current?.click();
  };

  const onSubmit = async (data: FormValues) => {
    await trigger(data, base64String);
  };

  return (
    <div>
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <AvatarContainer onClick={handleImageUpload}>
          <UserAvatar src={base64String || ""} />
        </AvatarContainer>

        <FormImageInput
          name="image"
          ref={imageInputRef}
          control={control as unknown as Control<{ [key: string]: string }>}
          onUpload={(image) => setBase64String(image)}
        />

        <Controller
          name="name"
          control={control}
          render={({ field, formState: { errors } }) => (
            <FormInput {...field} placeholder="Name" error={errors.name?.message} />
          )}
        />

        <Controller
          name="email"
          control={control}
          render={({ field, formState: { errors } }) => (
            <FormInput {...field} placeholder="Email" error={errors.email?.message} />
          )}
        />

        <Controller
          name="phone"
          control={control}
          render={({ field, formState: { errors } }) => (
            <FormInput
              {...field}
              type="tel"
              maxLength={11}
              placeholder="Phone (80XXYYYYYYY)"
              error={errors.phone?.message}
            />
          )}
        />

        <Controller
          name="password"
          control={control}
          render={({ field, formState: { errors } }) => (
            <FormInput
              {...field}
              type="password"
              maxLength={11}
              placeholder="Password"
              error={errors.password?.message}
            />
          )}
        />
        <ErrorMessage error={errorMessage} />

        <BitrhDaySelect
          control={
            control as unknown as Control<{
              birthday: { month: string; year: string; day: string };
            }>
          }
        />
        <FormButton title="Save" isFetching={isFetching} />
      </StyledForm>
    </div>
  );
};
