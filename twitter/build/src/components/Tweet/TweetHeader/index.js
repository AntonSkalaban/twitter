import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { FlexRow, LinkGrey, PGrey } from "styled/StyledComponents";
import MenuIcon from "assets/images/svg/dot-menu.svg?react";
import { UserInfoContainer, UserName } from "../styled";
export const TweetHeader = ({ name, email, createdAt }) => {
    const date = createdAt && new Date(createdAt).toLocaleDateString();
    return (_jsxs(FlexRow, { children: [_jsxs(UserInfoContainer, { children: [_jsx(UserName, { children: name }), _jsxs(LinkGrey, { children: [" ", email] }), " ", _jsxs(PGrey, { children: ["\u00B7 ", date] })] }), email && _jsx(MenuIcon, {})] }));
};
