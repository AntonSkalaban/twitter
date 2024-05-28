import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getSearchedTweetsQuery, getSearchedUsersQuery } from "store/sagas";
import { useDebounce } from "hooks/index";
import SearchIcon from "assets/images/svg/search.svg?react";
import { SearchButton, SearchInput, StyledSearchbar } from "./styled";
export const Searchbar = () => {
    const dispatch = useDispatch();
    const [value, setValue] = useState("");
    const debouncedValue = useDebounce(value);
    const getTweets = useCallback(async () => {
        dispatch(getSearchedTweetsQuery(debouncedValue, null));
        dispatch(getSearchedUsersQuery(debouncedValue));
    }, [debouncedValue, dispatch]);
    useEffect(() => {
        if (debouncedValue) {
            getTweets();
        }
    }, [debouncedValue, getTweets]);
    const hanldeChange = (e) => {
        setValue(e.target.value);
    };
    return (_jsxs(StyledSearchbar, { children: [_jsx(SearchButton, { children: _jsx(SearchIcon, {}) }), _jsx(SearchInput, { placeholder: "Search Twitter", onChange: hanldeChange })] }));
};
