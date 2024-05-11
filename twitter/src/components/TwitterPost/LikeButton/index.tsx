import { FC, useState } from "react";

import { P } from "styled/index";
import LikeIcon from "assets/images/svg/Like.svg?react";
import LikeIconActive from "assets/images/svg/Vector2.svg?react";

import { LikeContaner, StyledLikeButton } from "./styled";

interface LikeButtonProps {
  userId: string;
  likedUsers: string[];
  hanldeLike: (value: string[]) => void;
}

export const LikeButton: FC<LikeButtonProps> = ({ userId, likedUsers, hanldeLike }) => {
  const [newLikedUsers, setNewLlikedUsers] = useState(likedUsers);

  const hanldeClick = () => {
    const likedUsers = newLikedUsers.includes(userId)
      ? newLikedUsers.filter((id) => id !== userId)
      : [...newLikedUsers, userId];

    setNewLlikedUsers(likedUsers);
    hanldeLike(likedUsers);
  };

  return (
    <LikeContaner>
      <StyledLikeButton onClick={hanldeClick}>
        {newLikedUsers.includes(userId) ? <LikeIconActive /> : <LikeIcon />}
      </StyledLikeButton>{" "}
      <P>{newLikedUsers.length}</P>
    </LikeContaner>
  );
};
