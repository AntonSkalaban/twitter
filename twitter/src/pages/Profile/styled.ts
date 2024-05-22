import { styled } from "styled-components";

import { borderGreyMixin, Button } from "styled/index";
import { UserName } from "components/TweetPreview/styled";
import Flower from "assets/images/png/flower.png";

export const StyledPage = styled.div`
  max-width: 920px;
  height: 100%;
`;

export const ImageContainer = styled.div`
  width: 910px;
  height: 280px;

  background: url(${Flower});
`;

export const UserInfoContainer = styled.section`
  display: flex;
  flex-direction: column;

  padding: 10px 25px 10px 25px;
`;

export const UserImgContainer = styled.div`
  width: 85px;
  height: 85px;
  position: relative;
`;

export const TelegramLink = styled.a`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;

  color: #000000;

  opacity: 0.6;
`;

export const EditButton = styled(Button)`
  width: 120px;
  height: 44px;
  ${borderGreyMixin}
`;

export const TweetsTitle = styled(UserName)`
  padding: 15px;
`;
