import { FC } from "react";
import { useNavigate } from "react-router-dom";

import {
  P,
  PostContentContainer,
  PostRow,
  PostWrapper,
  UserAvatar,
  UserAvatarContainer,
} from "styled";
import { PostImage } from "components/PostImage";
import { Tweet } from "types";

import { UserInfoContainer, UserName } from "./styled";

interface TweetProps {
  tweet: Tweet;
}

export const TweetPreview: FC<TweetProps> = ({ tweet }) => {
  const navigate = useNavigate();
  const { id, title, image, userImg, userName } = tweet;

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
