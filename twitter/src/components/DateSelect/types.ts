import { Control } from "react-hook-form";

export interface FormValues {
  birthday: { month: string; year: string; day: string };
}

export interface DateSelectProps {
  control: Control<{
    birthday: { month: string; year: string; day: string };
  }>;
}
