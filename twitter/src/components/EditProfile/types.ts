export interface FormValues {
  image?: string;
  name: string;
  email: string;
  phone?: string;
  birthday: {
    month?: string;
    year?: string;
    day?: string;
  };
  password?: string;
}
