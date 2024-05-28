import { styled } from "styled-components";
import { borderGreyMixin, P } from "styled/index";
export const StyledTweet = styled.article `
  width: 100%;

  display: flex;
  gap: 8px;

  ${borderGreyMixin};
  border-left: none;
  border-right: none;

  padding: 18px 12px 13px 27px;
`;
export const TweetContent = styled.div `
  width: calc(100% - 50px);
  height: 100%;
  margin: 0;
`;
export const UserInfoContainer = styled.div `
  display: flex;
  align-items: baseline;
`;
export const UserName = styled.p `
  font-weight: 700;
  font-size: 20px;
  line-height: 23px;

  margin-right: 10px;
`;
export const TweetText = styled(P) `
  margin-top: 5px;
`;
