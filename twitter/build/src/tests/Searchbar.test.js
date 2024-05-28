import { jsx as _jsx } from "react/jsx-runtime";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import { fireEvent, render } from "@testing-library/react";
import { Searchbar } from "components/Searchbar";
import { store } from "store/index";
import { lightTheme } from "constants/index";
const WrapperSearchbar = () => {
    return (_jsx(Provider, { store: store, children: _jsx(ThemeProvider, { theme: lightTheme, children: _jsx(Searchbar, {}) }) }));
};
describe("Searchbar", () => {
    it("should call getTweetsSaga and getUsersSaga when input value changes", () => {
        const { getByPlaceholderText } = render(_jsx(WrapperSearchbar, {}));
        const input = getByPlaceholderText("Search Twitter");
        fireEvent.change(input, { target: { value: "search term" } });
        expect(input).toHaveValue("search term");
    });
});
