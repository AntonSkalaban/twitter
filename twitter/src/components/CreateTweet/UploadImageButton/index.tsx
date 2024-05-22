import { FC, MouseEvent, useRef } from "react";
import { Control } from "react-hook-form";

import { FormImageInput } from "components/Form/FormImageInput";
import ImageIcon from "assets/images/svg/image.svg?react";

import { UploadImageButtonProps } from "./types";

export const UploadImageButton: FC<UploadImageButtonProps> = ({ control, onUpload }) => {
  const imageInputRef = useRef<HTMLInputElement | null>(null);

  const handleImageUpload = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    imageInputRef.current?.click();
  };

  return (
    <>
      <button onClick={handleImageUpload}>
        {" "}
        <ImageIcon />
      </button>
      <FormImageInput
        name="image"
        ref={imageInputRef}
        control={control as unknown as Control<{ [key: string]: string }>}
        onUpload={onUpload}
      />
    </>
  );
};
