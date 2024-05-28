import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { TweetImg, TweetImgContainer } from "./styled";
export const TweetImage = ({ image }) => {
    return _jsxs(_Fragment, { children: [" ", image && _jsx(TweetImgContainer, { children: _jsx(TweetImg, { src: image }) })] });
};
