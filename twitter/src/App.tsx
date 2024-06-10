import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import { Feed } from "pages/Feed";
import { CurrentProfile } from "pages/Profile/CurrentProfile";
import { UserProfile } from "pages/Profile/UserProfile";
import { MainLayout } from "components/Layout";
import { getTheme } from "store/slices";

import { Home, Login, Search, SignUp, TweetPage } from "./pages";
import { PagePathsEnum } from "./types";
import { GlobalStyles, NormalStyles } from "./styled";

function App() {
  const theme = useSelector(getTheme);

  return (
    <ThemeProvider theme={theme}>
      <NormalStyles />
      <GlobalStyles />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/login" element={<Login />} />

        <Route path="/" element={<MainLayout />}>
          <Route path={"/" + PagePathsEnum.Profile} element={<CurrentProfile />} />
          <Route path={"/" + PagePathsEnum.Profile + "/:id"} element={<UserProfile />} />
          <Route path={"/" + PagePathsEnum.Search} element={<Search />} />
          <Route path={"/" + PagePathsEnum.Home} element={<Feed />} />
          <Route path={"/" + PagePathsEnum.Home + "/:id"} element={<TweetPage />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;
