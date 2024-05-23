import { FC, useState } from "react";

import { Button } from "styled/StyledComponents";
import { CreateTweet } from "components/CreateTweet";
import { Modal } from "components/Modal";

import { Nav } from "./Nav";
import { SidebarContainer } from "./styled";

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

      <Nav />
      <Button $color="blue" onClick={createTweet}>
        <span>Tweet</span>
      </Button>
    </SidebarContainer>
  );
};
