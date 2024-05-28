import { styled } from "styled-components";
export const StyledSidebar = styled.aside `
  width: 373px;
  min-width: 300px;
  margin: 0 15px;

  display: flex;
  flex-direction: column;
  gap: 10px;

  @media ${({ theme }) => theme.media.medium} {
    display: none;
  }
`;
export const UsersContainer = styled.div `
  display: flex;
  flex-direction: column;
  gap: 15px;
  background-color: ${({ theme }) => theme.colors.lightGrey};
  border-radius: 10px;

  color: black;
  padding: 10px;
`;
