import GlobalStyles from "@mui/material/GlobalStyles";

export const MUIGlobalStyles = () => (
  <GlobalStyles
    styles={{
      "html, body": {
        color: "white",
        overflowX: "hidden",
      },
      a: {
        textDecoration: "none",
      },
      ".MuiPaper-root.MuiAccordion-root::before": {
        backgroundColor: "transparent",
      },
    }}
  />
);
