import { jsx as _jsx } from "react/jsx-runtime";
import { Fragment } from "react";
import { P } from "styled/StyledComponents";
import { components } from "./constants";
export const TweetsList = ({ itemType = "big", tweets, error, isFetching }) => {
    if (isFetching)
        return _jsx(P, { children: "Fetching..." });
    if (error)
        return _jsx(P, { children: error });
    return (_jsx("div", { children: tweets.map((tweet) => (_jsx(Fragment, { children: components[itemType](tweet) }, tweet.id))) }));
};
