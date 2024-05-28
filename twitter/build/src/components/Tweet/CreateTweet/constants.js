import * as yup from "yup";
export const schema = yup.object().shape({
    title: yup.string().max(140).required(),
    image: yup.string(),
});
export const defaultValues = {
    title: "",
    image: "",
};
