import { DefaultTheme } from "styled-components";

import { createSlice } from "@reduxjs/toolkit";
import { darkTheme, lightTheme } from "constants/theme";
import { ThemeEnum } from "types/theme";

const initialState: { theme: DefaultTheme } = {
  theme: localStorage.getItem("themeType") === ThemeEnum.dark ? darkTheme : lightTheme,
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setTheme: (state, action) => {
      state.theme = action.payload;
    },
  },
  selectors: {
    getTheme: (state) => state.theme,
  },
});

export const { setTheme } = themeSlice.actions;
export const { getTheme } = themeSlice.selectors;

export default themeSlice.reducer;
