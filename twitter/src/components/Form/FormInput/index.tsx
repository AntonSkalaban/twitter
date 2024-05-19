import { forwardRef } from "react";

import { Input } from "styled/index";
import { ErrorMessage } from "components/UI/ErrorMessage";

import { FormInputProps } from "./types";

export const FormInput = forwardRef<HTMLInputElement, FormInputProps>(
  ({ error, ...props }, ref) => {
    return (
      <div>
        <Input {...props} ref={ref} />
        <ErrorMessage error={error} />
      </div>
    );
  },
);
