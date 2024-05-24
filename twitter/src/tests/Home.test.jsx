// import { MemoryRouter } from "react-router-dom";

// import { render, screen } from "@testing-library/react";

// import { Home } from "../pages/Home";

// describe("Home", () => {
//   it("should render the home page", () => {
//     render(<Home />, { wrapper: MemoryRouter });

//     expect(screen.getByText("Happening now")).toBeInTheDocument();
//   });
// });
// describe("Home", () => {
//   it("should render the home page", () => {
//     render(<Home />, { wrapper: MemoryRouter });

//     expect(screen.getByText("Happening now")).toBeInTheDocument();
//   });

//   it("should navigate to sign-up page on email click", () => {
//     const { getByText } = render(<Home />, { wrapper: MemoryRouter });

//     fireEvent.click(getByText("Sign up with email"));

//     expect(screen.getByText("Sign Up")).toBeInTheDocument();
//   });

//   it("should call handleGoogleClick on Google button click", async () => {
//     const handleGoogleClick = jest.fn();
//     const dispatch = jest.fn();

//     render(<Home handleGoogleClick={handleGoogleClick} dispatch={dispatch} />, {
//       wrapper: MemoryRouter,
//     });

//     const googleButton = screen.getByText("Sign up with Google");
//     fireEvent.click(googleButton);

//     expect(handleGoogleClick).toHaveBeenCalledTimes(1);
//   });

//   it("should set isFetching to true on Google button click", async () => {
//     const handleGoogleClick = jest.fn();
//     const { getByText, getByTestId } = render(<Home handleGoogleClick={handleGoogleClick} />, {
//       wrapper: MemoryRouter,
//     });

//     const googleButton = getByText("Sign up with Google");
//     fireEvent.click(googleButton);

//     expect(getByTestId("google-loading")).toBeInTheDocument();
//   });

//   it("should call hanldePasswordSubmit on submit of password form", async () => {
//     const hanldePasswordSubmit = jest.fn();
//     const { getByText, getByLabelText } = render(
//       <PasswordForm onSubmit={hanldePasswordSubmit} isOpen={true} />,
//       { wrapper: MemoryRouter },
//     );

//     const passwordInput = getByLabelText("Password");
//     const submitButton = getByText("Submit");

//     userEvent.type(passwordInput, "password");
//     fireEvent.click(submitButton);

//     expect(hanldePasswordSubmit).toHaveBeenCalledTimes(1);
//   });
// });
