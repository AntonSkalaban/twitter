import { ChangeEvent, FC, KeyboardEvent, useState } from "react";
import { useDispatch } from "react-redux";

import { getSearchedTweetsQuery } from "store/sagas";
import SearchIcon from "assets/images/svg/search.svg?react";

import { SearchButton, SearchInput, StyledSearchbar } from "./styled";

export const Searchbar: FC = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState("");

  const getTweets = async () => {
    dispatch(getSearchedTweetsQuery(value));
  };

  const hanldeChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      getTweets();
    }
  };

  const hanldeClick = () => getTweets();

  return (
    <StyledSearchbar>
      {" "}
      <SearchButton onClick={hanldeClick}>
        {" "}
        <SearchIcon />
      </SearchButton>
      <SearchInput placeholder="Search Twitter" onChange={hanldeChange} onKeyDown={handleKeyDown} />
    </StyledSearchbar>
  );
};
