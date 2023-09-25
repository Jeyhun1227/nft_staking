import { createTheme } from "@mui/material/styles";
import { themeTypography } from "./typography";
import { themePalette } from "./palette";
import { themeButton } from "./button";

declare module "@mui/material/styles" {
  interface BreakpointOverrides {
    mobile: true;
  }
}

// Create a theme instance.
export const theme = createTheme({
  palette: themePalette,
  typography: themeTypography,

  breakpoints: {
    values: {
      xs: 0,
      mobile: 390,
      sm: 690,
      md: 990,
      lg: 1290,
      xl: 1536,
    },
  },
  components: {
    MuiButton: themeButton,
  },
});
