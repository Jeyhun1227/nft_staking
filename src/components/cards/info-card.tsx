import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import NextImage from "next/image";

import checkedIcon from "@/public/images/checked-icon.svg";

export const InfoCard = ({ text = "V1 of the platform" }) => {
  return (
    <Stack direction="row" alignItems="start" width={259}>
      <Box marginRight="12px">
        <NextImage src={checkedIcon} height="24px" />
      </Box>
      <Typography marginBottom={3}>{text}</Typography>
    </Stack>
  );
};
