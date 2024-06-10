import { styled } from "styled-components";

import { borderGreyMixin, Button, UserAvatar } from "styled/index";
import { UserName } from "components/Tweet/TweetSmall/styled";
import Flower from "assets/images/png/flower.png";

export const ImageContainer = styled.div`
  width: 100%;
  height: 280px;

  background: url(${Flower});
`;

export const UserPhoto = styled(UserAvatar)`
  position: absolute;
  width: 120px;
  height: 120px;
  bottom: 0;
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

export const EditButton = styled(Button)`
  width: 120px;
  height: 44px;
  ${borderGreyMixin}
`;

export const TweetsTitle = styled(UserName)`
  padding: 15px;
`;
