import { useNavigate } from "react-router-dom";

import { H1, H2 } from "styled";
import Twitter from "assets/images/png/back-twitter.png";
import GoogleIcon from "assets/images/svg/google-logo.svg?react";
import { ImageContainer, StyledButton } from "./styled";

export const Home = () => {
  const navigate = useNavigate();

  const hanldeEmailClick = () => {
    navigate("/sign-up");
  };
  return (
    <section style={{ display: "flex" }}>
      <ImageContainer>
        <img src={Twitter} />
      </ImageContainer>
      <div style={{ marginLeft: "41px" }}>
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
            <StyledButton>
              <GoogleIcon /> Sign up with Google
            </StyledButton>
            <StyledButton onClick={hanldeEmailClick}>Sign up with email</StyledButton>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "21px" }}>
            <p>
              By singing up you agree to the Terms of Service and Privacy Policy, including Cookie
              Use.
            </p>
            <p>Already have an account? Log in</p>
          </div>
        </div>
      </div>
    </section>
  );
};