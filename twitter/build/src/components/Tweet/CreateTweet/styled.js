import { styled } from "styled-components";
import { FlexRow } from "styled/StyledComponents";
export const TweetTextArea = styled.textarea `
  width: 100%;
  height: auto;
  max-height: 300px;

  border: none;
  font-weight: 600;
  font-size: 22px;
  line-height: 26px;

  color: ${({ theme }) => theme.fonts.secondary};
  resize: none;
  background-color: transparent;

  &:focus {
    outline: none;
  }
`;
export const ControllersRow = styled(FlexRow) `
  margin-top: 10px;
`;
