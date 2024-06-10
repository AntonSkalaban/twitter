import { ChangeEvent, FC, MouseEvent, useRef, useState } from "react";
import { Control, Controller, useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { yupResolver } from "@hookform/resolvers/yup";

import { StyledForm, UserAvatar } from "styled";
import { DateSelect, ErrorMessage, FormButton, FormImageInput, FormInput } from "components";
import { getUser } from "store/slices";

import { schema } from "./constansts";
import { getDefaultValues } from "./helpers";
import { useEditUser } from "./hook";
import { FormValues } from "./types";
import { AvatarContainer, EditAvatarBtn } from "./styled";

export const EditProfile: FC = () => {
  const user = useSelector(getUser);

  const { isFetching, errorMessage, trigger } = useEditUser(user);

  const imageInputRef = useRef<HTMLInputElement>(null);

  const [base64String, setBase64String] = useState(user.image);

  const { control, handleSubmit } = useForm<FormValues>({
    resolver: yupResolver(schema),
    defaultValues: getDefaultValues(user),
    mode: "all",
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
          <EditAvatarBtn>Click to edit</EditAvatarBtn>
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
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                field.onChange(e.target.value.replace(/[^+\d]/g, ""))
              }
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

        <DateSelect
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
