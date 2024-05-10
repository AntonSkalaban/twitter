import { FC, useEffect, useState } from "react";

import { updatePost } from "api/index";
import { getUser } from "api/signInWithGoogle";
import { P, PostRow, PostUserImgContainer, PostWrapper } from "styled";
import { Post, User } from "types";
import MenuIcon from "assets/images/svg/dot-menu.svg?react";
import LikeIcon from "assets/images/svg/Like.svg?react";
import LikeIconActive from "assets/images/svg/Vector2.svg?react";

import { ContentContainer, LikeButton, UserEmail, UserInfoContainer, UserName } from "./styled";

interface PostProps {
  post: Post;
}

export const TwitterPost: FC<PostProps> = ({ post }) => {
  const { id, userId, title, image, likes, date, likedUsers } = post;
  const [user, setUser] = useState<User>();
  const [isLiked, setIsLiked] = useState(false);

  useEffect(() => {
    const getPostOwner = async () => {
      const user = await getUser(userId);
      if (!user) return;
      setUser(user);
      setIsLiked(likedUsers.includes(user.id));
    };
    if (userId) getPostOwner();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const hanldeClick = () => {
    setIsLiked((prev) => !prev);
    updatePost(id, {
      likes: likes + (isLiked ? -1 : +1),
      likedUsers: isLiked ? likedUsers.filter((id) => id !== userId) : [...likedUsers, userId],
    });
  };

  if (!user?.id) return;
  return (
    <PostWrapper>
      <PostUserImgContainer>
        {user?.image ? (
          <img style={{ borderRadius: "50%" }} src={user?.image} />
        ) : (
          <div style={{ backgroundColor: "red" }} />
        )}
      </PostUserImgContainer>
      <ContentContainer>
        <PostRow>
          <UserInfoContainer>
            <UserName>{user?.name}</UserName>{" "}
            <UserEmail>
              {user?.name} · {date}
            </UserEmail>
          </UserInfoContainer>
          <MenuIcon />
        </PostRow>
        <P>{title}</P>
        {image && <img src={image} />}
        <div style={{ display: "flex" }}>
          {" "}
          <LikeButton onClick={hanldeClick}>
            {isLiked ? <LikeIconActive /> : <LikeIcon />}
          </LikeButton>{" "}
          <P>{isLiked ? likes + 1 : likes}</P>
        </div>
      </ContentContainer>
    </PostWrapper>
  );
};
