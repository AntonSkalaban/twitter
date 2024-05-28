import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { Button } from "styled/StyledComponents";
import { Modal } from "components/Modal";
import { CreateTweet } from "components/Tweet/CreateTweet";
import { UserCard } from "components/UserCard";
import { getUser, removeUser } from "store/slices";
import { useGetPageName } from "hooks/useGetPageName";
import { auth } from "constants/index";
import { PageNamesEnum } from "types/paths";
import { Nav } from "./Nav";
import { SidebarContainer } from "./styled";
export const Sidebar = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const pageName = useGetPageName();
    const user = useSelector(getUser);
    const [isOpen, setIsOpen] = useState(false);
    const isProfilePage = pageName === PageNamesEnum.Profile;
    const createTweet = () => {
        setIsOpen(true);
    };
    const logout = () => {
        signOut(auth);
        dispatch(removeUser());
        navigate("/");
    };
    const handleClose = () => {
        setIsOpen(false);
    };
    return (_jsxs(SidebarContainer, { children: [isOpen && (_jsx(Modal, { close: handleClose, children: _jsx(CreateTweet, { onCreated: handleClose }) })), _jsx(Nav, {}), _jsx(UserCard, { user: user }), _jsx(Button, { "$color": "blue", onClick: createTweet, children: _jsx("span", { children: "Tweet" }) }), isProfilePage && (_jsx(Button, { "$color": "grey", onClick: logout, children: _jsx("span", { children: "Logout" }) }))] }));
};
