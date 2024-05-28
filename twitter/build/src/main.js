import { jsx as _jsx } from "react/jsx-runtime";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { store } from "./store";
const root = document.getElementById("root");
if (root) {
    ReactDOM.createRoot(root).render(
    // <StrictMode>
    _jsx(Provider, { store: store, children: _jsx(BrowserRouter, { children: _jsx(App, {}) }) }));
}
