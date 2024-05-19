import { FC, forwardRef, InputHTMLAttributes } from "react";
import {
  Control,
  FieldError,
  FieldValues,
  useController,
  UseControllerProps,
  useFormContext,
} from "react-hook-form";

import { Input } from "styled/index";
import { ErrorMessage } from "components/UI/ErrorMessage";

interface FormInputProps extends InputHTMLAttributes<HTMLInputElement> {
  // // name: string;
  // error?: FieldError;
  // name: string;
  // control: UseControllerProps<FormValues>;
  error: string;
}

// export const FormInput = forwardRef<HTMLInputElement, FormInputProps>(
//   ({ error, ...props }, ref) => {
//     return (
//       <div>
//         <Input {...props} ref={ref} />
//         <ErrorMessage error={error} />
//       </div>
//     );
//   },
// );

export const FormInput: FC<FormInputProps> = ({ error, ...props }) => {
  // const { field, fieldState } = useController({ control, name });

  return (
    <div>
      <Input {...props} />
      {/* {fieldState.error?.message} */}
      <p>{error}</p>
    </div>
  );
};

interface PhoneInputProps {
  control: Control<FieldValues>;
  error?: FieldError;
}

export const PhoneInput: FC<PhoneInputProps> = ({ control, error }) => {
  const { field } = useController({
    control,
    name: "phone",
  });

  return (
    <FormInput
      name={"phone"}
      value={field.value}
      maxLength={11}
      error={error}
      type="phone"
      onChange={(e) => {
        field.onChange(e.target.value.replace(/[^+\d]/g, ""));
      }}
    />
  );
};

// export const PhoneInput: FC<FormInputProps> = ({ name, ...props }) => {
//   const {
//     control,
//     formState: { errors },
//   } = useFormContext();

//   const { field } = useController({
//     control,
//     name,
//   });

//   return (
//     <div>
//       <FormInput
//         name={"phone"}
//         value={field.value}
//         {...props}
//         maxLength={11}
//         onChange={(e) => {
//           field.onChange(e.target.value.replace(/[^+\d]/g, ""));
//         }}
//       />
//       {/* <p>{errors[name]?.message?.toString()}</p> */}
//     </div>
//   );
// };

// export const FormInput: FC<FormInputProps> = ({ name, ...props }) => {
//   const {
//     register,
//     formState: { errors },
//   } = useFormContext();

//   return (
//     <div>
//       <Input {...register(name)} {...props} />
//       <p>{errors[name]?.message?.toString()}</p>
//     </div>
//   );
// };
