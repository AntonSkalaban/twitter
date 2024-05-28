import * as yup from "yup";

export const telRegExp = /^\d{11}$/;
const emailRegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const schema = yup.object().shape({
  emailOrPhone: yup
    .string()
    .required("Required")
    .test(
      "emailOrPhone",
      "Should contain email or phone",
      (value) => emailRegExp.test(value) || telRegExp.test(value),
    ),
  password: yup.string().required("Required"),
});

export const defaultValues = {
  emailOrPhone: "",
  password: "",
};
