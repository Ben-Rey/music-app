import React, { useEffect } from "react";
import Pad from "../Pad/Pad";

import {
  NavLayout,
  BoxInnerShadow,
  BoxCenterColumn,
  SecondaryButton,
  PrimaryNavButton,
} from "../../components";

import { Textfit } from "react-textfit";

import styled from "styled-components";
import { ResponsiveContext } from "grommet";
import { useMouse } from "../../contexts/MouseContext";
import { useAuth } from "../../contexts/AuthContext";
import { useIo } from "../../contexts/ioContext";
import { useSelector } from "react-redux";

const LayoutGrid = styled.div`
  width: 100vw;
  height: 100vh;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr;
`;

export const NavButtonGrid = styled.div`
  display: grid;
  grid-column-start: 2;
  justify-items: center;
  align-items: center;
`;

export default function Layout() {
  const size = React.useContext(ResponsiveContext);
  const { setMouseDown } = useMouse();
  const { currentUser } = useAuth();
  const { connect, socket } = useIo();
  const { logout } = useAuth();

  const users = useSelector(state => state.users);

  useEffect(() => {
    connect(currentUser.email);
  }, [socket]);

  const handleLogout = async () => {
    try {
      await logout();
      history.push("/");
    } catch (err) {
      console.log(err);
      //   setError("Failed to log in");
    }
  };

  return (
    <LayoutGrid onMouseDown={() => setMouseDown(true)} onMouseUp={() => setMouseDown(false)}>
      <Pad />
      <NavButtonGrid style={{ position: "fixed-bottom" }}>
        <PrimaryNavButton />
      </NavButtonGrid>
      <NavLayout display={size === "small" ? "none" : "block"}>
        <BoxCenterColumn>
          <SecondaryButton onClick={() => handleLogout()} modifiers={["large"]}>
            Logout
          </SecondaryButton>
          {users &&
            users.list.map(user => (
              <BoxInnerShadow key={user.userID} width="80%">
                <div key={user.userID}>
                  <Textfit mode="single">{user.username}</Textfit>
                </div>
              </BoxInnerShadow>
            ))}
        </BoxCenterColumn>
      </NavLayout>
    </LayoutGrid>
  );
}

// TODO - Add pannel to the right (hide in mobile mode - burger)
