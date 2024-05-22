export enum ThemeEnum {
  light = "light",
  dark = "dark",
}

export interface Colors {
  white: string;
  black: string;
  grey: string;
  darkGrey: string;
  lightBlack: string;
}

export interface Media {
  large: string;
  medium: string;
  small: string;
  extraSmall: string;
}

export interface Theme {
  colors: Colors;
  media: Media;
}
