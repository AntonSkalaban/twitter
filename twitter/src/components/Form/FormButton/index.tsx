import { FC } from "react";

import { Button } from "styled";

import { FormButtonProps } from "./types";

export const FormButton: FC<FormButtonProps> = ({ title, isFetching }) => {
  return (
    <Button $color="blue" disabled={isFetching}>
      {isFetching ? "Fetching..." : title}
    </Button>
  );
};
