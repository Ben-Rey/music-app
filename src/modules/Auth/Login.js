import React, { useState } from "react";
// import { PrimaryButton, SecondaryButton, TertiaryButton, PrimaryNavButton } from "../../components";
import { SignInModal } from "../../components/Modals/Modals";
import { useHistory } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

export default function Login() {
  const [showModal, setShowModal] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, signup } = useAuth();

  //   const [error, setError] = useState("");
  //   const [loading, setLoading] = useState(false);
  const history = useHistory();

  async function handleLogin(e) {
    e.preventDefault();

    try {
      await login(email, password);
      history.push("/");
    } catch (e) {
      console.log(e);
      if (e.code.includes("invalid-email")) alert("Invalid email");
      if (e.code.includes("user-not-found")) alert("User not found");
      if (e.code.includes("wrong-password")) alert("Wrong password");
    }
  }

  async function handleRegister(e) {
    console.log("here");
    e.preventDefault();
    try {
      await signup(email, password);
      history.push("/");
    } catch (err) {
      console.log(err);
      //   setError("Failed to log in");
    }
  }
  return (
    <div>
      <SignInModal
        showModal={showModal}
        setShowModal={setShowModal}
        handleLogin={handleLogin}
        handleRegister={handleRegister}
        setEmail={setEmail}
        setPassword={setPassword}
      />
    </div>
  );
}
