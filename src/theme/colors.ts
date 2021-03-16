import { Colors } from "./types";

export const baseColors = {
  failure: "#ED4B9E",
  primary: "#64BB6A",
  primaryBright: "#9FD983",
  primaryDark: "#37782C",
  secondary: "#D1A44F",
  success: "#00BCF5",
  warning: "#FF8935",
};

export const brandColors = {
  binance: "#F0B90B",
};

export const lightColors: Colors = {
  ...baseColors,
  ...brandColors,
  background: "#FEFED3",
  backgroundDisabled: "#E9EAEB",
  contrast: "#191326",
  invertedContrast: "#FFFFFF",
  input: "#eeeaf4",
  tertiary: "#EFF4F5",
  text: "#005700",
  textDisabled: "#A1AFA0",
  textSubtle: "#0D7127",
  borderColor: "#E9EAEB",
  card: "#FFFFFF",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #E6FDFF 0%, #F3EFFF 100%)",
  },
};

export const darkColors: Colors = {
  ...baseColors,
  ...brandColors,
  secondary: "#0D7127",
  background: "#004F04",
  backgroundDisabled: "#002E00",
  contrast: "#FFFFFF",
  invertedContrast: "#191326",
  input: "#3D9548",
  primaryDark: "#0098A1",
  tertiary: "#002E00",
  text: "#EAE2FC",
  textDisabled: "#F6EDD9",
  textSubtle: "#EEFEED",
  borderColor: "#524B63",
  card: "#27262c",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #313D5C 0%, #3D2A54 100%)",
  },
};
