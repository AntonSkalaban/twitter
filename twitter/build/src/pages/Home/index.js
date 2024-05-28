import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { updatePassword } from "firebase/auth";
import { signInWithGoogle, UserApi } from "api";
import { H1, H2, Wrapper } from "styled";
import { Modal } from "components/Modal";
import { PasswordForm } from "components/PasswordForm";
import { setUser } from "store/slices";
import { auth } from "constants/index";
import { PagePathsEnum } from "types/paths";
import GoogleIcon from "assets/images/svg/google-logo.svg?react";
import TwitterLogo from "assets/images/svg/twitter-logo.svg?react";
import { ContentContainer, ContentContainerMain, FlexContainer, ImageContainer, StyledButton, StyledPage, } from "./styled";
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
            }
            else {
                UserApi.addUserDoc(body);
                setIsOpen(true);
            }
            dispatch(setUser(body));
        }
        catch (e) {
            setIsFetching(false);
        }
    };
    const hanldePasswordSubmit = async (password) => {
        if (!auth.currentUser)
            return;
        await updatePassword(auth.currentUser, password);
        setIsOpen(false);
        navigate("/" + PagePathsEnum.Profile);
    };
    return (_jsx(Wrapper, { children: _jsxs(StyledPage, { children: [isOpen && (_jsx(Modal, { close: () => setIsOpen(false), children: _jsx(PasswordForm, { onSubmit: hanldePasswordSubmit }) })), _jsx(ImageContainer, {}), _jsxs(ContentContainer, { children: [_jsx(TwitterLogo, {}), _jsx(H1, { children: "Happening now" }), _jsxs(ContentContainerMain, { children: [_jsx(H2, { children: "Join Twitter today" }), _jsxs(FlexContainer, { children: [_jsxs(StyledButton, { onClick: handleGoogleClick, disabled: isFetching, children: [_jsx(GoogleIcon, {}), " ", isFetching ? "Fetching..." : "Sign up with Google"] }), _jsx(StyledButton, { onClick: hanldeEmailClick, children: "Sign up with email" })] }), _jsxs(FlexContainer, { children: [_jsx("p", { children: "By singing up you agree to the Terms of Service and Privacy Policy, including Cookie Use." }), _jsxs("p", { children: ["Already have an account? ", _jsx(NavLink, { to: "login", children: "Log in" })] })] })] })] })] }) }));
};
