import { createTheme, Palette } from "@mui/material";
import { TypographyOptions } from "@mui/material/styles/createTypography";

declare module "@mui/material/styles" {
  interface TypographyVariants {
    body3: React.CSSProperties;
    bodyB1: React.CSSProperties;
    bodyB2: React.CSSProperties;
    title1: React.CSSProperties;
    title2: React.CSSProperties;
    title3: React.CSSProperties;
    title4: React.CSSProperties;
    p1: React.CSSProperties;
    p2: React.CSSProperties;
    p2B: React.CSSProperties;
    headline1: React.CSSProperties;
    headline2: React.CSSProperties;
    headline3: React.CSSProperties;
    subheadline: React.CSSProperties;
    subheader1: React.CSSProperties;
    subheader2: React.CSSProperties;
    subheader3: React.CSSProperties;
    typography1: React.CSSProperties;
    typography2: React.CSSProperties;
    typography3: React.CSSProperties;
    typography4: React.CSSProperties;
    typography5: React.CSSProperties;
    typography6: React.CSSProperties;
    typography7: React.CSSProperties;
    typography8: React.CSSProperties;
    typography9: React.CSSProperties;
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    body3?: React.CSSProperties;
    bodyB1?: React.CSSProperties;
    bodyB2?: React.CSSProperties;
    title1?: React.CSSProperties;
    title2?: React.CSSProperties;
    title3?: React.CSSProperties;
    title4?: React.CSSProperties;
    p1?: React.CSSProperties;
    p2?: React.CSSProperties;
    p2B?: React.CSSProperties;
    headline1?: React.CSSProperties;
    headline2?: React.CSSProperties;
    headline3?: React.CSSProperties;
    subheadline?: React.CSSProperties;
    subheader1?: React.CSSProperties;
    subheader2?: React.CSSProperties;
    subheader3?: React.CSSProperties;
    typography1?: React.CSSProperties;
    typography2?: React.CSSProperties;
    typography3?: React.CSSProperties;
    typography4?: React.CSSProperties;
    typography5?: React.CSSProperties;
    typography6?: React.CSSProperties;
    typography7?: React.CSSProperties;
    typography8?: React.CSSProperties;
    typography9?: React.CSSProperties;
  }
}

// Update the Typography's variant prop options
declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    body3: true;
    bodyB1: true;
    bodyB2: true;
    title1: true;
    title2: true;
    title3: true;
    title4: true;
    p1: true;
    p2: true;
    p2B: true;
    headline1: true;
    headline2: true;
    headline3: true;
    subheadline: true;
    subheader1: true;
    subheader2: true;
    subheader3: true;
    typography1: true;
    typography2: true;
    typography3: true;
    typography4: true;
    typography5: true;
    typography6: true;
    typography7: true;
    typography8: true;
    typography9: true;
  }
}

type Typography =
  | TypographyOptions
  | ((palette: Palette) => TypographyOptions)
  | undefined;

const theme = createTheme();

