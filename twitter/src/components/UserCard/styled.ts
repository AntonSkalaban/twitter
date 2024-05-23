import { styled } from "styled-components";

export const StyledUserCard = styled.article`
  display: flex;
  gap: 5px;
  padding: 5px;
  border-radius: 10px;

  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.grey};
  }
`;
