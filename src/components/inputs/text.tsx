import TextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";

export const AppTextField = styled(TextField)(({ theme }) => ({
  "& .MuiInputBase-input": {
    borderRadius: "8px",
    "&:hover::before": {
      content: "none",
    },
    "&:hover::after": {
      content: "none",
    },
  },

  "& .MuiFilledInput-root": {
    backgroundColor: "transparent",
    borderRadius: "8px",
    border: "1px solid",
    borderColor: "rgba(255, 255, 255, 0.2)",
    "&::before": {
      content: "none",
    },
    "&::after": {
      content: "none",
    },
    "&:hover": {
      borderColor: "white",
      "&::before": {
        content: "none",
      },
      "&::after": {
        content: "none",
      },
    },
    "&:focus": {
      borderColor: "white",
      "&::before": {
        content: "none",
      },
      "&::after": {
        content: "none",
      },
    },
    "&.Mui-focused": {
      borderColor: theme.palette?.primary?.main,
    },
    "&.Mui-error": {
      borderColor: theme.palette?.error?.main,
    },
  },
}));
