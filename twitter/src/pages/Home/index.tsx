import { useState } from "react";
import { useDispatch } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { updatePassword } from "firebase/auth";

import { addUserToFirestore, signInWithGoogle, UserApi } from "api";
import { H1, H2 } from "styled";
import { Modal } from "components/Modal";
import { PasswordForm } from "components/PasswordForm";
import { setUser } from "store/slices";
import { auth } from "constants/index";
import Twitter from "assets/images/png/back-twitter.png";
import GoogleIcon from "assets/images/svg/google-logo.svg?react";
import TwitterLogo from "assets/images/svg/twitter-logo.svg?react";

import { ImageContainer, StyledButton } from "./styled";

export const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [isOpen, setIsOpen] = useState(false);

  const hanldeEmailClick = () => {
    navigate("/sign-up");
  };

  const handleGoogleClick = async () => {
    const user = await signInWithGoogle();

    const userDoc = await UserApi.getUserDoc(user.uid);

    const activeUser = userDoc
      ? {
          id: userDoc.id,
          name: userDoc.name,
          email: userDoc.email,
          image: userDoc.image,
          phone: userDoc.phone,
          birth: userDoc.birth,
        }
      : {
          id: user.uid,
          name: user.displayName || "",
          email: user.email || "",
          image: user.photoURL,
          phone: user.phoneNumber,
          birth: null,
        };

    if (userDoc) {
      navigate("/profile");
    } else {
      addUserToFirestore(activeUser);
      setIsOpen(true);
    }
    dispatch(setUser(activeUser));
  };

  const hanldePasswordSubmit = async (password: string) => {
    if (!auth.currentUser) return;
    await updatePassword(auth.currentUser, password);
    setIsOpen(false);
    navigate("/profile");
  };

  return (
    <section style={{ display: "flex" }}>
      {isOpen && (
        <Modal close={() => setIsOpen(false)}>
          <PasswordForm onSubmit={hanldePasswordSubmit} />
        </Modal>
      )}
      <ImageContainer>
        <img src={Twitter} />
      </ImageContainer>

      <div style={{ marginLeft: "41px" }}>
        <TwitterLogo />
        <H1>Happening now</H1>

        <div
          style={{
            width: "400px",
            height: "fit-content",
            display: "flex",
            flexDirection: "column",
            gap: "32px",
          }}
        >
          <H2>Join Twitter today</H2>

          <div style={{ display: "flex", flexDirection: "column", gap: "21px" }}>
            <StyledButton onClick={handleGoogleClick}>
              <GoogleIcon /> Sign up with Google
            </StyledButton>
            <StyledButton onClick={hanldeEmailClick}>Sign up with email</StyledButton>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "21px" }}>
            <p>
              By singing up you agree to the Terms of Service and Privacy Policy, including Cookie
              Use.
            </p>
            <p>
              Already have an account? <NavLink to={"login"}>Log in</NavLink>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
