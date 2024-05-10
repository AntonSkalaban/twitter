import { useDispatch } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";

import { signInWithGoogle } from "api/signInWithGoogle";
import { H1, H2 } from "styled";
import { setUser } from "store/slices";
import Twitter from "assets/images/png/back-twitter.png";
import GoogleIcon from "assets/images/svg/google-logo.svg?react";
import TwitterLogo from "assets/images/svg/twitter-logo.svg?react";

import { ImageContainer, StyledButton } from "./styled";

export const Home = () => {
  const navigate = useNavigate();
  const dispath = useDispatch();

  const hanldeEmailClick = () => {
    navigate("/sign-up");
  };

  const handleGoogleClick = async () => {
    const user = await signInWithGoogle();

    if (user) {
      dispath(
        setUser({
          id: user.uid,
          name: user.displayName || "",
          email: user.email || "",
          phone: user.phoneNumber,
          image: user.photoURL,
        }),
      );
      navigate("/profile");
    }
  };

  return (
    <section style={{ display: "flex" }}>
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
