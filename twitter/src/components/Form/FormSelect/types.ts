import { SelectHTMLAttributes } from "react";

import { Option } from "types";

export interface FormSelectProps extends Omit<SelectHTMLAttributes<HTMLSelectElement>, "onChange"> {
  title: string;
  options: Option[];
  error?: string;
  onChange: (value: string) => void;
}
