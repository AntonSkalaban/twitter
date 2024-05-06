import styled from "styled-components";

import { inputMixin } from "./Mixin";

export const Button = styled.button<{ $size?: "big" | "medium"; $color?: "blue" }>`
  width: 100%;
  height: 62px;

  opacity: 0.8;

  border-radius: 42px;

  background-color: ${({ $color }) => $color || "#fff"};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
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
export const Input = styled.input`
  ${inputMixin}
`;
