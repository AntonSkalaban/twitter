import { FC } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { LinkGrey, UserAvatar, UserAvatarContainer } from "styled";
import { UserNameSmall } from "components/Tweet/TweetSmall/styled";
import { getUser } from "store/slices";

import { UserCardProps } from "./types";
import { StyledUserCard } from "./styled";

export const UserCard: FC<UserCardProps> = ({ user }) => {
  const navigate = useNavigate();
  const currentUser = useSelector(getUser);
  const { id, name, email, image } = user;

  const handleClick = () => navigate(`/profile${currentUser.id === id ? "" : `/${id}`}`);

  return (
    <StyledUserCard onClick={handleClick}>
      <UserAvatarContainer $size="small">
        <UserAvatar src={image || ""} />
      </UserAvatarContainer>
      <div>
        <UserNameSmall>{name}</UserNameSmall>
        <LinkGrey>{email}</LinkGrey>
      </div>
    </StyledUserCard>
  );
};
