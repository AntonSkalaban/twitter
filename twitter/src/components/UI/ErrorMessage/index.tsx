import { FC } from "react";

import { ErrorMessageProps } from "./types";

export const ErrorMessage: FC<ErrorMessageProps> = ({ error }) => {
  if (!error) return null;
  return <p style={{ color: "red" }}> {error}</p>;
};
