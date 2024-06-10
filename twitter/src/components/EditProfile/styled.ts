import { styled } from "styled-components";

export const AvatarContainer = styled.div`
  width: 120px;
  height: 120px;

  border-radius: 50%;
  position: relative;
  overflow: hidden;
  cursor: pointer;
`;

export const EditAvatarBtn = styled.div`
  width: 100%;
  height: 30px;
  background-color: ${({ theme }) => theme.colors.lightGrey};
  position: absolute;
  bottom: 0;
  text-align: center;
`;
