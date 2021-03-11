import React, { useState } from "react";
// import { PrimaryButton, SecondaryButton, TertiaryButton, PrimaryNavButton } from "../../components";
import { SignInModal } from "../../components/Modals/Modals";
import { useHistory } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

export default function Login() {
  const [showModal, setShowModal] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();

  //   const [error, setError] = useState("");
  //   const [loading, setLoading] = useState(false);
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      //   setError("");
      //   setLoading(true);
      await login(email, password);
      history.push("/");
    } catch {
      console.log("wrong password");
      //   setError("Failed to log in");
    }

    // setLoading(false);
  }
  return (
    <div>
      <SignInModal
        showModal={showModal}
        setShowModal={setShowModal}
        handleSubmit={handleSubmit}
        setEmail={setEmail}
        setPassword={setPassword}
      />
    </div>
  );
}
