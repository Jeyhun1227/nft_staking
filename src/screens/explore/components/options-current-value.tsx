import { Stack, Typography } from "@mui/material";
import React from "react";
import NextImage from "next/image";

const ICON_SIZE = 25;

interface Props {
  value?: string;
}

export const ExploreOptionsCurrentValue = ({ value = "Rap" }: Props) => {
  return (
    <Stack
      direction="row"
      alignItems="center"
      sx={{
        borderRadius: "64px",
        backgroundColor: "primary.main",
        padding: "16.5px 32px",
      }}
    >
      <NextImage
        layout="fixed"
        src="/images/music.svg"
        height={ICON_SIZE}
        width={ICON_SIZE}
      />
      <Typography marginLeft={2}>{value}</Typography>
    </Stack>
  );
};
