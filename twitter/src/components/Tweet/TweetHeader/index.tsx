import { FC } from "react";
import { useSelector } from "react-redux";

import { FlexRow, LinkGrey, PGrey } from "styled";
import { getUser } from "store/slices";
import MenuIcon from "assets/images/svg/dot-menu.svg?react";

import { UserInfoContainer, UserName } from "../styled";
import { TweetHeaderProps } from "./types";

export const TweetHeader: FC<TweetHeaderProps> = ({ authorId, name, email, createdAt }) => {
  const { id: userId } = useSelector(getUser);

  const date = createdAt && new Date(createdAt).toLocaleDateString();

  return (
    <FlexRow>
      <UserInfoContainer>
        <UserName>{name}</UserName>
        <LinkGrey> {email}</LinkGrey> <PGrey>· {date}</PGrey>
      </UserInfoContainer>
      {authorId === userId && <MenuIcon />}
    </FlexRow>
  );
};
