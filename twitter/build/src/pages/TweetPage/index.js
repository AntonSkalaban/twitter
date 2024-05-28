import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useParams } from "react-router-dom";
import { TweetBig } from "components/index";
import { useTweetQuery } from "./hook";
export const TweetPage = () => {
    const { id } = useParams();
    const { tweet, isFetching, error } = useTweetQuery(id);
    if (isFetching)
        return _jsx("p", { children: "Fetching..." });
    if (error)
        return _jsxs("p", { children: ["Error: ", error] });
    if (!tweet)
        return _jsx("p", { children: "Tweet not found" });
    return (_jsx("main", { style: { maxWidth: "920px" }, children: _jsx(TweetBig, { tweet: tweet }) }));
};
