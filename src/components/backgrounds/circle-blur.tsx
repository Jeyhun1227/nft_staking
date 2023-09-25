import { Box, SxProps } from "@mui/material";
import React from "react";

interface props {
  background?: string;
  width?: string;
  height?: string;
  blur?: string;
  propsStyle?: SxProps;
}

export const CircleBlur = ({
  background = "primary.main",
  propsStyle,
  height = "470px",
  width = "470px",
  blur = "300px",
}: props) => {
  return (
    <Box
      bgcolor={background}
      width="100%"
      height="100%"
      sx={{
        maxWidth: width,
        maxHeight: height,
        borderRadius: "50%",
        filter: `blur(${blur})`,
        ...propsStyle,
      }}
    />
  );
};
