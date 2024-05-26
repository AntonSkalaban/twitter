import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";

import { fireEvent, render } from "@testing-library/react";
import { Searchbar } from "components/Searchbar";
import { store } from "store/index";
import { lightTheme } from "constants/index";

const WrapperSearchbar = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={lightTheme}>
        <Searchbar />
      </ThemeProvider>
    </Provider>
  );
};

describe("Searchbar", () => {
  it("should call getTweetsSaga and getUsersSaga when input value changes", () => {
    const { getByPlaceholderText } = render(<WrapperSearchbar />);
    const input = getByPlaceholderText("Search Twitter");

    fireEvent.change(input, { target: { value: "search term" } });
    expect(input).toHaveValue("search term");
  });
});
