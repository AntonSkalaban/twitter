import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useDispatch, useSelector } from "react-redux";
import { getTheme, setTheme } from "store/slices";
import { darkTheme, lightTheme } from "constants/theme";
import { ThemeEnum } from "types/theme";
import { SwitchButton, SwitchInput, SwitchLabel } from "./styled";
export const ThemeToggle = () => {
    const dispatch = useDispatch();
    const themeType = useSelector(getTheme).type;
    const handleChange = () => {
        const theme = themeType === ThemeEnum.light ? darkTheme : lightTheme;
        dispatch(setTheme(theme));
        localStorage.setItem("themeType", theme.type);
    };
    return (_jsxs(_Fragment, { children: [_jsx(SwitchInput, { id: "theme-toggle", "data-testid": "theme-toggle", type: "checkbox", checked: themeType === ThemeEnum.light, onChange: handleChange }), _jsx(SwitchLabel, { htmlFor: "theme-toggle", children: _jsx(SwitchButton, {}) })] }));
};
