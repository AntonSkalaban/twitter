import { styled } from "styled-components";

export const StyledModalContainer = styled.section`
  width: 600px;
  min-width: fit-content;
  height: fit-content;
  position: relative;

  padding: 25px;

  position: fixed;
  top: 50%;
  left: 50%;
  z-index: 1000;
  border-radius: 8px;
  transform: translate(-50%, -50%);
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`;

export const StyledCloseBtn = styled.button`
  width: 25px;
  height: 25px;
  position: absolute;
  top: 0;
  right: 0;

  background-color: red;
  border-radius: 50%;
`;

export const StyledModalContent = styled.div`
  width: 100%;
  height: 100%;
`;
