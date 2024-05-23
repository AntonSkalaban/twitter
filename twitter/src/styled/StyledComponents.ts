import styled from "styled-components";

import { baseTheme } from "constants/theme";
import UserAvatarIcon from "assets/images/png/user-avatart.jpeg";

import { greyTextMixin, inputMixin } from "./Mixin";
const colors: { [key: string]: string } = {
  blue: "rgba(29, 161, 242, 1)",
  grey: baseTheme.colors.grey,
};

export const Button = styled.button<{
  $size?: "big" | "medium";
  $color?: "blue" | "grey";
  $width?: string;
}>`
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
  font-size: 18px;
  line-height: 21px;
`;

export const H1 = styled.h1`
  font-weight: 900;
  font-size: 84px;
  line-height: 98px;
`;

export const H2 = styled.h2`
  font-weight: 900;
  font-size: 42px;
  line-height: 49px;
`;

export const H3 = styled.h3`
  font-weight: 700;
  font-size: 30px;
  line-height: 35px;
`;

export const H4 = styled.h4`
  font-weight: 700;
  font-size: 18px;
  line-height: 21px;
`;

export const H5 = styled.h5`
  font-weight: 700;
  font-size: 24px;
  line-height: 28px;
`;

export const Input = styled.input`
  ${inputMixin}
`;

export const StyledPage = styled.div`
  max-width: 920px;
  width: 100%;
  height: 100%;
`;

export const FlexRow = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const size = {
  big: 120,
  medium: 50,
  small: 26,
};

type Size = "big" | "medium" | "small";

export const UserAvatarContainer = styled.div<{ $size?: Size }>`
  width: ${({ $size }) => size[$size || "medium"]}px;
  height: ${({ $size }) => size[$size || "medium"]}px;
  border-radius: 50%;
  position: relative;
`;

export const LinkGrey = styled.a`
  ${greyTextMixin}
`;

export const PGrey = styled.p`
  ${greyTextMixin}
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
    border-radius: 50%;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 1400px;
  height: 100%;
  box-sizing: content-box;
  padding: 0 10px 0 10px;
`;

export const Overlay = styled.section`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 200;
`;
