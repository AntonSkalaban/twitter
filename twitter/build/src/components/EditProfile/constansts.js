import * as yup from "yup";
export const schema = yup.object({
    image: yup.string(),
    name: yup.string().required("Required"),
    email: yup.string().email("Invalid email address").required("Required"),
    phone: yup.string().min(0).max(11, "Length error"),
    birthday: yup.object().shape({
        month: yup.string(),
        year: yup.string(),
        day: yup.string(),
    }),
    password: yup.string(),
});
