import styled from "styled-components";

import UserAvatarIcon from "assets/images/png/user-avatart.jpeg";

import { inputMixin } from "./Mixin";
const colors: { [key: string]: string } = { blue: "rgba(29, 161, 242, 1)" };

export const Button = styled.button<{ $size?: "big" | "medium"; $color?: "blue"; $width?: string }>`
  width: ${({ $width }) => $width || "100%"};
  height: 62px;

  opacity: 0.8;

  border-radius: 42px;

  background-color: ${({ $color }) => colors[$color as string] || "#fff"};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  cursor: pointer;
`;

export const P = styled.p`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 21px;

  color: #000000;
`;

export const H1 = styled.h1`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 900;
  font-size: 84px;
  line-height: 98px;
`;

export const H2 = styled.h2`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 900;
  font-size: 42px;
  line-height: 49px;
`;

export const H3 = styled.h3`
  font-family: "Roboto Serif";
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  line-height: 35px;

  color: #000000;
`;

export const H4 = styled.h4`
  font-family: "Roboto Serif";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 21px;

  color: #000000;
`;

export const H5 = styled.h5`
  font-family: "Roboto Serif";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 28px;

  color: #000000;
`;
export const Input = styled.input`
  ${inputMixin}
`;

export const PostWrapper = styled.article`
  display: flex;
  align-items: top;
  width: 100%;
`;

export const PostContentContainer = styled.div`
  width: calc(100% - 50px);
  height: 100%;
  margin: 0;
`;

export const PostRow = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const UserAvatarContainer = styled.div<{ $size?: "big" | "medium" }>`
  width: ${({ $size }) => ($size === "big" ? 120 : 50)}px;
  height: ${({ $size }) => ($size === "big" ? 120 : 50)}px;
  border-radius: 50%;
  position: relative;
`;

export const UserAvatar = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;

  &:before {
    content: "";
    background-image: url(${UserAvatarIcon});
    background-size: cover;
    background-position: center;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;
