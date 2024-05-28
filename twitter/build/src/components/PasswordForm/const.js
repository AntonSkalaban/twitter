import * as yup from "yup";
export const schema = yup.object({
    password: yup.string().required("Required"),
});
export const defaultValues = { password: "" };
