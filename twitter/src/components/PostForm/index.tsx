import { ChangeEvent, FC, useState } from "react";
import { useSelector } from "react-redux";

import { createPost } from "api/fireStoreApi";
import {
  Button,
  PostContentContainer,
  PostRow,
  PostWrapper,
  UserAvatar,
  UserAvatarContainer,
} from "styled/StyledComponents";
import { PostImage } from "components/PostImage";
import { getUser } from "store/slices";

import { UploadImageButton } from "./UploadImageButton";
import { PostTextArea } from "./styled";

// eslint-disable-next-line @typescript-eslint/comma-dangle
export const autoResize = (element: HTMLTextAreaElement) => {
  element.style.height = "auto";
  element.style.height = element.scrollHeight + "px";
};

export const PostForm: FC = () => {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState<null | string>(null);

  const user = useSelector(getUser);

  const hanldeClick = () => {
    createPost({
      userId: user.id,
      title,
      image: image,
      date: new Date().toUTCString(),
      likedUsers: [],
    });

    setTitle("");
    setImage(null);
  };

  const hanldeChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const target = e.target;
    autoResize(target);
    setTitle(target.value);
  };

  const hanldeImageChange = (image: string) => {
    setImage(image);
  };

  return (
    <PostWrapper>
      <UserAvatarContainer>{user?.image && <UserAvatar src={user?.image} />}</UserAvatarContainer>

      <PostContentContainer>
        <PostTextArea placeholder="What’s happening" value={title} onChange={hanldeChange} />

        <PostImage image={image} />

        <PostRow>
          <UploadImageButton hanldeImageUpload={hanldeImageChange} />

          <Button $width="120px" style={{ height: "50px" }} $color="blue" onClick={hanldeClick}>
            Tweet
          </Button>
        </PostRow>
      </PostContentContainer>
    </PostWrapper>
  );
};
