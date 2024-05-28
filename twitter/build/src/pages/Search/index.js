import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useSelector } from "react-redux";
import { StyledPage } from "styled/index";
import { Searchbar } from "components/Searchbar";
import { TweetsList } from "components/TweetsList";
import { getSearchedTweets } from "store/slices";
export const Search = () => {
    const { tweets, isFetching, error } = useSelector(getSearchedTweets);
    return (_jsxs(StyledPage, { children: [" ", _jsx(Searchbar, {}), _jsx(TweetsList, { tweets: tweets, isFetching: isFetching, error: error }), _jsx("div", {})] }));
};
