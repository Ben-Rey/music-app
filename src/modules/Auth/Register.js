import React, { useState } from "react";
// import { PrimaryButton, SecondaryButton, TertiaryButton, PrimaryNavButton } from "../../components";
import { SignUpModal } from "../../components/Modals/Modals";

export default function Login() {
  const [showModal, setShowModal] = useState(true);

  return (
    <div>
      <SignUpModal showModal={showModal} setShowModal={setShowModal} />
    </div>
  );
}
