import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
body {
    margin: 0 auto;

    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;

    color: ${({ theme }) => theme.fonts.main};
    background-color: ${({ theme }) => theme.bg.main};
}

main {
    margin: 0 auto;
}
`;
