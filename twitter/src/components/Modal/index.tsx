import { FC } from "react";
import { createPortal } from "react-dom";

import { Overlay } from "styled";
import { useClickOutside } from "hooks";

import { ModalProps } from "./types";
import { StyledCloseBtn, StyledModalContainer, StyledModalContent } from "./styled";

export const Modal: FC<ModalProps> = ({ children, close }) => {
  const ref = useClickOutside(close);

  return (
    <>
      {createPortal(
        <>
          <Overlay />
          <StyledModalContainer ref={ref}>
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
