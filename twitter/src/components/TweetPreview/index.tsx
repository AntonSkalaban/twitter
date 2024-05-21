import { FC } from "react";
import { useNavigate } from "react-router-dom";

import { TweetApi } from "api/TweetApi";
import {
  P,
  PostContentContainer,
  PostRow,
  PostWrapper,
  UserAvatar,
  UserAvatarContainer,
} from "styled";
import { PostImage } from "components/PostImage";
import { LikeButton } from "components/TweetPost/LikeButton";
import { Tweet } from "types";
import MenuIcon from "assets/images/svg/dot-menu.svg?react";

// import { LikeButton } from "./LikeButton";
import { UserInfoContainer, UserName } from "./styled";

interface TweetProps {
  tweet: Tweet;
}

export const TweetPreview: FC<TweetProps> = ({ tweet }) => {
  const navigate = useNavigate();
  const { id, userId, title, image, createdAt, likedUsers, userImg, userName } = tweet;

  //   const hanldeLike = (likedUsers: string[]) => {
  //     TweetApi.updateTweet(id, { likedUsers });
  //   };

  return (
    <PostWrapper onClick={() => navigate(`/feed/${id}`)}>
      <UserAvatarContainer $size="small">
        {" "}
        <UserAvatar src={userImg || ""} />
      </UserAvatarContainer>

      <PostContentContainer>
        <PostRow>
          <UserInfoContainer>
            <UserName>{userName}</UserName>
          </UserInfoContainer>
        </PostRow>
        <P>{title}</P>

        <PostImage image={image} />
      </PostContentContainer>
    </PostWrapper>
  );
};
