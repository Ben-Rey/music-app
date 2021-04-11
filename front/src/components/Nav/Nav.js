import React from "react";

import styled from "styled-components";
import { ResponsiveContext } from "grommet";

const NavLayout = styled.aside`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  display: ${props => props.display};
  grid-area: 1 / col4-start / last-line / 4;

  background-color: ${props => props.theme.primaryColor};
  background-size: 600% 600%;

  box-shadow: ${props => props.theme.shadowNeutral};
`;

export const Nav = ({ display }) => {
  const size = React.useContext(ResponsiveContext);

  return <NavLayout display={size === "small" ? "none" : "block"}></NavLayout>;
};
