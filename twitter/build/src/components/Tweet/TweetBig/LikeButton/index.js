import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { P } from "styled/index";
import LikeIcon from "assets/images/svg/Like.svg?react";
import LikeIconActive from "assets/images/svg/Vector2.svg?react";
import { LikeContaner, StyledLikeButton } from "./styled";
export const LikeButton = ({ userId, likedUsers, hanldeLike }) => {
    const [newLikedUsers, setNewLlikedUsers] = useState(likedUsers);
    const hanldeClick = () => {
        const likedUsers = newLikedUsers.includes(userId)
            ? newLikedUsers.filter((id) => id !== userId)
            : [...newLikedUsers, userId];
        setNewLlikedUsers(likedUsers);
        hanldeLike(likedUsers);
    };
    return (_jsxs(LikeContaner, { children: [_jsx(StyledLikeButton, { onClick: hanldeClick, children: newLikedUsers.includes(userId) ? _jsx(LikeIconActive, {}) : _jsx(LikeIcon, {}) }), " ", _jsx(P, { children: newLikedUsers.length })] }));
};
