import { forwardRef } from "react";

import { Input } from "styled";
import { ErrorMessage } from "components";

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
