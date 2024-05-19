import { FC, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { Button } from "styled";
import { FormInput } from "components/Form/FormInput";

import { defaultValues, schema } from "./const";
import { StyledPasswordForm } from "./style";
import { FormValues, PasswordFormProps } from "./types";

export const PasswordForm: FC<PasswordFormProps> = ({ onSubmit }) => {
  const { control, setError, handleSubmit } = useForm<FormValues>({
    resolver: yupResolver(schema),
    defaultValues,
  });

  const [isFetching, setIsFetching] = useState(false);

  const hanldeFormSubmit = async (data: FormValues) => {
    setIsFetching(true);
    const e = await onSubmit(data.password);

    if (e) setError("password", { message: e });
    setIsFetching(false);
  };

  return (
    <StyledPasswordForm onSubmit={handleSubmit(hanldeFormSubmit)}>
      <Controller
        control={control}
        name="password"
        render={({ field, formState }) => (
          <FormInput
            {...field}
            type="password"
            placeholder="Password"
            error={formState.errors.password?.message}
          />
        )}
      />

      <Button $color="blue" disabled={isFetching}>
        {isFetching ? "Fetching..." : "Save"}
      </Button>
    </StyledPasswordForm>
  );
};
