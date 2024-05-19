import { User } from "types/index";

export const getDefaultValues = (user: User) => {
  const { name, phone, email, birth } = user;

  let month = "";
  let day = "";
  let year = "";

  if (birth) {
    const dateObj = new Date(birth);
    month = String(dateObj.getMonth() + 1);
    year = String(dateObj.getFullYear());
    day = String(dateObj.getDate());
  }

  return {
    image: "",
    name,
    email,
    phone: phone || "",
    birthday: { month, year, day },
    password: "",
  };
};
