import React from "react";
import { PrimaryButton, SecondaryButton, TertiaryButton } from "../../components";

export default function Login() {
  return (
    <div>
      <PrimaryButton modifiers={["small", "success"]}>Hello world</PrimaryButton>
      <SecondaryButton modifiers={["large"]}>Hello world</SecondaryButton>
      <TertiaryButton>Hello world</TertiaryButton>
    </div>
  );
}
