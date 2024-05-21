import { Route, Routes } from "react-router-dom";

import { MainLayout } from "components/Layout";

import { Home, Login, Profile, SignUp, TweetPage } from "./pages";

function App() {
  return (
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
  );
}

export default App;
