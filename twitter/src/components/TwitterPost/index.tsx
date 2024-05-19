import { FC, useEffect, useState } from "react";

import { getUser } from "api";
import { updatePost } from "api";
import {
  P,
  PostContentContainer,
  PostRow,
  PostWrapper,
  UserAvatar,
  UserAvatarContainer,
} from "styled";
import { PostImage } from "components/PostImage";
import { Post, User } from "types";
import MenuIcon from "assets/images/svg/dot-menu.svg?react";

import { LikeButton } from "./LikeButton";
import { UserEmail, UserInfoContainer, UserName } from "./styled";

interface PostProps {
  post: Post;
}

export const TwitterPost: FC<PostProps> = ({ post }) => {
  const { id, userId, title, image, createdAt, likedUsers } = post;
  const [user, setUser] = useState<User>();

  useEffect(() => {
    const getPostOwner = async () => {
      const user = await getUser(userId);
      if (!user) return;

      setUser(user);
    };
    if (userId) getPostOwner();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const hanldeLike = (likedUsers: string[]) => {
    updatePost(id, { likedUsers });
  };

  if (!user?.id) return;

  return (
    <PostWrapper>
      <UserAvatarContainer>{user?.image && <UserAvatar src={user?.image} />}</UserAvatarContainer>

      <PostContentContainer>
        <PostRow>
          <UserInfoContainer>
            <UserName>{user?.name}</UserName>{" "}
            <UserEmail>
              {user?.name} · {createdAt}
            </UserEmail>
          </UserInfoContainer>
          <MenuIcon />
        </PostRow>
        <P>{title}</P>

        <PostImage image={image} />

        <LikeButton userId={userId} likedUsers={likedUsers} hanldeLike={hanldeLike} />
      </PostContentContainer>
    </PostWrapper>
  );
};
