import { blue, neutral, yellow, green, red, neuroBasic } from "./colors";
import { primaryFont } from "./typography";
import { neumoShadow } from "./shadows";

export const defaultTheme = {
  primaryColor: neuroBasic[100],
  primaryHoverColor: neuroBasic[200],
  primaryActiveColor: neuroBasic[100],
  formElementBackground: neutral[100],
  textOnFormElementBackground: neutral[600],
  textColorOnPrimary: neutral[100],
  textColor: neutral[600],
  textColorInverted: neutral[100],
  primaryFont: primaryFont,
  disabled: neutral[400],
  textOnDisabled: neutral[300],
  textFieldBackground: neutral[200],
  textFieldLabelColor: neutral[500],
  shadowNeutral: neumoShadow["neutral"],
  shadowActive: neumoShadow["active"],
  status: {
    warningColor: yellow[100],
    warningColorHover: yellow[200],
    warningColorActive: yellow[300],
    errorColor: red[100],
    errorColorHover: red[200],
    errorColorActive: red[300],
    successColor: green[100],
    successColorHover: green[200],
    successColorActive: green[300],
  },
};

export const darkTheme = {
  primaryColor: neutral[100],
  primaryHoverColor: neutral[200],
  primaryActiveColor: neutral[300],
  formElementBackground: blue[100],
  textOnFormElementBackground: neuroBasic[100],
  textColorOnPrimary: blue[300],
  textColor: blue[300],
  textColorInverted: neutral[100],
  primaryFont: primaryFont,
  disabled: neutral[400],
  textOnDisabled: neutral[300],
  textFieldBackground: neutral[200],
  textFieldLabelColor: neutral[100],
  status: {
    warningColor: yellow[100],
    warningColorHover: yellow[200],
    warningColorActive: yellow[300],
    errorColor: red[100],
    errorColorHover: red[200],
    errorColorActive: red[300],
    successColor: green[100],
    successColorHover: green[200],
    successColorActive: green[300],
  },
};
