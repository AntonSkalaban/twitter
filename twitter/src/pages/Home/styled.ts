import styled from "styled-components";

import { Button } from "styled/StyledComponents";
import Twitter from "assets/images/png/back-twitter.png";

export const StyledButton = styled(Button)`
  border: 1px solid rgba(228, 234, 237, 1);
`;

export const StyledPage = styled.section`
  display: flex;

  @media ${({ theme }) => theme.media.medium} {
    align-items: center;
    justify-content: center;
  }
`;

export const ImageContainer = styled.div`
  width: 1121px;
  height: 1028px;
  max-width: 60%;
  max-height: 90vh;

  background-image: url(${Twitter});
  background-position: center;

  @media ${({ theme }) => theme.media.medium} {
    display: none;
  }
`;

export const ContentContainer = styled.section`
  margin-left: 41px;
  @media ${({ theme }) => theme.media.medium} {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-left: 0;
  }
`;

export const ContentContainerMain = styled.div`
  width: 400px;
  height: fit-content;
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

export const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 21px;
`;
