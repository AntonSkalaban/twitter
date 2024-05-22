import { FC } from "react";

import { TweetImg, TweetImgContainer } from "./styled";

interface TweetImageProps {
  image: string | null;
}
export const TweetImage: FC<TweetImageProps> = ({ image }) => {
  return <> {image && <TweetImgContainer>{<TweetImg src={image} />}</TweetImgContainer>}</>;
};
