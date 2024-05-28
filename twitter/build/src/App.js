import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { Feed } from "pages/Feed";
import { CurrentProfile } from "pages/Profile/CurrentProfile";
import { UserProfile } from "pages/Profile/UserProfile";
import { MainLayout } from "components/Layout";
import { getTheme } from "store/slices";
import { Home, Login, Search, SignUp, TweetPage } from "./pages";
import { GlobalStyles, NormalStyles } from "./styled";
function App() {
    const theme = useSelector(getTheme);
    return (_jsxs(ThemeProvider, { theme: theme, children: [_jsx(NormalStyles, {}), _jsx(GlobalStyles, {}), _jsxs(Routes, { children: [_jsx(Route, { path: "/", element: _jsx(Home, {}) }), _jsx(Route, { path: "/sign-up", element: _jsx(SignUp, {}) }), _jsx(Route, { path: "/login", element: _jsx(Login, {}) }), _jsx(Route, { path: "/profile", element: _jsx(MainLayout, { children: _jsx(CurrentProfile, {}) }) }), _jsx(Route, { path: "/profile/:id", element: _jsx(MainLayout, { children: _jsx(UserProfile, {}) }) }), _jsx(Route, { path: "/search", element: _jsx(MainLayout, { children: _jsx(Search, {}) }) }), _jsx(Route, { path: "/feed", element: _jsx(MainLayout, { children: _jsx(Feed, {}) }) }), _jsx(Route, { path: "/feed/:id", element: _jsx(MainLayout, { children: _jsx(TweetPage, {}) }) })] })] }));
}
export default App;
