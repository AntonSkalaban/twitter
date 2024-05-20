import * as yup from "yup";

export const telRegExp = /^\d{11}$/;
const emailRegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const schema = yup.object().shape({
  emailOrPhone: yup
    .string()
    .required("Required")
    .test(
      "emailOrPhone",
      "Некорректное значение",
      (value) => emailRegExp.test(value) || telRegExp.test(value),
    ),
  password: yup.string().email("Invalid email address").required("Required"),
});

export const defaultValues = {
  emailOrPhone: "",
  password: "",
};
