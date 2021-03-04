import styled from "styled-components";
import { typeScale, primaryFont } from "../../utils";
import { applyStyleModifiers } from "styled-components-modifiers";

export const PRIMARY_BUTTON_MODIFIERS = {
  small: () => `
  padding: 8px;
  font-size: ${typeScale.helperText};
  `,
  large: () => `
  padding: 16px 42px;
  font-size: ${typeScale.header5};
  `,

  square: () => `
  padding: 16px 24px;
  font-size: ${typeScale.header5};
  border-radius: 10px;
  `,

  warning: ({ theme }) => `
    background-color: ${theme.status.warningColor};
    color: ${theme.textColorInverted};

    &:hover, &:focus {
      background-color: ${theme.status.warningColorHover};
    }

    &:active {
      background-color: ${theme.status.warningColorActive};
    }
  `,
  error: ({ theme }) => `
  background-color: ${theme.status.errorColor};
  color: ${theme.textColorInverted};

  &:hover {
    background-color: ${theme.status.errorColorHover};
  }

  &:active {
    background-color: ${theme.status.errorColorActive};
  }
  `,
  success: ({ theme }) => `
  background-color: ${theme.status.successColor};
  color: ${theme.textColorInverted};

  &:hover {
    background-color: ${theme.status.successColorHover};
  }

  &:active {
    background-color: ${theme.status.successColorActive};
  }
  `,
};

export const PrimaryButton = styled.button`
  position: relative;
  display: inline-block;

  align-items: center;
  justify-content: center;

  padding: 40px;

  color: #fb7575;
  background-color: ${props => props.theme.primaryColor};

  /* background-color: #9c9c9c; */
  background-clip: text;
  /* -webkit-background-clip: text; */

  border: none;

  box-shadow: 3px 3px 7px 0px rgba(174, 174, 192, 0.4), -3px -3px 7px 0px rgba(255, 255, 255, 1);

  overflow: hidden;

  cursor: pointer;

  font-family: ${primaryFont};
  font-size: ${typeScale.header2};

  transition: box-shadow 0.1s linear, color 0.1s linear, background-color 0.2s linear;

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
    background: rgb(255, 255, 255);
    background: radial-gradient(circle, rgba(255, 255, 255, 1) 0%, rgba(240, 240, 243, 1) 90%);
  }

  ${applyStyleModifiers(PRIMARY_BUTTON_MODIFIERS)};
`;
