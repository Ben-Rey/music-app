import styled, { keyframes } from "styled-components";
import { typeScale, primaryFont } from "../../utils";
import { applyStyleModifiers } from "styled-components-modifiers";

export const NAV_BUTTON_MODIFIERS = {};

const rotate = keyframes`
    from {
      -ms-transform: rotate(0deg);
      -moz-transform: rotate(0deg);
      -webkit-transform: rotate(0deg);
      -o-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    to {
      -ms-transform: rotate(360deg);
      -moz-transform: rotate(360deg);
      -webkit-transform: rotate(360deg);
      -o-transform: rotate(360deg);
      transform: rotate(360deg);
    }
`;

export const PrimaryNavButton = styled.button`
  width: 80px;
  height: 80px;

  position: relative;

  color: grey;
  background-clip: text;
  -webkit-background-clip: text;

  border: none;
  border-radius: 50%;

  box-shadow: 3px 3px 7px 0px rgba(174, 174, 192, 0.4), -3px -3px 7px 0px rgba(255, 255, 255, 1);
  display: flex;

  align-items: center;
  justify-content: center;

  overflow: hidden;

  cursor: pointer;

  font-family: ${primaryFont};
  font-size: ${typeScale.header2};

  transition: box-shadow 0.1s linear, color 0.1s linear;

  &:disabled {
    background-color: ${props => props.theme.disabled};
    color: ${props => props.theme.textOnDisabled};
    cursor: not-allowed;
  }

  &:hover {
    /* color: #85ffbd; */
  }

  &:focus {
    outline: none;
  }

  &:active {
    box-shadow: 1px 1px 2px 0px rgba(174, 174, 192, 0.2), -1px -1px 2px 0px rgba(255, 255, 255, 0.7);
    background: #59c173;
    background: -webkit-linear-gradient(to right, #5d26c1, #a17fe0, #59c173);
    background: linear-gradient(to right, #5d26c1, #a17fe0, #59c173);
    background-clip: text;
    -webkit-background-clip: text;
  }

  &::before {
    content: "";

    position: absolute;
    z-index: -1;
    top: 5px;
    bottom: 5px;
    left: 5px;
    right: 5px;

    background-color: ${props => props.theme.primaryColor};

    border-radius: 50%;
  }

  &::after {
    content: "";
    position: absolute;

    z-index: -2;
    top: 50%;
    bottom: 0px;
    left: 50%;
    right: 0px;

    background-color: #85ffbd;
    background-image: linear-gradient(45deg, #85ffbd 0%, #fffb7d 100%);
    opacity: 0;

    /* transform: rotate(-90deg) translate(-50%, -100%); */
    transform: translate(-100%);
    transform-origin: top left;
    transition: transform 300ms, opacity 300ms;
  }

  &:hover::after {
  }

  &:active::after {
    opacity: 0.6;

    -webkit-animation: ${rotate} 1s linear infinite;
    -moz-animation: ${rotate} 1s linear infinite;
    -ms-animation: ${rotate} 1s linear infinite;
    -o-animation: ${rotate} 1s linear infinite;
    animation: ${rotate} 1s linear infinite;
    transition: opacity 0.1s;
  }

  ${applyStyleModifiers(NAV_BUTTON_MODIFIERS)};
`;
