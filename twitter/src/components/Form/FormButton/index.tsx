import { FC } from "react";

import { Button } from "styled/index";

interface FormButtonProps {
  title: string;
  isFetching?: boolean;
}

export const FormButton: FC<FormButtonProps> = ({ title, isFetching }) => {
  return (
    <Button $color="blue" disabled={isFetching}>
      {isFetching ? "Fetching..." : title}
    </Button>
  );
};
