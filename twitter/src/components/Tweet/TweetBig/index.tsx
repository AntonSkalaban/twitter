import { FC } from "react";

import { TweetApi } from "api/TweetApi";
import { StyledTweet, TweetContent, UserAvatar, UserAvatarContainer } from "styled";
import { TweetHeader } from "components/Tweet/TweetHeader";

import { TweetText } from "../styled";
import { TweetImage } from "../TweetImage";
import { LikeButton } from "./LikeButton";
import { TweetBigProps } from "./types";

export const TweetBig: FC<TweetBigProps> = ({ tweet }) => {
  const { id, userId, title, image, createdAt, likedUsers, userImg, userName } = tweet;

  const hanldeLike = (likedUsers: string[]) => {
    TweetApi.updateTweet(id, { likedUsers });
  };

  return (
    <StyledTweet>
      <UserAvatarContainer>
        <UserAvatar src={userImg || ""} />
      </UserAvatarContainer>

      <TweetContent>
        <TweetHeader name={userName} email={userName} createdAt={createdAt} />

        <TweetText>{title}</TweetText>

        <TweetImage image={image} />

        <LikeButton userId={userId} likedUsers={likedUsers} hanldeLike={hanldeLike} />
      </TweetContent>
    </StyledTweet>
  );
};
