import { Route, Routes } from "react-router-dom";

import { MainLayout } from "components/Layout";

import { Home, Login, Profile, SignUp } from "./pages";

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
    </Routes>
  );
}

export default App;
