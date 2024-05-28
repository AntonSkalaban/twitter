import { styled } from "styled-components";
import { inputMixin } from "styled";
export const SelectWrapper = styled.div `
  min-width: 159px;
  max-width: 312px;
  width: 100%;
  position: relative;
  color: ${({ theme }) => theme.fonts.secondary};
`;
export const StyledSelect = styled.div `
  ${inputMixin}
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const SelectBtn = styled.button `
  width: 20px;
  height: 20px;
  cursor: pointer;
`;
export const SelectContent = styled.div `
  width: 100%;
  height: 200px;

  overflow: scroll;
  position: absolute;
  top: 100%;
  z-index: 5;
  background-color: #fff;
`;
export const SelectOption = styled.p `
  cursor: pointer;
  padding: 5px;

  &:hover {
    background-color: #eee;
  }
`;
