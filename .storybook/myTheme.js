import { create } from "@storybook/theming/create";

export default create({
  base: "light",

  colorPrimary: "#FB7575",
  colorSecondary: "deepskyblue",

  // UI
  appBg: "white",
  appContentBg: "#F0F0F3",
  appBorderColor: "white",
  appBorderRadius: 4,

  // Typography
  fontBase: '"Open Sans", sans-serif',
  fontCode: "monospace",

  // Text colors
  textColor: "black",
  textInverseColor: "rgba(255,255,255,0.9)",

  // Toolbar default and active colors
  barTextColor: "black",
  barSelectedColor: "white",
  barBg: "#FB7575",

  // Form colors
  inputBg: "black",
  inputBorder: "#745FF2",
  inputTextColor: "black",
  inputBorderRadius: 4,

  brandTitle: "My custom storybook",
  brandUrl: "https://example.com",
  brandImage: "https://placehold.it/350x150",
});
