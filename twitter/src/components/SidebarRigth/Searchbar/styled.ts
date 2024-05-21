import { styled } from "styled-components";

export const StyledSearchbar = styled.div`
  width: 100;
  height: 55px;
  background: #eff3f4;
  border-radius: 31px;

  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SearchInput = styled.input`
  width: 90%;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 21px;

  background-color: transparent;
  color: #5c6c79;

  padding-left: 30px;
`;

export const SearchButton = styled.button`
  width: 24px;
  height: 24px;

  position: absolute;
  left: 20px;
  top: calc(50% - 12px);
`;

// /* Search Twitter */

// position: absolute;
// width: 115px;
// height: 21px;
// left: 1441px;
// top: 35px;

// /* identical to box height */

// position: absolute;
// width: 24px;
// height: 24px;
// left: 1397px;
// top: 35px;

// /* Rectangle 9 */

// position: absolute;
// left: 0%;
// right: 0%;
// top: 0%;
// bottom: 0%;

// background: #C4C4C4;

// /* Vector */

// position: absolute;
// left: 8.33%;
// right: 9.38%;
// top: 8.33%;
// bottom: 9.38%;

// background: #5C6C79;
