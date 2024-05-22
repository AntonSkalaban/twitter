import { styled } from "styled-components";

import { P } from "styled/index";

export const UserInfoContainer = styled.div`
  display: flex;
`;

export const UserName = styled.p`
  /* font-family: "Roboto Serif";
  font-style: normal; */
  font-weight: 700;
  font-size: 20px;
  line-height: 23px;

  color: ${({ theme }) => theme.fonts.main};
`;

export const UserEmail = styled(P)`
  /* font-family: Roboto;
  font-size: 18px;
  font-weight: 400; */
  /* line-height: 21.09px; */
  text-align: left;
`;

export const TweeterText = styled(P)`
  margin-top: 5px;
`;
