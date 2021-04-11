import React from "react";
import Pad from "../Pad/Pad";
import { PrimaryNavButton } from "../../components/Buttons/NavButtons";
import { Nav } from "../../components";
import { FlexCenter } from "../../components/Wrappers/Wrappers";
import styled from "styled-components";
import { ResponsiveContext } from "grommet";

const LayoutGrid = styled.div`
  width: 100vw;
  height: 100vh;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr;
`;

export default function Layout() {
  const size = React.useContext(ResponsiveContext);

  return (
    <LayoutGrid>
      <Pad />
      {/* <FlexCenter style={{ position: "fixed-bottom" }}>
        <PrimaryNavButton />
      </FlexCenter> */}
      <Nav />
    </LayoutGrid>
  );
}

// TODO - Add pannel to the right (hide in mobile mode - burger)
