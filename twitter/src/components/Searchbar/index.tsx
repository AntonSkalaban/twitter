import { ChangeEvent, FC, useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import { getSearchedTweetsQuery, getSearchedUsersQuery } from "store/sagas";
import { useDebounce } from "hooks/index";
import SearchIcon from "assets/images/svg/search.svg?react";

import { SearchButton, SearchInput, StyledSearchbar } from "./styled";

export const Searchbar: FC = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState("");

  const debouncedValue = useDebounce(value);

  const getTweets = useCallback(async () => {
    dispatch(getSearchedTweetsQuery(debouncedValue));
    dispatch(getSearchedUsersQuery(debouncedValue));
  }, [debouncedValue, dispatch]);

  useEffect(() => {
    if (debouncedValue) {
      getTweets();
    }
  }, [debouncedValue, getTweets]);

  const hanldeChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <StyledSearchbar>
      <SearchButton>
        <SearchIcon />
      </SearchButton>
      <SearchInput placeholder="Search Twitter" onChange={hanldeChange} />
    </StyledSearchbar>
  );
};
