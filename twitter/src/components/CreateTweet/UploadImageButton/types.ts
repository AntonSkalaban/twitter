import { Control } from "react-hook-form";

export interface UploadImageButtonProps {
  control: Control<{ image: string }>;
  onUpload: (value: string) => void;
}
