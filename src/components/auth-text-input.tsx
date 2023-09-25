import { TextField, TextFieldProps } from "@mui/material";
import React from "react";

export const TextInputAuth = (props: TextFieldProps) => {
  return (
    <TextField
      variant="outlined"
      fullWidth
      sx={{
        borderColor: "white",
        "& fieldset": {
          borderColor: "white",
          color: "white",
        },
        "& label": {
          color: "white",
        },
        "& input": {
          color: "white",
        },
      }}
      {...props}
    />
  );
};
