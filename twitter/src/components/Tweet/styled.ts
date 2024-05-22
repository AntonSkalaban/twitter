import { styled } from "styled-components";

import { P } from "styled/index";

export const UserInfoContainer = styled.div`
  display: flex;
  align-items: baseline;
`;

export const UserName = styled.p`
  font-weight: 700;
  font-size: 20px;
  line-height: 23px;

  color: ${({ theme }) => theme.fonts.main};
`;

export const UserEmail = styled(P)`
  text-align: left;
`;

export const TweetText = styled(P)`
  margin-top: 5px;
`;
