import { Theme, ThemeEnum } from "./../types/theme";

import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme extends Theme {
    type: ThemeEnum;
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
