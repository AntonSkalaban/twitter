import { Control } from "react-hook-form";

export interface ImageInputProps {
  name: string;
  control: Control<{ [key: string]: string }>;
  onUpload: (image: string) => void;
}