// Create a theme instance.
export const themeTypography: Typography = {
  fontFamily: "Sora, sans-serif",
  // BODY
  body1: {
    fontWeight: "normal",
    fontSize: 16,
    lineHeight: 1.125,
    textTransform: "none",
  },
  body2: {
    fontWeight: "normal",
    fontSize: 14,
    lineHeight: 1.114,
    textTransform: "none",
  },
  body3: {
    fontWeight: "normal",
    fontSize: 12,
    lineHeight: 1.133,
    textTransform: "none",
  },
  bodyB1: {
    fontWeight: "bold",
    fontSize: 16,
    lineHeight: 1.125,
    textTransform: "none",
  },
  bodyB2: {
    fontWeight: "bold",
    fontSize: 14,
    lineHeight: 1.114,
    textTransform: "none",
  },
  // TITLE
  title1: {
    fontWeight: "bold",
    fontSize: 28,
    lineHeight: 1.11,
    letterSpacing: "-1px",
    textTransform: "none",
    [theme.breakpoints.down("md")]: {
      fontSize: 20,
    },
  },
  title2: {
    fontWeight: "bold",
    fontSize: 22,
    lineHeight: 1.118,
    letterSpacing: "-1px",
    textTransform: "none",
    [theme.breakpoints.down("md")]: {
      fontSize: 17,
    },
  },
  title3: {
    fontWeight: "bold",
    fontSize: 18,
    lineHeight: 1.133,
    letterSpacing: "-0.5px",
    textTransform: "none",
    [theme.breakpoints.down("md")]: {
      fontSize: 12,
    },
  },
  title4: {
    fontWeight: "bold",
    fontSize: 12,
    lineHeight: 1.133,
    textTransform: "uppercase",
  },
  // PARAGRAPH
  p1: {
    fontWeight: "normal",
    fontSize: 16,
    lineHeight: 1.15,
    textTransform: "none",
  },
  p2: {
    fontWeight: "normal",
    fontSize: 14,
    lineHeight: 1.157,
    textTransform: "none",
  },
  p2B: {
    fontWeight: "bold",
    fontSize: 14,
    lineHeight: 1.157,
    textTransform: "none",
  },
  // HEADLINE
  headline1: {
    fontWeight: "bold",
    fontSize: 54,
    lineHeight: 1.11,
    letterSpacing: "-0.01em",
    textTransform: "uppercase",
    [theme.breakpoints.down("md")]: {
      fontSize: 32,
    },
  },
  headline2: {
    fontWeight: "bold",
    fontSize: 48,
    lineHeight: 1.125,
    letterSpacing: "-1px",
    textTransform: "uppercase",
  },
  headline3: {
    fontWeight: "bold",
    fontSize: 32,
    lineHeight: "120%",
    letterSpacing: "-1px",
    textTransform: "none",
    [theme.breakpoints.down("md")]: {
      fontSize: 25,
    },
  },
  subheadline: {
    fontWeight: "800",
    fontSize: 20,
    lineHeight: 1.11,
    letterSpacing: "-0.02em",
    textTransform: "uppercase",
  },
  // SUBHEADER
  subheader1: {
    fontSize: 24,
    lineHeight: 1.14,
    textTransform: "none",
    [theme.breakpoints.down("md")]: {
      fontSize: 18,
    },
  },
  subheader2: {
    fontSize: 22,
    lineHeight: 1.14,
    textTransform: "none",
    [theme.breakpoints.down("md")]: {
      fontSize: 18,
    },
  },
  subheader3: {
    fontSize: 18,
    lineHeight: 1.133,
    textTransform: "none",
  },
  //TYPOGRAPHY
  typography1: {
    fontWeight: "700",
    fontStyle: "normal",
    fontSize: 20,
    lineHeight: "16px",
    textTransform: "none",
  },
  typography2: {
    fontWeight: "bold",
    fontStyle: "normal",
    fontSize: 41,
    lineHeight: "12%",
    letterSpacing: "-1.30px",
    textTransform: "none",
  },
  typography3: {
    fontWeight: "600",
    fontStyle: "normal",
    fontSize: 20,
    lineHeight: "20px",
    textTransform: "none",
  },
  typography4: {
    fontWeight: "400",
    fontStyle: "normal",
    fontSize: 18,
    lineHeight: "20px",
    textTransform: "none",
  },
  typography5: {
    fontWeight: "700",
    fontStyle: "normal",
    fontSize: 35,
    lineHeight: "42px",
    letterSpacing: "-1.30px",
    textTransform: "none",
  },
  typography6: {
    fontWeight: "600",
    fontStyle: "normal",
    fontSize: 35,
    lineHeight: "42px",
    letterSpacing: "-1.31px",
    textTransform: "none",
  },
  typography7: {
    fontWeight: "400",
    fontStyle: "normal",
    fontSize: 28,
    lineHeight: "33.6px",
    letterSpacing: "-1.31px",
    textTransform: "none",
    [theme.breakpoints.down("md")]: {
      fontSize: 20,
    },
  },
  typography8: {
    fontWeight: "400",
    fontStyle: "normal",
    fontSize: 20,
    lineHeight: "25px",
    textTransform: "none",
  },
  typography9: {
    fontWeight: "bold",
    fontStyle: "normal",
    fontSize: 189,
    lineHeight: "110%",
    letterSpacing: "-3.5px",
    textTransform: "uppercase",
    [theme.breakpoints.down("md")]: {
      fontSize: 62,
    },
  },
};
