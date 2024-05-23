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

  margin-right: 10px;
`;

export const TweetText = styled(P)`
  margin-top: 5px;
`;
