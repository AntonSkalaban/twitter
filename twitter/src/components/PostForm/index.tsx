import { ChangeEvent, FC, MouseEvent, useRef, useState } from "react";
import { useSelector } from "react-redux";

import { createPost } from "api/fireStoreApi";
import {
  Button,
  PostContentContainer,
  PostRow,
  PostUserImgContainer,
  PostWrapper,
} from "styled/StyledComponents";
import { getUser } from "store/slices";
import ImageIcon from "assets/images/svg/image.svg?react";

import { PostTextArea } from "./styled";

// eslint-disable-next-line @typescript-eslint/comma-dangle
export const autoResize = (element: HTMLTextAreaElement) => {
  element.style.height = "auto";
  element.style.height = element.scrollHeight + "px";
};

function convertImageToBase64(file: File) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
}

export const PostForm: FC = () => {
  const [title, setTitle] = useState("");
  const [image64, setImage64] = useState<null | string>(null);

  const user = useSelector(getUser);

  const fileUploadRef = useRef<HTMLInputElement | null>(null);

  const handleImageUpload = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    fileUploadRef.current?.click();
  };

  const hanldeClick = () => {
    createPost({
      userId: user.id,
      title,
      image: image64,
      date: new Date().toISOString(),
      likes: 0,
      likedUsers: [],
    });
  };

  const hanldeChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const target = e.target;
    autoResize(target);
    setTitle(target.value);
  };

  const uploadImageDisplay = async () => {
    if (!fileUploadRef.current?.files) return;

    try {
      const uploadedFile = fileUploadRef.current.files[0];
      const base64String = (await convertImageToBase64(uploadedFile)) as string;

      setImage64(base64String);
    } catch (error) {
      console.error("Произошла ошибка при конвертации изображения:", error);
    }
  };

  return (
    <PostWrapper>
      <PostUserImgContainer>
        {user?.image ? (
          <img style={{ borderRadius: "50%" }} src={user?.image} />
        ) : (
          <div style={{ backgroundColor: "red" }} />
        )}
      </PostUserImgContainer>
      <PostContentContainer>
        <PostTextArea placeholder="What’s happening" value={title} onChange={hanldeChange} />
        {image64 && <img src={image64} />}
        <PostRow>
          <button onClick={handleImageUpload}>
            {" "}
            <ImageIcon />
          </button>
          <input ref={fileUploadRef} type="file" id="file" onChange={uploadImageDisplay} hidden />
          <Button $width="120px" style={{ height: "50px" }} $color="blue" onClick={hanldeClick}>
            Tweet
          </Button>
        </PostRow>
      </PostContentContainer>
    </PostWrapper>
  );
};
