import { FC, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";

import { Button } from "styled";
import { CreateTweet, Modal, UserCard } from "components";
import { getUser, removeUser } from "store/slices";
import { useGetPageName } from "hooks";
import { auth } from "constants/index";
import { PageNamesEnum } from "types";

import { Nav } from "./Nav";
import { SidebarContainer } from "./styled";

export const Sidebar: FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const pageName = useGetPageName();
  const user = useSelector(getUser);
  const [isOpen, setIsOpen] = useState(false);

  const isProfilePage = pageName === PageNamesEnum.Profile;

  const createTweet = () => {
    setIsOpen(true);
  };

  const logout = () => {
    signOut(auth);
    dispatch(removeUser());
    navigate("/");
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

      <UserCard user={user} />

      <Button $color="blue" onClick={createTweet}>
        <span>Tweet</span>
      </Button>

      {isProfilePage && (
        <Button $color="grey" onClick={logout}>
          <span>Logout</span>
        </Button>
      )}
    </SidebarContainer>
  );
};
