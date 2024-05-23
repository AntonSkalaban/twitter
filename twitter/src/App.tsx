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

  return (
    <ThemeProvider theme={theme}>
      <NormalStyles />
      <GlobalStyles />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/login" element={<Login />} />

        <Route
          path="/profile"
          element={
            <MainLayout>
              <CurrentProfile />
            </MainLayout>
          }
        />

        <Route
          path="/profile/:id"
          element={
            <MainLayout>
              <UserProfile />
            </MainLayout>
          }
        />

        <Route
          path="/search"
          element={
            <MainLayout>
              <Search />
            </MainLayout>
          }
        />

        <Route
          path="/feed"
          element={
            <MainLayout>
              <Feed />
            </MainLayout>
          }
        />
        <Route
          path="/feed/:id"
          element={
            <MainLayout>
              <TweetPage />
            </MainLayout>
          }
        />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
