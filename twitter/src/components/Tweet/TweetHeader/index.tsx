import { FC } from "react";

import { FlexRow, LinkGrey, PGrey } from "styled/StyledComponents";
import MenuIcon from "assets/images/svg/dot-menu.svg?react";

import { UserInfoContainer, UserName } from "../styled";
import { TweetHeaderProps } from "./types";

export const TweetHeader: FC<TweetHeaderProps> = ({ name, email, createdAt }) => {
  return (
    <FlexRow>
      <UserInfoContainer>
        <UserName>{name}</UserName> <LinkGrey>{email}</LinkGrey> <PGrey>· {createdAt}</PGrey>
      </UserInfoContainer>
      {email && <MenuIcon />}
    </FlexRow>
  );
};
