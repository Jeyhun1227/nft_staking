import { Box, Stack, Typography } from "@mui/material";
import React, { ReactNode } from "react";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import NextImage from "next/image";
interface Props {
  title: string;
  instruction: string;
  icon: string;
  logo?: ReactNode;
}

export const CheckoutContentMethodsButton = ({
  title,
  instruction,
  icon,
  logo,
}: Props) => {
  return (
    <Box
      width="100%"
      borderRadius={"10px"}
      border="1px solid #625D6A"
      paddingY={{ xs: 1, md: 2 }}
      paddingLeft={{ xs: 1, md: 2 }}
      paddingRight={{ xs: 2, md: 3 }}
      sx={{ background: "#3B3545", cursor: "pointer" }}
    >
      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <Stack spacing={2} direction="row" alignItems="center">
          <NextImage src={icon} />
          <Stack spacing={"4px"}>
            <Typography variant="bodyB2" fontSize={{ xs: 13, md: "inherit" }}>
              {title}
            </Typography>
            <Typography
              variant="body2"
              fontSize={{ xs: 11, md: "inherit" }}
              color="rgba(255, 255, 255, 0.8)"
            >
              {instruction}
            </Typography>
          </Stack>
        </Stack>
        <Stack direction="row" alignItems="center" spacing={{ xs: 1, md: 3 }}>
          {logo}
          <ChevronRightIcon sx={{ fontSize: 30 }} />
        </Stack>
      </Stack>
    </Box>
  );
};
