import { FC } from "react";

import { TweetApi } from "api";
import { UserAvatar, UserAvatarContainer } from "styled";

import { StyledTweet, TweetContent, TweetText } from "../styled";
import { TweetHeader } from "../TweetHeader";
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
        <TweetHeader authorId={userId} name={userName} email={userName} createdAt={createdAt} />

        <TweetText>{title}</TweetText>

        <TweetImage image={image} />

        <LikeButton userId={userId} likedUsers={likedUsers} hanldeLike={hanldeLike} />
      </TweetContent>
    </StyledTweet>
  );
};
