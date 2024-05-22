import { FC } from "react";

import { TweetApi } from "api/TweetApi";
import {
  PostContentContainer,
  PostRow,
  PostWrapper,
  UserAvatar,
  UserAvatarContainer,
} from "styled";
import { PostImage } from "components/PostImage";
import { Tweet } from "types";
import MenuIcon from "assets/images/svg/dot-menu.svg?react";

import { LikeButton } from "./LikeButton";
import { TweeterText, UserEmail, UserInfoContainer, UserName } from "./styled";

interface TweetProps {
  tweet: Tweet;
}

export const TweetPost: FC<TweetProps> = ({ tweet }) => {
  const { id, userId, title, image, createdAt, likedUsers, userImg, userName } = tweet;

  const hanldeLike = (likedUsers: string[]) => {
    TweetApi.updateTweet(id, { likedUsers });
  };

  return (
    <PostWrapper>
      <UserAvatarContainer>
        {" "}
        <UserAvatar src={userImg || ""} />
      </UserAvatarContainer>

      <PostContentContainer>
        <PostRow>
          <UserInfoContainer>
            <UserName>{userName}</UserName>{" "}
            <UserEmail>
              {userName} · {createdAt}
            </UserEmail>
          </UserInfoContainer>
          <MenuIcon />
        </PostRow>

        <TweeterText>{title}</TweeterText>

        <PostImage image={image} />

        <LikeButton userId={userId} likedUsers={likedUsers} hanldeLike={hanldeLike} />
      </PostContentContainer>
    </PostWrapper>
  );
};
