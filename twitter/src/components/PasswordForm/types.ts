export interface PasswordFormProps {
  onSubmit: (password: string) => Promise<void | string>;
}

export interface FormValues {
  password: string;
}
