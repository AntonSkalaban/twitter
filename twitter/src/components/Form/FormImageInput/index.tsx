import { forwardRef, useImperativeHandle, useRef } from "react";
import { Controller } from "react-hook-form";

import { convertImageToBase64 } from "utils";

import { ImageInputProps } from "./types";

export const FormImageInput = forwardRef<HTMLInputElement, ImageInputProps>(
  ({ control, name, onUpload }, ref) => {
    const inputRef = useRef<HTMLInputElement>(null);

    useImperativeHandle(
      ref,
      () =>
        ({
          click: () => {
            inputRef.current?.click();
          },
          files: inputRef.current?.files,
        }) as HTMLInputElement,
    );

    const uploadImageDisplay = async () => {
      const files = inputRef.current?.files;
      if (!files) return;

      const uploadedFile = files[0];
      if (uploadedFile.size > 1048576) return;

      const base64String = (await convertImageToBase64(uploadedFile)) as string;

      onUpload(base64String);
    };

    return (
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <input
            {...field}
            ref={inputRef}
            type="file"
            onChange={uploadImageDisplay}
            accept=".jpg, .png"
            hidden
          />
        )}
      />
    );
  },
);
