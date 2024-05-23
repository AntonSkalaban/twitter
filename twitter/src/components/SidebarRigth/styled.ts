import { styled } from "styled-components";

export const StyledSidebar = styled.aside`
  width: 373px;
  min-width: 300px;
  margin: 0 15px;

  display: flex;
  flex-direction: column;
  gap: 20px;

  @media ${({ theme }) => theme.media.medium} {
    display: none;
  }
`;
