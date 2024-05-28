import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { LinkGrey, UserAvatar, UserAvatarContainer } from "styled/StyledComponents";
import { UserNameSmall } from "components/Tweet/TweetSmall/styled";
import { getUser } from "store/slices";
import { StyledUserCard } from "./styled";
export const UserCard = ({ user }) => {
    const navigate = useNavigate();
    const currentUser = useSelector(getUser);
    const { id, name, email, image } = user;
    const handleClick = () => navigate(`/profile${currentUser.id === id ? "" : `/${id}`}`);
    return (_jsxs(StyledUserCard, { onClick: handleClick, children: [_jsx(UserAvatarContainer, { "$size": "small", children: _jsx(UserAvatar, { src: image || "" }) }), _jsxs("div", { children: [_jsx(UserNameSmall, { children: name }), _jsx(LinkGrey, { children: email })] })] }));
};
