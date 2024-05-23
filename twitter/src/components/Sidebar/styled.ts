import { styled } from "styled-components";

export const SidebarContainer = styled.aside`
  width: 270px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;

  padding: 20px;

  @media ${({ theme }) => theme.media.large} {
    width: 50px;
    padding: 10px;

    button {
      width: 30px;
      height: 100px;

      span {
        display: none;
      }

      &:after {
        content: "+";
        font-size: 36px;
      }

      &:nth-of-type(2) {
        &:after {
          content: "-";
          font-size: 36px;
        }
      }
    }

    article {
      width: 30px;
      height: 26px;
      padding: 0;
      p,
      a {
        display: none;
      }
    }
  }

  @media ${({ theme }) => theme.media.extraSmall} {
    width: 100%;
    height: 50px;

    position: fixed;
    bottom: 0;
    left: 0;

    z-index: 50;
    background-color: ${({ theme }) => theme.bg.main};

    padding: 10px;

    button,
    article {
      display: none;
    }
  }
`;
