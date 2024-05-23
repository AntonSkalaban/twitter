import { styled } from "styled-components";

export const SidebarContainer = styled.aside`
  width: 270px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px;

  @media ${({ theme }) => theme.media.large} {
    width: 50px;
    padding: 10px;

    button {
      width: 30px;
      height: 100px;
      /* border-radius: 50%; */

      span {
        display: none;
      }

      &:after {
        content: "+";
        font-size: 46px;
      }
    }
  }
`;
