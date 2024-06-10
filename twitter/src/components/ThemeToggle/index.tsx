import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getTheme, setTheme } from "store/slices";
import { darkTheme, lightTheme } from "constants/index";
import { ThemeEnum } from "types";

import { SwitchButton, SwitchInput, SwitchLabel } from "./styled";

export const ThemeToggle: FC = () => {
  const dispatch = useDispatch();
  const themeType = useSelector(getTheme).type;

  const handleChange = () => {
    const theme = themeType === ThemeEnum.light ? darkTheme : lightTheme;
    dispatch(setTheme(theme));
    localStorage.setItem("themeType", theme.type);
  };

  return (
    <>
      <SwitchInput
        id={"theme-toggle"}
        data-testid={"theme-toggle"}
        type="checkbox"
        checked={themeType === ThemeEnum.light}
        onChange={handleChange}
      />
      <SwitchLabel htmlFor={"theme-toggle"}>
        <SwitchButton />
      </SwitchLabel>
    </>
  );
};
