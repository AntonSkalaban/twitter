import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useNavigate } from "react-router-dom";
import { UserAvatar, UserAvatarContainer } from "styled";
import { PagePathsEnum } from "types";
import { StyledTweet, TweetContent, TweetText } from "../styled";
import { TweetHeader } from "../TweetHeader";
import { TweetImage } from "../TweetImage";
export const TweetSmall = ({ tweet }) => {
    const navigate = useNavigate();
    const { id, title, image, userImg, userName } = tweet;
    const handleClick = () => navigate(`/${PagePathsEnum.Home}/${id}`);
    return (_jsxs(StyledTweet, { onClick: handleClick, children: [_jsxs(UserAvatarContainer, { "$size": "small", children: [" ", _jsx(UserAvatar, { src: userImg || "" })] }), _jsxs(TweetContent, { children: [_jsx(TweetHeader, { name: userName }), _jsx(TweetText, { children: title }), _jsx(TweetImage, { image: image })] })] }));
};
