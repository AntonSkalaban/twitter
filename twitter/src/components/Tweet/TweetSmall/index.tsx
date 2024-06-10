import { FC } from "react";
import { useNavigate } from "react-router-dom";

import { UserAvatar, UserAvatarContainer } from "styled";
import { PagePathsEnum } from "types";

import { StyledTweet, TweetContent, TweetText } from "../styled";
import { TweetHeader } from "../TweetHeader";
import { TweetImage } from "../TweetImage";
import { TweetSmallProps } from "./types";

export const TweetSmall: FC<TweetSmallProps> = ({ tweet }) => {
  const navigate = useNavigate();
  const { id, title, image, userImg, userName, userId } = tweet;

  const handleClick = () => navigate(`/${PagePathsEnum.Home}/${id}`);

  return (
    <StyledTweet onClick={handleClick}>
      <UserAvatarContainer $size="small">
        {" "}
        <UserAvatar src={userImg || ""} />
      </UserAvatarContainer>

      <TweetContent>
        <TweetHeader name={userName} authorId={userId} />

        <TweetText>{title}</TweetText>

        <TweetImage image={image} />
      </TweetContent>
    </StyledTweet>
  );
};
