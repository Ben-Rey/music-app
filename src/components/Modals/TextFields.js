import React from "react";
import styled from "styled-components";
import { typeScale, primaryFont } from "../../utils";

const Input = styled.input`
  width: 80%;
  height: 52px;
  background-color: ${props => props.theme.textFieldBackground};
  border: none;
  padding-left: 8px;
  font-family: ${primaryFont};
  border-radius: 2px;

  background: #eeeeee;
  box-shadow: inset -1px -1px 1px rgba(255, 255, 255, 0.7),
    inset 1px 1px 1px rgba(174, 174, 192, 0.15);
  border-radius: 10px;
`;

const Label = styled.label`
  color: ${props => props.theme.textFieldLabelColor};
  font-size: ${typeScale.helperText};
  margin-bottom: 8px;
`;

const logger = e => {
  console.log(e);
};

export const EmailInput = ({ label, placeholder, setEmail = logger }) => (
  <div
    style={{ display: "flex", flexDirection: "column", marginTop: "16px", alignItems: "center" }}
  >
    <Label htmlFor="email">{label}</Label>
    <Input
      id="email"
      type="email"
      placeholder={placeholder}
      onChange={e => setEmail(e.target.value)}
    />
  </div>
);

export const PasswordInput = ({ label, placeholder, setPassword = logger }) => (
  <div
    style={{ display: "flex", flexDirection: "column", marginTop: "16px", alignItems: "center" }}
  >
    <Label htmlFor="password">{label}</Label>
    <Input
      id="password"
      type="password"
      placeholder={placeholder}
      onChange={e => setPassword(e.target.value)}
    />
  </div>
);
