import { FC } from "react";

import { TweetImageProps } from "./types";
import { TweetImg, TweetImgContainer } from "./styled";

export const TweetImage: FC<TweetImageProps> = ({ image }) => {
  return <>{image && <TweetImgContainer>{<TweetImg src={image} />}</TweetImgContainer>}</>;
};
