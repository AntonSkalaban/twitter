import { FC } from "react";

interface ErrorMessageProps {
  error?: string;
}
export const ErrorMessage: FC<ErrorMessageProps> = ({ error }) => {
  if (!error) return null;
  return <p style={{ color: "red" }}> {error}</p>;
};
