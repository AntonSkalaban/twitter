import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { TweetApi } from "api/TweetApi";
import { UserAvatar, UserAvatarContainer } from "styled";
import { TweetHeader } from "components/Tweet/TweetHeader";
import { StyledTweet, TweetContent, TweetText } from "../styled";
import { TweetImage } from "../TweetImage";
import { LikeButton } from "./LikeButton";
export const TweetBig = ({ tweet }) => {
    const { id, userId, title, image, createdAt, likedUsers, userImg, userName } = tweet;
    const hanldeLike = (likedUsers) => {
        TweetApi.updateTweet(id, { likedUsers });
    };
    return (_jsxs(StyledTweet, { children: [_jsx(UserAvatarContainer, { children: _jsx(UserAvatar, { src: userImg || "" }) }), _jsxs(TweetContent, { children: [_jsx(TweetHeader, { name: userName, email: userName, createdAt: createdAt }), _jsx(TweetText, { children: title }), _jsx(TweetImage, { image: image }), _jsx(LikeButton, { userId: userId, likedUsers: likedUsers, hanldeLike: hanldeLike })] })] }));
};
