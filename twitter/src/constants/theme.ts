import { DefaultTheme } from "styled-components";

import { Theme, ThemeEnum } from "types";

export const baseTheme: Theme = {
  colors: {
    white: "rgba(255, 255, 255, 1)",
    black: "rgba(0, 0, 0, 1)",
    blue: "rgba(29, 161, 242, 1)",
    lightBlack: "rgba(60, 60, 60, 1)",
    grey: "rgba(0, 0, 0, 0.2)",
    darkGrey: "rgba(130, 130, 130, 1)",
    lightGrey: "rgba(247, 249, 249, 1)",
  },

  media: {
    large: "(max-width: 1110px)",
    medium: "(max-width: 880px)",
    small: "(max-width: 660px)",
    extraSmall: "(max-width: 460px)",
  },
};

export const lightTheme: DefaultTheme = {
  ...baseTheme,
  type: ThemeEnum.light,

  fonts: {
    main: baseTheme.colors.black,
    secondary: baseTheme.colors.darkGrey,
  },
  bg: {
    main: baseTheme.colors.white,
  },
  svg: {
    color: baseTheme.colors.black,
  },
};

export const darkTheme: DefaultTheme = {
  ...baseTheme,
  type: ThemeEnum.dark,

  fonts: {
    main: baseTheme.colors.white,
    secondary: baseTheme.colors.darkGrey,
  },
  bg: {
    main: baseTheme.colors.lightBlack,
  },

  svg: {
    color: baseTheme.colors.white,
  },
};
