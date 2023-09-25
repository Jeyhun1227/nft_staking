import { PaletteOptions } from "@mui/material";

declare module "@mui/material/styles" {
  interface Palette {
    bg: Palette["primary"];
    content: {
      primary: string;
      secondary: string;
      tertiary: string;
      disabled: string;
      onColor: string;
      accent: string;
      gray1: string;
      gray2: string;
    };
    state: {
      activeBorder: string;
      hoverPrimary: string;
      activePrimary: string;
      hoverOnPrimary: string;
      activeOnPrimary: string;
      hoverOnBgPrimary: string;
      activeOnBgPrimary: string;
      hoverOnBgTertiary: string;
      activeOnBgTertiary: string;
      hoverBorder: string;
    };
  }
  interface PaletteOptions {
    bg: PaletteOptions["primary"];
    content: {
      primary: string;
      secondary: string;
      tertiary: string;
      disabled: string;
      onColor: string;
      accent: string;
      gray1: string;
      gray2: string;

    };
    state: {
      activeBorder: string;
      hoverPrimary: string;
      activePrimary: string;
      hoverOnPrimary: string;
      activeOnPrimary: string;
      hoverOnBgPrimary: string;
      activeOnBgPrimary: string;
      hoverOnBgTertiary: string;
      activeOnBgTertiary: string;
      hoverBorder: string;
    };
  }
}

const BG_BODY = "#191225";

const PRIMARY_COLORS = {
  main: "#42A4FF",
  light: "#DAEDFF",
  dark: "#2076CA",
};

export const themePalette: PaletteOptions | undefined = {
  mode: "dark",
  primary: PRIMARY_COLORS,
  info: PRIMARY_COLORS,
  content: {
    primary: "#FFFFFF",
    secondary: "rgba(255, 255, 255, 0.8)",
    tertiary: "rgba(255, 255, 255, 0.4)",
    disabled: "rgba(255, 255, 255, 0.3)",
    onColor: "#000000",
    accent: "#BFFF62",
    gray1: "rgba(255, 255, 255, 0.7)",
    gray2: "#CCCCCC",

  },
  secondary: {
    main: "#BB6BE0",
    dark: "#40256C",
  },
  error: {
    main: "#DE350B",
    light: "#FFEBE6",
  },
  warning: {
    main: "#FFAB00",
    light: "#FFFAE6",
  },
  success: {
    main: "#00875A",
    light: "#E3FCEF",
  },
  bg: {
    light: "#574E65",
    dark: BG_BODY,
    main: "#483D58",
  },
  background: {
    default: BG_BODY,
  },
  action: {
    disabledOpacity: 0.35,
  },
  state: {
    activeBorder: "#1B74E4",
    hoverPrimary: "rgba(27, 116, 228, 0.06)",
    activePrimary: "rgba(27, 116, 228, 0.1)",
    hoverOnPrimary:
      "linear-gradient(0deg, rgba(0, 0, 0, 0.06), rgba(0, 0, 0, 0.06)), #1B74E4",
    activeOnPrimary:
      "linear-gradient(0deg, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), #1B74E4",
    hoverOnBgPrimary:
      "linear-gradient(0deg, rgba(0, 0, 0, 0.06), rgba(0, 0, 0, 0.06)), #F6F6F6",
    activeOnBgPrimary:
      "linear-gradient(0deg, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), #F6F6F6",
    hoverOnBgTertiary:
      "linear-gradient(0deg, rgba(0, 0, 0, 0.06), rgba(0, 0, 0, 0.06)), #EEEEEE",
    activeOnBgTertiary: "rgba(0, 0, 0, 0.1)",
    hoverBorder:
      "linear-gradient(0deg, rgba(0, 0, 0, 0.06), rgba(0, 0, 0, 0.06)), #E2E2E2",
  },
};
