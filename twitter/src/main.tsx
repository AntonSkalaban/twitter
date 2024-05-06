import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import { GlobalStyles, NormalStyles } from "./styled";

const root = document.getElementById("root");

if (root) {
  ReactDOM.createRoot(root).render(
    <StrictMode>
      <BrowserRouter>
        <NormalStyles />
        <GlobalStyles />
        <App />
      </BrowserRouter>
    </StrictMode>,
  );
}
