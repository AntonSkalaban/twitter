import { DefaultColors, ThemeEnum } from "types";

import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme extends Theme {
    type: ThemeEnum;
    colors: DefaultColors;
    fonts: {
      main: string;
      secondary: string;
    };
    bg: {
      main: string;
    };
    svg: {
      color: string;
    };
  }
}
