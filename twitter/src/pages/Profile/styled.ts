import { styled } from "styled-components";

import Flower from "assets/images/png/flower.png";

export const ImageContainer = styled.div`
  width: 910px;
  height: 280px;

  background: url(${Flower});
`;

export const UserInfoContainer = styled.section`
  display: flex;
  flex-direction: column;
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
