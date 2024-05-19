import * as yup from "yup";

export const schema = yup.object({
  name: yup.string().required("Required"),
  phone: yup.string().length(11, "Length error").required("Required"),
  email: yup.string().email("Invalid email address").required("Required"),
  birthday: yup.object().shape({
    month: yup.string().required("Required"),
    year: yup.string().required("Required"),
    day: yup.string().required("Required"),
  }),
});

export const defaultValues = {
  name: "",
  phone: "",
  email: "",
  birthday: { month: "", year: "", day: "" },
};

export const birthdayText = `Facilisi sem pulvinar velit nunc, gravida scelerisque amet nibh sit. Quis bibendum ante
phasellus metus, magna lacinia sed augue. Odio enim nascetur leo mauris vel eget.
Pretium id ullamcorper blandit viverra dignissim eget tellus. Nibh mi massa in molestie
a sit. Elit congue.`;
