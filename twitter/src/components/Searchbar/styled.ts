import { styled } from "styled-components";

export const StyledSearchbar = styled.div`
  width: 100;
  height: 55px;
  background: #eff3f4;
  border-radius: 31px;

  position: relative;

  background-color: ${({ theme }) => theme.colors.lightGrey};

  display: flex;
  align-items: center;
  justify-content: center;
  margin: 15px 0;
`;

export const SearchInput = styled.input`
  width: 90%;

  font-weight: 400;
  font-size: 18px;
  line-height: 21px;

  color: #5c6c79;

  background-color: transparent;
  padding-left: 30px;
  outline: none;
  border: none;
`;

export const SearchButton = styled.button`
  width: 24px;
  height: 24px;

  position: absolute;
  left: 20px;
  top: calc(50% - 12px);
`;
