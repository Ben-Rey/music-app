import React from "react";
import styled from "styled-components";
import { animated, useSpring } from "react-spring";
import { typeScale, primaryFont } from "../../utils";
import { Illustrations, CloseIcon } from "../../assets";
import { PrimaryButton } from "../Buttons/Buttons";
import { EmailInput, PasswordInput } from "./TextFields";
import { ResponsiveContext } from "grommet";

const getAnimation = showModal => {
  return {
    opacity: showModal ? 1 : 0,
    transform: showModal ? `translateY(0)` : `translateY(-200%)`,
  };
};

const ModalLayout = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;

  flex-direction: "column";
  justify-content: center;
  align-items: center;

  background: linear-gradient(270deg, #5d26c1, #a17fe0, #59c173);
  background-size: 600% 600%;

  -webkit-animation: AnimationName 10s ease infinite;
  -moz-animation: AnimationName 10s ease infinite;
  animation: AnimationName 10s ease infinite;

  @-webkit-keyframes AnimationName {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
  @-moz-keyframes AnimationName {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
  @keyframes AnimationName {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`;

const ModalWrapper = styled.div`
  width: 800px;
  height: 500px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  font-family: ${primaryFont};

  background-color: ${props => props.theme.primaryColor};
  backdrop-filter: blur(11.5px);
  -webkit-backdrop-filter: blur(11.5px);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;

  border: 1px solid rgba(255, 255, 255, 0.18);
  border-radius: 10px;
`;

const ColumnModalWrapper = styled(ModalWrapper)`
  flex-direction: ${props => (props.size === "small" ? "column" : "row")};
  justify-content: space-around;
`;

const ModalHeader = styled.h3`
  font-size: ${typeScale.header3};
`;

const SignUpText = styled.p`
  font-size: ${typeScale.paragraph};
  max-width: 70%;
  text-align: center;
`;

const ButtonsModalWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const CloseModalButton = styled.button`
  cursor: pointer;
  background: none;
  border: none;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 40px;
  right: 40px;
  width: 40px;
  height: 40px;
  padding: 0;
`;

export const SignUpModal = ({ showModal, setShowModal }) => {
  const size = React.useContext(ResponsiveContext);

  return (
    <ModalLayout>
      <animated.div style={useSpring(getAnimation(showModal))}>
        <ModalWrapper size={size}>
          <img
            src={Illustrations.MoreMusic}
            alt="Sign up for an account!"
            style={{ height: "40%" }}
          />
          <ModalHeader>Sign Up</ModalHeader>
          <SignUpText>Sign up today to get access to all of our content and features!</SignUpText>
          <PrimaryButton onClick={() => console.log("You signed up!")}>Sign Up</PrimaryButton>
          <CloseModalButton aria-label="Close modal" onClick={() => setShowModal(false)}>
            <CloseIcon />
          </CloseModalButton>
        </ModalWrapper>
      </animated.div>
    </ModalLayout>
  );
};

export const SignInModal = ({
  showModal,
  setShowModal,
  handleLogin,
  handleRegister,
  setEmail,
  setPassword,
}) => {
  const size = React.useContext(ResponsiveContext);

  return (
    <ModalLayout>
      <animated.div style={useSpring(getAnimation(showModal))}>
        <ColumnModalWrapper size={size}>
          <div>
            <ModalHeader>Sign In</ModalHeader>
            <EmailInput label="Email" setEmail={setEmail} />
            <PasswordInput label="Password" setPassword={setPassword} />

            <ButtonsModalWrapper>
              <PrimaryButton
                style={{ margin: "16px 0" }}
                modifiers={["large"]}
                onClick={e => handleRegister(e)}
              >
                Sign Up
              </PrimaryButton>
              <PrimaryButton
                style={{ margin: "20px 0" }}
                onClick={e => handleLogin(e)}
                modifiers={["large"]}
              >
                Sign In
              </PrimaryButton>
            </ButtonsModalWrapper>
          </div>
          <img
            src={Illustrations.MoreMusic}
            alt="Sign in to your account"
            style={{ height: "40%" }}
          />
          <CloseModalButton aria-label="Close modal" onClick={() => setShowModal(false)}>
            <CloseIcon />
          </CloseModalButton>
        </ColumnModalWrapper>
      </animated.div>
    </ModalLayout>
  );
};
