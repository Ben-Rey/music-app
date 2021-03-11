import React from "react";
import Pad from "../Pad/Pad";
import { PrimaryNavButton } from "../../components/Buttons/NavButtons";
import { FlexCenter } from "../../components/Wrappers/Wrappers";

export default function Layout() {
  return (
    <>
      <FlexCenter style={{ position: "fixed-bottom" }}>
        <PrimaryNavButton />
      </FlexCenter>
      <Pad />
    </>
  );
}
