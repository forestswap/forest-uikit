import { Colors } from "./types";

export const baseColors = {
  failure: "#7F2D00",
  primary: "#2b6777",
  primaryBright: "#16888D",
  primaryDark: "#334A52",
  secondary: "#52ab98",
  success: "#F99136",
  warning: "#8E4B5D",
};

export const brandColors = {
  binance: "#F0B90B",
};

export const lightColors: Colors = {
  ...baseColors,
  ...brandColors,
  background: "#f2f2f2",
  backgroundDisabled: "#e9eaeb",
  contrast: "#191326",
  invertedContrast: "#f2f2f2",
  input: "#eeeaf4",
  tertiary: "#28979C",
  text: "#2b6777",
  textDisabled: "#28979C",
  textSubtle: "#4C8596",
  borderColor: "#E9EAEB",
  card: "#FFFFFF",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #E6FDFF 0%, #F3EFFF 100%)",
  },
};

export const darkColors: Colors = {
  ...baseColors,
  ...brandColors,
  secondary: "#52ab98",
  background: "#003F4E",
  backgroundDisabled: "#2b6777",
  contrast: "#FFFFFF",
  invertedContrast: "#191326",
  input: "#96AFB8",
  primaryDark: "#334A52",
  tertiary: "#52ab98",
  text: "#ffffff",
  textDisabled: "#F6EDD9",
  textSubtle: "#EEFEED",
  borderColor: "#334A52",
  card: "#334A52",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #313D5C 0%, #3D2A54 100%)",
  },
};
