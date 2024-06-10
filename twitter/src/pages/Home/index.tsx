import { useState } from "react";
import { useDispatch } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { updatePassword } from "firebase/auth";

import { signInWithGoogle, UserApi } from "api";
import { H1, H2, Wrapper } from "styled";
import { Modal, PasswordForm } from "components";
import { setUser } from "store/slices";
import { auth } from "constants/index";
import { PagePathsEnum } from "types";
import GoogleIcon from "assets/images/svg/google-logo.svg?react";
import TwitterLogo from "assets/images/svg/twitter-logo.svg?react";

import {
  ContentContainer,
  ContentContainerMain,
  FlexContainer,
  ImageContainer,
  StyledButton,
  StyledPage,
} from "./styled";

export const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [isFetching, setIsFetching] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const hanldeEmailClick = () => {
    navigate("/sign-up");
  };

  const handleGoogleClick = async () => {
    try {
      setIsFetching(true);
      const user = await signInWithGoogle();

      const userDoc = await UserApi.getUserDoc(user.uid);

      const body = userDoc
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
        navigate("/" + PagePathsEnum.Profile);
      } else {
        UserApi.addUserDoc(body);
        setIsOpen(true);
      }
      dispatch(setUser(body));
    } catch (e) {
      setIsFetching(false);
    }
  };

  const hanldePasswordSubmit = async (password: string) => {
    if (!auth.currentUser) return;
    await updatePassword(auth.currentUser, password);
    setIsOpen(false);
    navigate("/" + PagePathsEnum.Profile);
  };

  return (
    <Wrapper>
      <StyledPage>
        {isOpen && (
          <Modal close={() => setIsOpen(false)}>
            <PasswordForm onSubmit={hanldePasswordSubmit} />
          </Modal>
        )}
        <ImageContainer />

        <ContentContainer>
          <TwitterLogo />
          <H1>Happening now</H1>

          <ContentContainerMain>
            <H2>Join Twitter today</H2>

            <FlexContainer>
              <StyledButton onClick={handleGoogleClick} disabled={isFetching}>
                <GoogleIcon /> {isFetching ? "Fetching..." : "Sign up with Google"}
              </StyledButton>
              <StyledButton onClick={hanldeEmailClick}>Sign up with email</StyledButton>
            </FlexContainer>

            <FlexContainer>
              <p>
                By singing up you agree to the Terms of Service and Privacy Policy, including Cookie
                Use.
              </p>
              <p>
                Already have an account? <NavLink to={"login"}>Log in</NavLink>
              </p>
            </FlexContainer>
          </ContentContainerMain>
        </ContentContainer>
      </StyledPage>
    </Wrapper>
  );
};
