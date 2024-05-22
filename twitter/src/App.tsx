import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import { MainLayout } from "components/Layout";
import { getTheme } from "store/slices";

import { Home, Login, Profile, SignUp, TweetPage } from "./pages";
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
              <Profile />
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
