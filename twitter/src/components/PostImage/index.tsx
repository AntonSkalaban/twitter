import { FC } from "react";

import { PostImg, PostImgContainer } from "./styled";

interface PostImageProps {
  image: string | null;
}
export const PostImage: FC<PostImageProps> = ({ image }) => {
  return <> {image && <PostImgContainer>{<PostImg src={image} />}</PostImgContainer>}</>;
};
