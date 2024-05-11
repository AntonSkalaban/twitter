import { FC, MouseEvent, useRef } from "react";

import { convertImageToBase64 } from "utils/index";
import ImageIcon from "assets/images/svg/image.svg?react";

interface UploadImageButtonProps {
  hanldeImageUpload: (image: string) => void;
}

export const UploadImageButton: FC<UploadImageButtonProps> = ({ hanldeImageUpload }) => {
  const fileUploadRef = useRef<HTMLInputElement | null>(null);

  const handleImageUpload = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    fileUploadRef.current?.click();
  };

  const uploadImageDisplay = async () => {
    if (!fileUploadRef.current?.files) return;

    try {
      const uploadedFile = fileUploadRef.current.files[0];
      const base64String = (await convertImageToBase64(uploadedFile)) as string;

      hanldeImageUpload(base64String);
    } catch (error) {
      console.error("Произошла ошибка при конвертации изображения:", error);
    }
  };

  return (
    <>
      <button onClick={handleImageUpload}>
        {" "}
        <ImageIcon />
      </button>
      <input ref={fileUploadRef} type="file" id="file" onChange={uploadImageDisplay} hidden />
    </>
  );
};
