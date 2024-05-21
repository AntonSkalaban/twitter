import { FC, useState } from "react";

import { Button } from "styled/StyledComponents";
import { CreateTweet } from "components/CreateTweet";
import { Modal } from "components/Modal";

import { navLinks } from "./constants";
import { NavContainer, SidebarContainer, StyledNavLink } from "./styled";

export const Sidebar: FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const createTweet = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <SidebarContainer>
      {isOpen && (
        <Modal close={handleClose}>
          <CreateTweet onCreated={handleClose} />
        </Modal>
      )}

      <NavContainer>
        {navLinks.map(({ name, path }) => (
          <StyledNavLink key={name} to={path}>
            {name}
          </StyledNavLink>
        ))}
      </NavContainer>
      <Button $color="blue" onClick={createTweet}>
        Tweet
      </Button>
    </SidebarContainer>
  );
};
