import { FC } from "react";
import { createPortal } from "react-dom";

import { Overlay } from "../Overlay/index";
import { StyledCloseBtn, StyledModalContainer, StyledModalContent } from "./styled";

interface ModalProps {
  children: React.ReactNode;
  close: () => void;
}

export const Modal: FC<ModalProps> = ({ children, close }) => {
  return (
    <>
      {createPortal(
        <>
          <Overlay />
          <StyledModalContainer>
            <StyledCloseBtn onClick={close}>
              <p>X</p>
            </StyledCloseBtn>
            <StyledModalContent>{children}</StyledModalContent>
          </StyledModalContainer>
        </>,
        document.body,
      )}
    </>
  );
};
