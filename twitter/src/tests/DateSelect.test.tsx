import { Control, useForm } from "react-hook-form";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import { fireEvent, render } from "@testing-library/react";
import { expect, test } from "vitest";
import { DateSelect } from "components/DateSelect";
import { store } from "store/index";
import { lightTheme } from "constants/theme";

const FormSelect = () => {
  const { control } = useForm({
    defaultValues: {
      birthday: { month: "", year: "", day: "" },
    },
  });
  return (
    <Provider store={store}>
      <ThemeProvider theme={lightTheme}>
        <DateSelect
          control={control as Control<{ birthday: { month: string; year: string; day: string } }>}
        />
      </ThemeProvider>
    </Provider>
  );
};

describe("DateSelect", () => {
  test("should render correct options", async () => {
    const { getByText, findAllByText, getAllByTestId, queryAllByText } = render(<FormSelect />, {
      wrapper: MemoryRouter,
    });

    const monthSelect = getByText("Month");
    const daySelect = getByText("Day");
    const yearSelect = getByText("Year");

    expect(monthSelect).toBeInTheDocument();
    expect(daySelect).toBeInTheDocument();
    expect(yearSelect).toBeInTheDocument();

    fireEvent.click(monthSelect);

    const february = (await findAllByText("February"))[1];
    expect(february).toBeInTheDocument();

    fireEvent.click(february);

    const monthSelectTitle = getAllByTestId("select-title")[0];
    expect(monthSelectTitle).toHaveTextContent("February");

    fireEvent.click(daySelect);

    const day28 = queryAllByText("28")[1];
    const day29 = queryAllByText("29")[1];
    const day30 = queryAllByText("30")[1];

    expect(day28).toBeInTheDocument();
    expect(day29).toBeInTheDocument();
    expect(day30).toBeUndefined();

    fireEvent.click(day29);

    const daySelectTitle = getAllByTestId("select-title")[1];
    expect(daySelectTitle).toHaveTextContent("29");

    fireEvent.click(yearSelect);

    const year1999 = queryAllByText("1999")[1];
    const year2000 = queryAllByText("2000")[1];
    const year2001 = queryAllByText("2001")[1];
    const year2004 = queryAllByText("2004")[1];

    expect(year1999).toBeUndefined();
    expect(year2001).toBeUndefined();
    expect(year2000).toBeInTheDocument();
    expect(year2004).toBeInTheDocument();

    fireEvent.click(year2000);
    const yearSelecttTitle = getAllByTestId("select-title")[2];
    expect(yearSelecttTitle).toHaveTextContent("2000");
  });
  test("should render correct not leap year days", async () => {
    const { getByText, findAllByText, queryAllByText } = render(<FormSelect />, {
      wrapper: MemoryRouter,
    });

    const monthSelect = getByText("Month");
    const daySelect = getByText("Day");
    const yearSelect = getByText("Year");

    fireEvent.click(monthSelect);
    const february = (await findAllByText("February"))[1];
    fireEvent.click(february);

    fireEvent.click(yearSelect);
    const year1999 = queryAllByText("1999")[1];
    fireEvent.click(year1999);

    fireEvent.click(daySelect);
    const day28 = queryAllByText("28")[1];
    const day29 = queryAllByText("29")[1];
    const day30 = queryAllByText("30")[1];

    expect(day28).toBeInTheDocument();
    expect(day29).toBeUndefined();
    expect(day30).toBeUndefined();
  });
});
