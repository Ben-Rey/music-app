import React, { useEffect } from "react";
import Pad from "../Pad/Pad";

import { NavLayout, BoxInnerShadow, BoxCenterColumn } from "../../components";
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

export default function Layout() {
  const size = React.useContext(ResponsiveContext);
  const { setMouseDown } = useMouse();
  const { currentUser } = useAuth();
  const { connect, socket } = useIo();
  const users = useSelector(state => state.users);

  useEffect(() => {
    connect(currentUser.email);
  }, [socket]);

  return (
    <LayoutGrid onMouseDown={() => setMouseDown(true)} onMouseUp={() => setMouseDown(false)}>
      <Pad />
      {/* <FlexCenter style={{ position: "fixed-bottom" }}>
        <PrimaryNavButton />
      </FlexCenter> */}
      <NavLayout display={size === "small" ? "none" : "block"}>
        <BoxCenterColumn>
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
