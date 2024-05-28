import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useNavigate } from "react-router-dom";
import { useTweetsWithImageQuery } from "./hooks";
import { TweetImage, TweetsImagesContainer } from "./styled";
export const TweetsImages = () => {
    const navigate = useNavigate();
    const { tweets, isFetching, error } = useTweetsWithImageQuery();
    const hanldeClick = (id) => () => {
        navigate(`/feed/${id}`);
    };
    if (isFetching)
        return _jsx("p", { children: "Fetching..." });
    if (error)
        return _jsxs("p", { children: ["Error: ", error] });
    if (!tweets.length)
        return null;
    return (_jsx(TweetsImagesContainer, { children: tweets.map(({ id, image }) => {
            return _jsx(TweetImage, { "$image": image || "", onClick: hanldeClick(id) }, id);
        }) }));
};
