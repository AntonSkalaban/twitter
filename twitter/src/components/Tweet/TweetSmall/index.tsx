import { FC } from "react";
import { useNavigate } from "react-router-dom";

import { StyledTweet, TweetContent, UserAvatar, UserAvatarContainer } from "styled";
import { PagePathsEnum } from "types";

import { TweetText } from "../styled";
import { TweetHeader } from "../TweetHeader";
import { TweetImage } from "../TweetImage";
import { TweetSmallProps } from "./types";

export const TweetSmall: FC<TweetSmallProps> = ({ tweet }) => {
  const navigate = useNavigate();
  const { id, title, image, userImg, userName } = tweet;

  const handleClick = () => navigate(`/${PagePathsEnum.Home}/${id}`);

  return (
    <StyledTweet onClick={handleClick}>
      <UserAvatarContainer $size="small">
        {" "}
        <UserAvatar src={userImg || ""} />
      </UserAvatarContainer>

      <TweetContent>
        <TweetHeader name={userName} />

        <TweetText>{title}</TweetText>

        <TweetImage image={image} />
      </TweetContent>
    </StyledTweet>
  );
};
