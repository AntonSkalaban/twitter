import { FC } from "react";

import { FlexRow, LinkGrey, PGrey } from "styled/StyledComponents";
import MenuIcon from "assets/images/svg/dot-menu.svg?react";

import { UserInfoContainer, UserName } from "../styled";
import { TweetHeaderProps } from "./types";

export const TweetHeader: FC<TweetHeaderProps> = ({ name, email, createdAt }) => {
  const date = createdAt && new Date(createdAt).toLocaleDateString();

  return (
    <FlexRow>
      <UserInfoContainer>
        <UserName>{name}</UserName>
        <LinkGrey> {email}</LinkGrey> <PGrey>· {date}</PGrey>
      </UserInfoContainer>
      {email && <MenuIcon />}
    </FlexRow>
  );
};
